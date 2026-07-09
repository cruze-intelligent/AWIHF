create extension if not exists pgcrypto;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'application_status') then
    create type application_status as enum (
      'pending',
      'under_review',
      'shortlisted',
      'accepted',
      'rejected',
      'waitlisted'
    );
  end if;
end $$;

do $$
begin
  if exists (select 1 from pg_type where typname = 'application_status')
    and not exists (
      select 1
      from pg_enum
      where enumtypid = 'application_status'::regtype
        and enumlabel = 'waitlisted'
    ) then
    alter type application_status add value 'waitlisted';
  end if;
end $$;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'submission_type') then
    create type submission_type as enum (
      'contact',
      'mentorship_application',
      'volunteer_application',
      'event_registration'
    );
  end if;
end $$;

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  subject text,
  message text not null,
  source text default 'website',
  ip_hash text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists mentorship_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  gender text not null,
  date_of_birth date not null,
  phone_number text not null,
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  institution text not null,
  program_of_study text not null,
  year_of_study text not null,
  motivation text not null,
  career_interests text not null,
  leadership_experience text,
  additional_comments text,
  cv_file_url text,
  cv_file_public_id text,
  cv_file_name text,
  cv_file_size integer check (cv_file_size is null or cv_file_size >= 0),
  cv_file_mime_type text,
  transcript_file_url text,
  transcript_file_public_id text,
  transcript_file_name text,
  transcript_file_size integer check (transcript_file_size is null or transcript_file_size >= 0),
  transcript_file_mime_type text,
  status application_status not null default 'pending',
  reviewed_by text,
  reviewed_at timestamptz,
  admin_notes text,
  review_notes text,
  ip_hash text,
  user_agent text,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  subscribed_at timestamptz not null default now(),
  is_active boolean not null default true
);

create table if not exists volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  phone_number text,
  area_of_interest text not null,
  message text,
  status application_status not null default 'pending',
  ip_hash text,
  user_agent text,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_key text not null,
  full_name text not null,
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  phone_number text,
  metadata jsonb not null default '{}'::jsonb,
  submitted_at timestamptz not null default now()
);

create table if not exists submission_audit_log (
  id uuid primary key default gen_random_uuid(),
  submission_type submission_type not null,
  submission_id uuid not null,
  action text not null,
  actor_email text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_email_idx on contact_submissions (email);
create index if not exists contact_submissions_created_at_idx on contact_submissions (created_at desc);
create index if not exists mentorship_applications_email_idx on mentorship_applications (email);
create index if not exists mentorship_applications_status_idx on mentorship_applications (status);
create index if not exists mentorship_applications_submitted_at_idx on mentorship_applications (submitted_at desc);
create index if not exists newsletter_subscribers_email_idx on newsletter_subscribers (email);
create index if not exists newsletter_subscribers_subscribed_at_idx on newsletter_subscribers (subscribed_at desc);
create index if not exists volunteer_applications_email_idx on volunteer_applications (email);
create index if not exists volunteer_applications_status_idx on volunteer_applications (status);
create index if not exists event_registrations_email_idx on event_registrations (email);
create index if not exists event_registrations_event_key_idx on event_registrations (event_key);

alter table mentorship_applications add column if not exists admin_notes text;
alter table mentorship_applications add column if not exists cv_file_public_id text;
alter table mentorship_applications add column if not exists transcript_file_public_id text;
