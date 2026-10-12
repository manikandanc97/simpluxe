-- Run AFTER leads.sql. Existing enquiries are not mailed retroactively.
begin;

create table if not exists public.lead_notifications (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  kind text not null check (kind in ('team_email', 'customer_email')),
  status text not null default 'pending' check (status in ('pending', 'processing', 'accepted', 'failed')),
  attempts integer not null default 0,
  next_attempt_at timestamptz not null default now(),
  locked_at timestamptz,
  lease_token uuid,
  first_attempt_at timestamptz,
  email_payload jsonb,
  provider_id text,
  last_error text,
  accepted_at timestamptz,
  created_at timestamptz not null default now(),
  unique (lead_id, kind)
);
alter table public.lead_notifications enable row level security;
revoke all on public.lead_notifications from anon, authenticated;
grant select, insert, update, delete on public.lead_notifications to service_role;
create index if not exists lead_notifications_pending_idx
  on public.lead_notifications (next_attempt_at) where status in ('pending', 'processing');

create or replace function public.queue_lead_notifications()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.lead_notifications (lead_id, kind)
  values (new.id, 'team_email'), (new.id, 'customer_email')
  on conflict (lead_id, kind) do nothing;
  return new;
end;
$$;
revoke all on function public.queue_lead_notifications() from public, anon, authenticated;
drop trigger if exists queue_lead_notifications on public.leads;
create trigger queue_lead_notifications after insert on public.leads
  for each row execute function public.queue_lead_notifications();

-- SKIP LOCKED + lease tokens prevent concurrent workers from claiming one job.
create or replace function public.claim_lead_notifications(batch_size integer default 10, target_lead uuid default null)
returns setof public.lead_notifications
language sql security definer set search_path = '' as $$
  with jobs as (
    select id from public.lead_notifications
    where ((status = 'pending' and next_attempt_at <= now())
      or (status = 'processing' and locked_at < now() - interval '10 minutes'))
      and (target_lead is null or lead_id = target_lead)
    order by created_at
    for update skip locked
    limit greatest(1, least(batch_size, 20))
  )
  update public.lead_notifications n
    set status = 'processing', locked_at = now(), lease_token = gen_random_uuid()
  from jobs where n.id = jobs.id returning n.*;
$$;
revoke all on function public.claim_lead_notifications(integer, uuid) from public, anon, authenticated;
grant execute on function public.claim_lead_notifications(integer, uuid) to service_role;

commit;
