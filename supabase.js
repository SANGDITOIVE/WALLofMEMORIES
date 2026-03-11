const SUPABASE_URL = "https://ifarghceexpsfyfatjkb.supabase.co"

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)
