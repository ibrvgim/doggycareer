import { createClient } from '@/data/supabase/server';

export async function createSavedAppliedJobs(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .insert([{ userId: id }])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

// SAVED JOBS API
export async function updateSavedJobs(id: string, saved: string[]) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .update({ savedJobs: saved })
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

// APPLIED JOBS API
export async function updateAppliedJobs(id: string, applied: string[]) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .update({ appliedJobs: applied })
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function getUserStoredJobs() {
  const supabase = createClient();

  const { data } = await supabase.from('saved-applied-jobs').select('*');
  return data;
}
