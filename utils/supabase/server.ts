import { connection } from "next/server";
import { cookies } from "next/headers";
export async function createClient() {
 // Auth initialization reads the clock; run it only after a request arrives.
 await connection();
 const { createServerClient } = await import("@supabase/ssr");
 const store = await cookies();
 return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
  cookies: { getAll: () => store.getAll(), setAll(values) {
   try { values.forEach(({name,value,options}) => store.set(name,value,options)); }
   catch { /* Server Components cannot write cookies; proxy refreshes them. */ }
  }}
 });
}

