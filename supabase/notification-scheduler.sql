-- Run after lead-notifications.sql, deploying the API route, and setting CRON_SECRET.
-- In Supabase Vault, first add two named secrets using the dashboard:
-- lead_notification_url = https://simpluxe.in/api/lead-notifications
-- lead_notification_cron_secret = the SAME random value as Vercel CRON_SECRET.
-- Do not paste secret values into this committed file.
create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;

do $$
begin
  if not exists (select 1 from vault.decrypted_secrets where name = 'lead_notification_url')
    or not exists (select 1 from vault.decrypted_secrets where name = 'lead_notification_cron_secret') then
    raise exception 'Create lead_notification_url and lead_notification_cron_secret in Supabase Vault first';
  end if;
end;
$$;

-- Scheduling again with the same name updates the existing job.
select cron.schedule('simpluxe-lead-notifications', '*/5 * * * *', $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'lead_notification_url' limit 1),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || (select decrypted_secret from vault.decrypted_secrets where name = 'lead_notification_cron_secret' limit 1)
    ),
    body := '{}'::jsonb,
    timeout_milliseconds := 150000
  );
$$);
