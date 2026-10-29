-- ============================================================
-- LPU GO V1 — Outdoor Navigation Data
-- Run in Supabase → SQL Editor → Run
-- ============================================================
create extension if not exists pgcrypto;

-- Drop everything from previous attempts
drop table if exists public.obstacles cascade;
drop table if exists public.zones cascade;
drop table if exists public.paths cascade;
drop table if exists public.places cascade;

-- ============================================================
-- PLACES — buildings, entrances, and POIs
-- ============================================================
create table public.places (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('building', 'entrance', 'poi')),

  -- Identity
  name text not null,
  short_code text,
  full_name text,
  category text,
  description text,

  -- Geometry
  lat double precision not null,
  lng double precision not null,
  footprint_geojson jsonb,
  height_m numeric default 12,
  floors integer,

  -- Relationships
  parent_building_id uuid references public.places(id) on delete cascade,
  entrance_type text,

  -- Info
  opening_hours text,
  amenities text[] default '{}',
  is_accessible boolean default true,

  created_by uuid references auth.users(id),
  created_by_email text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================================
-- PATHS — footpaths and roads only (V1)
-- ============================================================
create table public.paths (
  id uuid primary key default gen_random_uuid(),
  name text,
  path_type text not null check (path_type in ('footpath', 'road')),
  geojson jsonb not null,
  width_m numeric,
  surface text,
  is_lit boolean default true,
  is_accessible boolean default true,
  notes text,

  created_by uuid references auth.users(id),
  created_by_email text,
  created_at timestamptz default now()
);

-- ============================================================
-- Indexes
-- ============================================================
create index places_kind_idx on public.places (kind);
create index places_parent_idx on public.places (parent_building_id);
create index paths_type_idx on public.paths (path_type);

-- ============================================================
-- RLS — any signed-in user can read/write; only creator deletes
-- ============================================================
alter table public.places enable row level security;
alter table public.paths  enable row level security;

create policy "read places"    on public.places for select to authenticated using (true);
create policy "read paths"     on public.paths  for select to authenticated using (true);
create policy "insert places"  on public.places for insert to authenticated with check (true);
create policy "insert paths"   on public.paths  for insert to authenticated with check (true);
create policy "update places"  on public.places for update to authenticated using (true);
create policy "update paths"   on public.paths  for update to authenticated using (true);
create policy "delete places"  on public.places for delete to authenticated using (auth.uid() = created_by);
create policy "delete paths"   on public.paths  for delete to authenticated using (auth.uid() = created_by);