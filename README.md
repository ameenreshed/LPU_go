# LPU GO — Data Collection Studio

A standalone webapp for a 3-person team to collect campus data (places, walkways, buildings) into Supabase. Works on any device with a browser.

## 📋 What you collect

| Type | How | Example |
|---|---|---|
| **Places** | Tap on map | Block 27, Main Gate, Sports Complex |
| **Walkways** | Draw a line by tapping multiple points | Footpaths between blocks |
| **Buildings** | Draw a polygon around a building | Block outlines for 3D view |

## 🛠 Setup (10 minutes)

### 1. Create a Supabase project

1. Go to https://supabase.com → Sign in → **New project**
2. Save the database password somewhere safe
3. Wait ~2 minutes for the project to be ready

### 2. Run the database schema

1. In your Supabase project → **SQL Editor** (left sidebar)
2. Click **+ New query**
3. Paste the entire contents of `schema.sql`
4. Click **Run** (or press `Ctrl+Enter`)

### 3. Create 3 user accounts (for your team)

1. **Authentication → Users → Add user**
2. Add 3 accounts with emails and passwords (pick something simple like `team1@lpu.in`, `team2@lpu.in`, `team3@lpu.in`)
3. ⚠️ Check **Auto Confirm User** for each

### 4. Get your keys

**Project Settings → API:**

- **Project URL** → copy
- **anon public** key → copy

### 5. Edit `config.js`

```javascript
supabaseUrl: 'https://yourproject.supabase.co',
supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
```

## 🚀 Run locally

Just open `index.html` in your browser. That's it. No server needed.

## 🌐 Host it (free)

### Option A — Netlify Drop (fastest)

1. Go to https://app.netlify.com/drop
2. Drag the **entire folder** onto the page
3. Done — you get a URL like `https://lpu-data-abc123.netlify.app`

### Option B — GitHub Pages

1. Create a GitHub repo
2. Upload the 4 files
3. **Settings → Pages → Source: main → Save**
4. Your URL: `https://yourusername.github.io/lpu-data/`

### Option C — Vercel

1. Go to https://vercel.com → **New Project**
2. Import the folder or GitHub repo
3. Deploy — done

> ⚠️ **HTTPS is required for GPS location** — all three options give you free HTTPS.

## 👥 Share with your team

Send them:
- The hosted URL
- Their login email + password

Each person signs in on their own device and can collect data. Everyone sees everyone else's work in real-time (refresh button or reload the page to see updates).

## 📊 Export the data (later, when building the final app)

In Supabase → **SQL Editor**, run:

```sql
select jsonb_pretty(
  jsonb_agg(
    jsonb_build_object(
      'id', id,
      'name', name,
      'category', category,
      'lat', lat,
      'lng', lng,
      'footprint', footprint_geojson,
      'height', height_m,
      'notes', notes
    )
  )
) as places
from places;
```

Copy the result → that's your `places.json` for the final app.

Same for paths:

```sql
select jsonb_pretty(
  jsonb_agg(
    jsonb_build_object(
      'id', id,
      'name', name,
      'geojson', geojson,
      'is_indoor', is_indoor,
      'is_accessible', is_accessible
    )
  )
) as paths
from paths;
```

## 📱 Using the app

### Collect places
1. Tap **Places** tab
2. Tap on the map where a place is
3. Fill name + category
4. Save

### Collect walkways
1. Tap **Paths** tab
2. Tap along the path (multiple points)
3. **Double-tap** to finish
4. Name the path (optional)
5. Save

### Collect buildings (footprints)
1. Tap **Buildings** tab
2. Tap around the building outline
3. **Double-tap** to finish (needs ≥3 points)
4. Fill name + category + height
5. Save

### Tips
- **Zoom in** before drawing for accuracy
- **Locate** button (📍) jumps to your GPS location
- **3D** button switches to tilted view to see buildings
- **Refresh** (🔄) pulls latest data from teammates
- Only the person who added an item can delete it

## 🐛 Troubleshooting

| Problem | Fix |
|---|---|
| "Edit config.js" warning | Add your Supabase URL and key to `config.js` |
| Login says "Invalid login credentials" | User doesn't exist or wasn't confirmed → re-create in Supabase dashboard |
| Map is blank | Check DevTools → Console → look for CDN blocks (ad-blocker? firewall?) |
| "Save failed" when saving | Not signed in, or RLS not enabled → re-run `schema.sql` |
| Nothing loads | Check `config.js` URL has no trailing space |

## 🔒 Security note

This tool uses Supabase RLS (Row Level Security):
- Anyone signed in can **read** and **write**
- Only the **creator** can **delete** their own items
- The `anon` key is safe to expose — RLS enforces actual permissions

For a 3-person trusted team, this is appropriate. Do **not** use this setup for a public app.