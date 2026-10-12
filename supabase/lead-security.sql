-- Run after leads.sql. Serializes inserts per normalized email so simultaneous
-- verified requests cannot bypass the three-enquiries-per-15-minutes limit.
-- This migration creates no enquiry rows and leaves notification triggers intact.
begin;

create index if not exists leads_email_created_at_security_idx
  on public.leads (lower(email), created_at desc);

create or replace function public.enforce_lead_submission_limit()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
declare
  normalized_email text := pg_catalog.lower(pg_catalog.btrim(new.email));
  recent_count bigint;
begin
  -- Transaction-scoped lock stays held until the lead insert commits or rolls back.
  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended('simpluxe-lead-email:' || normalized_email, 0)
  );

  select count(*) into recent_count
  from public.leads
  where pg_catalog.lower(email) = normalized_email
    and created_at >= pg_catalog.clock_timestamp() - interval '15 minutes';

  if recent_count >= 3 then
    raise exception using
      errcode = 'P0001',
      message = 'lead_rate_limit_exceeded';
  end if;

  return new;
end;
$$;

revoke all on function public.enforce_lead_submission_limit() from public, anon, authenticated;

drop trigger if exists enforce_lead_submission_limit on public.leads;
create trigger enforce_lead_submission_limit
  before insert on public.leads
  for each row execute function public.enforce_lead_submission_limit();

-- Read-only deployment check, callable only by the server role.
create or replace function public.lead_security_ready()
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select exists (
    select 1
    from pg_catalog.pg_trigger t
    join pg_catalog.pg_class c on c.oid = t.tgrelid
    join pg_catalog.pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relname = 'leads'
      and c.relrowsecurity
      and t.tgname = 'enforce_lead_submission_limit'
      and t.tgenabled in ('O', 'A') and not t.tgisinternal
      and t.tgfoid = 'public.enforce_lead_submission_limit()'::regprocedure
  );
$$;

revoke all on function public.lead_security_ready() from public, anon, authenticated;
grant execute on function public.lead_security_ready() to service_role;

commit;
