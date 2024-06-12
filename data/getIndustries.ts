import { createClient } from './supabase/server';

export async function getIndustries() {
  const supabase = createClient();

  const { data, error } = await supabase.from('jobs').select('*');
  if (error) throw new Error(error.message);

  const industries = Array.from(new Set(data.map((item) => item.industry)));
  return industries;
}
