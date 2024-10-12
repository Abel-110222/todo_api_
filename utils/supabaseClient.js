

/**
 * Creates a Supabase client for the browser.
 *
 * @returns {import('@supabase/supabase-js').SupabaseClient} The Supabase client.
 */
export const createClient = () =>
    
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
