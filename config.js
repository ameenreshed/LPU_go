window.LPU_CONFIG = {
  supabaseUrl: 'https://hylvjnmdzjblvzffnjzv.supabase.co',
  supabaseKey: 'sb_publishable_ZtpeRAMOnJoKX0hMG68YfA_dsARfw19',

  center: [75.7055, 31.2535],
  zoom: 16,

  categories: [
    { id: 'academic', label: 'Academic',  icon: 'fa-graduation-cap',   color: '#3b82f6' },
    { id: 'hostel',   label: 'Hostel',    icon: 'fa-house',            color: '#a855f7' },
    { id: 'food',     label: 'Food',      icon: 'fa-utensils',         color: '#ef4444' },
    { id: 'admin',    label: 'Admin',     icon: 'fa-building-columns', color: '#f59e0b' },
    { id: 'library',  label: 'Library',   icon: 'fa-book',             color: '#06b6d4' },
    { id: 'sports',   label: 'Sports',    icon: 'fa-futbol',           color: '#10b981' },
    { id: 'medical',  label: 'Medical',   icon: 'fa-hospital',         color: '#ec4899' },
    { id: 'parking',  label: 'Parking',   icon: 'fa-square-parking',   color: '#64748b' },
    { id: 'poi',      label: 'Point of interest', icon: 'fa-map-pin',  color: '#8b5cf6' },
    { id: 'other',    label: 'Other',     icon: 'fa-cube',             color: '#94a3b8' },
  ],

  entranceTypes: [
    { id: 'main',      label: 'Main' },
    { id: 'side',      label: 'Side' },
    { id: 'service',   label: 'Service' },
    { id: 'emergency', label: 'Emergency' },
  ],

  surfaces: [
    { id: 'concrete', label: 'Concrete' },
    { id: 'paved',    label: 'Paved' },
    { id: 'tiles',    label: 'Tiles' },
    { id: 'dirt',     label: 'Dirt' },
    { id: 'grass',    label: 'Grass' },
  ],
};