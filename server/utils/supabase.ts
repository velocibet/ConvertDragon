import { createClient } from '@supabase/supabase-js'

export const useSupabaseAdmin = () => {
  const config = useRuntimeConfig()
  
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  )
}