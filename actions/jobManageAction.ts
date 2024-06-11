'use server';

import { deleteJobAPI, getSingleJob, postJobAPI } from '@/data/jobs/apiJobs';
import { JobType, PostedJobType } from '@/types/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function repostJob(data: FormData) {
  const jobId = data.get('jobId') as string;
  const getJob: JobType = await getSingleJob(jobId);

  const repostedJob: PostedJobType = {
    companyName: getJob?.companyName,
    logo: getJob?.logo,
    jobTitle: getJob?.jobTitle,
    location: getJob?.location,
    jobType: getJob?.jobType,
    officeType: getJob?.officeType,
    website: getJob?.website,
    employeesNumber: getJob?.employeesNumber,
    jobDescription: getJob?.jobDescription,
    responsibilities: getJob?.responsibilities,
    qualifications: getJob?.qualifications,
    industry: getJob?.industry,
    postAuthor: getJob?.postAuthor,
  };

  const response = await postJobAPI(repostedJob);
  await deleteJobAPI(jobId);
  revalidatePath('/');
  redirect(`/jobs/${response?.[0].id}`);
}

export async function deleteJob(data: FormData) {
  const jobId = data.get('jobId') as string;

  // disabled for safety reasons
  //   await deleteJobAPI(jobId);
  //   revalidatePath('/');
  //   redirect('/jobs');
}
