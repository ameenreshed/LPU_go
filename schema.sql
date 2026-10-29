-- ============================================================
-- LPU GO — Data Collection Schema
-- Run in Supabase → SQL Editor → Run
-- ============================================================

-- ── Tables ──────────────────────────────────────────────
create table if not exists public.places (
  id                uuid primary key default gen_random_uuid(),
  name              text not null,
  category          text not null default 'other',
  lat               double precision not null,
  lng               double precision not null,
  footprint_geojson jsonb,                  -- optional polygon (GeoJSON)
  height_m          numeric default 10,
  notes             text,
  created_by        uuid references auth.users(id),
  created_by_email  text,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

create table if not exists public.paths (
  id                uuid primary key default gen_random_uuid(),
  name              text,
  geojson           jsonb not null,         -- GeoJSON LineString
  is_indoor         boolean default false,
  is_accessible     boolean default true,
  notes             text,
  created_by        uuid references auth.users(id),
  created_by_email  text,
  created_at        timestamptz default now()
);

create index if not exists places_created_idx on public.places (created_at desc);
create index if not exists paths_created_idx  on public.paths  (created_at desc);

-- ── RLS ─────────────────────────────────────────────────
alter table public.places enable row level security;
alter table public.paths  enable row level security;

-- Everyone authenticated can read
create policy "auth read places"
  on public.places for select to authenticated using (true);

create policy "auth read paths"
  on public.paths for select to authenticated using (true);

-- Everyone authenticated can insert
create policy "auth insert places"
  on public.places for insert to authenticated with check (true);

create policy "auth insert paths"
  on public.paths for insert to authenticated with check (true);

-- Everyone authenticated can update
create policy "auth update places"
  on public.places for update to authenticated using (true);

create policy "auth update paths"
  on public.paths for update to authenticated using (true);

-- Only the person who created can delete
create policy "auth delete own places"
  on public.places for delete to authenticated using (auth.uid() = created_by);

create policy "auth delete own paths"
  on public.paths for delete to authenticated using (auth.uid() = created_by);