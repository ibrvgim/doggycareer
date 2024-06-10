import { notFound } from 'next/navigation';
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
