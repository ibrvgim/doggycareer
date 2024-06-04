import { supabase } from '../supabase';

export async function getJobs() {
  // await new Promise((res) => setTimeout(res, 5000));
  const { data: jobs, error } = await supabase.from('jobs').select('*');
  if (error) throw new Error(error.message);

  return jobs;
}

export async function getSingleJob(id: string) {
  const { data: job, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);

  return job;
}
