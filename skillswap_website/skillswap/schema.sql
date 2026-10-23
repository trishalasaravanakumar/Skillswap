-- Paste this whole file into Supabase -> SQL Editor -> New query -> Run.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Member',
  location text default '',
  bio text default '',
  created_at timestamptz not null default now()
);

create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind text not null check (kind in ('teach','learn')),
  title text not null check (char_length(title) between 1 and 100),
  level text default '',
  description text default '' check (char_length(description) <= 500),
  created_at timestamptz not null default now()
);

create index if not exists skills_user_idx on public.skills(user_id);

alter table public.profiles enable row level security;
alter table public.skills enable row level security;

-- Any logged-in member can see profiles and skills (needed for matching)
create policy "profiles readable by members" on public.profiles
  for select to authenticated using (true);
create policy "members create own profile" on public.profiles
  for insert to authenticated with check (id = auth.uid());
create policy "members edit own profile" on public.profiles
  for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

create policy "skills readable by members" on public.skills
  for select to authenticated using (true);
create policy "members add own skills" on public.skills
  for insert to authenticated with check (user_id = auth.uid());
create policy "members edit own skills" on public.skills
  for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "members delete own skills" on public.skills
  for delete to authenticated using (user_id = auth.uid());
