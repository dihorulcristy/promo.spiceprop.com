import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client public pentru operatiuni de clienți, deși vom folosi API route pt leaduri:
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client admin pt DB admin rights (pentru salvarea de leads ca sa nu avem probleme cu Row Level Security)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey)
