/* ============================================================
   LPU GO — Data Collection Config
   Edit these 2 values, then open index.html (or host it).
   Get them from: Supabase → Project Settings → API
   ============================================================ */

window.LPU_CONFIG = {
  // ── Supabase ────────────────────────────────────────────
  supabaseUrl: 'https://hylvjnmdzjblvzffnjzv.supabase.co',      // https://xxxx.supabase.co
  supabaseKey: 'sb_publishable_ZtpeRAMOnJoKX0hMG68YfA_dsARfw19',         // long eyJ... string

  // ── Map defaults ────────────────────────────────────────
  center: [75.7055, 31.2535],           // [lng, lat] — LPU campus
  zoom: 16,

  // ── Categories for places ───────────────────────────────
  categories: [
    { id: 'academic', label: '🎓 Academic',  color: '#3b82f6' },
    { id: 'hostel',   label: '🏠 Hostel',    color: '#a855f7' },
    { id: 'food',     label: '🍔 Food',      color: '#ef4444' },
    { id: 'sports',   label: '⚽ Sports',    color: '#10b981' },
    { id: 'admin',    label: '🏛 Admin',     color: '#f59e0b' },
    { id: 'medical',  label: '🏥 Medical',   color: '#ec4899' },
    { id: 'other',    label: '📦 Other',     color: '#94a3b8' },
  ],
};