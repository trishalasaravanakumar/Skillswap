-- Run this ONCE in Supabase -> SQL Editor -> New query (adds chat).

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references auth.users(id) on delete cascade,
  receiver_id uuid not null references auth.users(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 1000),
  created_at timestamptz not null default now(),
  check (sender_id <> receiver_id)
);

create index if not exists messages_sender_idx on public.messages(sender_id);
create index if not exists messages_receiver_idx on public.messages(receiver_id);

alter table public.messages enable row level security;

create policy "members read their own messages" on public.messages
  for select to authenticated
  using (sender_id = auth.uid() or receiver_id = auth.uid());

create policy "members send as themselves" on public.messages
  for insert to authenticated
  with check (sender_id = auth.uid());
