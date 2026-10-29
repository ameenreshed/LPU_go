# LPU GO — Data Studio

Advanced campus data collection tool for the LPU GO team.

## Setup

1. **Supabase project** → run `schema.sql` in SQL Editor
2. **Create users** → Authentication → Users → Add user (check "Auto Confirm")
3. **Edit `config.js`** → paste Project URL + anon key
4. **Open `index.html`** (or deploy to Netlify / GitHub Pages)

## Features

### Places (POIs, buildings, blocks)
- **Short code** (e.g. "27")
- **Full name** (e.g. "Block 27 — CSE Department")
- **Category** (10 types with icons + colors)
- **Amenities** (WiFi, AC, lift, ATM, washroom, etc.)
- **Opening hours**
- **Contact phone / email**
- **Description**
- **Wheelchair accessibility**
- **Photos** (Supabase Storage)
- **Building footprint** (polygon + height + floors)

### Walkways / Paths
- Manual drawing (tap points, double-tap to finish)
- **Live GPS tracking** (walk with phone — accuracy-aware, auto-filtered)
- **Path type** (footpath, road, indoor, bridge, stairs, ramp)
- **Surface** (concrete, paved, tiles, dirt, grass)
- **Width** (metres)
- **Lit at night**, **wheelchair accessible**, **has steps** flags

### Management
- **Search** any item
- **Filter** by category
- **Edit** every field after creation
- **Delete** your own items
- **Stats dashboard** — completion %, category breakdown, contributor list
- **Export** JSON or GeoJSON for the final navigation app

### UI
- **Mobile** — bottom nav + bottom sheet panels
- **Desktop** — fixed left sidebar + full-height map
- **FAB** — locate GPS + toggle 3D
- **Top bar** — search + user avatar
- **Mode indicator** — tells you what tapping the map will do

## File structure

```
├── index.html      # entire app
├── config.js       # Supabase URL + anon key
├── schema.sql      # database setup
└── README.md
```

## Deploy

- **Netlify Drop**: https://app.netlify.com/drop → drag folder
- **GitHub Pages**: upload → Settings → Pages → main
- **Vercel**: import → deploy

All give free HTTPS (required for GPS).

## Workflow for the team

1. **You** — draw building footprints for every block in the campus
2. **Teammate 1** — walk every walkway with the GPS track recorder
3. **Teammate 2** — add POIs (ATMs, washrooms, food stalls) as places
4. Everyone refreshes periodically to see progress
5. When done → Stats → Export → feed data to the final LPU GO app