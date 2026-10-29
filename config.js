window.LPU_CONFIG = {
  supabaseUrl: 'https://hylvjnmdzjblvzffnjzv.supabase.co',      // https://xxxx.supabase.co
  supabaseKey: 'sb_publishable_ZtpeRAMOnJoKX0hMG68YfA_dsARfw19',         // eyJ... or sb_publishable_...

  center: [75.7055, 31.2535],
  zoom: 16,

  categories: [
    { id: 'academic', label: 'Academic',   icon: 'fa-graduation-cap', color: '#3b82f6' },
    { id: 'hostel',   label: 'Hostel',     icon: 'fa-house',          color: '#a855f7' },
    { id: 'food',     label: 'Food',       icon: 'fa-utensils',       color: '#ef4444' },
    { id: 'sports',   label: 'Sports',     icon: 'fa-futbol',         color: '#10b981' },
    { id: 'admin',    label: 'Admin',      icon: 'fa-building-columns', color: '#f59e0b' },
    { id: 'medical',  label: 'Medical',    icon: 'fa-hospital',       color: '#ec4899' },
    { id: 'library',  label: 'Library',    icon: 'fa-book',           color: '#06b6d4' },
    { id: 'parking',  label: 'Parking',    icon: 'fa-square-parking', color: '#64748b' },
    { id: 'poi',      label: 'Point of interest', icon: 'fa-map-pin', color: '#8b5cf6' },
    { id: 'other',    label: 'Other',      icon: 'fa-cube',           color: '#94a3b8' },
  ],

  amenities: [
    { id: 'wifi',     label: 'WiFi' },
    { id: 'ac',       label: 'AC' },
    { id: 'lift',     label: 'Lift' },
    { id: 'parking',  label: 'Parking' },
    { id: 'atm',      label: 'ATM' },
    { id: 'food',     label: 'Food' },
    { id: 'washroom', label: 'Washroom' },
    { id: 'water',    label: 'Water' },
    { id: 'lab',      label: 'Lab' },
    { id: 'library',  label: 'Library' },
    { id: 'medical',  label: 'Medical' },
  ],

  pathTypes: [
    { id: 'footpath', label: 'Footpath' },
    { id: 'road',     label: 'Road' },
    { id: 'indoor',   label: 'Indoor corridor' },
    { id: 'bridge',   label: 'Bridge' },
    { id: 'stairs',   label: 'Stairs' },
    { id: 'ramp',     label: 'Ramp' },
  ],

  surfaces: [
    { id: 'concrete', label: 'Concrete' },
    { id: 'paved',    label: 'Paved' },
    { id: 'tiles',    label: 'Tiles' },
    { id: 'dirt',     label: 'Dirt' },
    { id: 'grass',    label: 'Grass' },
  ],
};