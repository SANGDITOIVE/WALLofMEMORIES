const SUPABASE_URL = "https://ifarghceexpsfyfatjkb.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYXJnaGNlZXhwc2Z5ZmF0amtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNTkyNDQsImV4cCI6MjA4ODczNTI0NH0.QRxgy_NDmHGGNOP3Di-zW5LlDy_sKVdSjbGa2zjk2qQ"

if (!window.supabase) {
  console.error('Supabase library not loaded!');
}

const supabaseClient = window.supabase?.createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
)
