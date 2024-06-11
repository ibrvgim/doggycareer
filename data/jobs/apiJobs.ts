import { PostedJobType } from '@/types/types';
import { createClient } from '../supabase/server';

export async function getJobs() {
  const supabase = createClient();

  // await new Promise((res) => setTimeout(res, 5000));
  const { data: jobs, error } = await supabase.from('jobs').select('*');
  if (error) throw new Error(error.message);

  return jobs;
}

export async function getSingleJob(id: string) {
  const supabase = createClient();

  const { data: job, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error.message);
  }

  return job;
}

export async function postJobAPI(job: PostedJobType) {
  const supabase = createClient();

  const { data, error } = await supabase.from('jobs').insert([job]).select();

  if (error) throw new Error(error.message);
  return data;
}
