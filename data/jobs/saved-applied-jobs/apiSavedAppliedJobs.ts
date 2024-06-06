import { supabase } from '@/data/supabase';

export async function createSavedAppliedJobs(id: string) {
  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .insert([{ userId: id }])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateSavedJobs(id: string, saved: string) {
  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .update({ savedJobs: saved })
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}
