'use server';

import { deleteJobAPI, getSingleJob, postJobAPI } from '@/data/jobs/apiJobs';
import { ErrorsType, JobType, PostedJobType } from '@/types/types';
import { differenceInDays } from 'date-fns';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const errors: ErrorsType = {};

export async function repostJob(_: any, data: FormData) {
  const jobId = data.get('jobId') as string;
  const getJob: JobType = await getSingleJob(jobId);

  const repostedJob: PostedJobType = {
    companyName: getJob?.companyName,
    logo: getJob?.logo,
    jobTitle: getJob?.jobTitle,
    location: getJob?.location,
    jobType: getJob?.jobType,
    officeType: getJob?.officeType,
    website: getJob?.website || '',
    employeesNumber: getJob?.employeesNumber,
    jobDescription: getJob?.jobDescription,
    responsibilities: getJob?.responsibilities,
    qualifications: getJob?.qualifications,
    industry: getJob?.industry,
    postAuthor: getJob?.postAuthor,
  };

  if (differenceInDays(new Date(), new Date(getJob.postedAt)) <= 3) {
    errors['repostError'] =
      'You may re - post a vacancy in 3 days after publication.';
    return errors;
  } else {
    const response = await postJobAPI(repostedJob);
    await deleteJobAPI(jobId);
    errors['repostError'] = '';
    revalidatePath('/');
    redirect(`/jobs/${response?.[0].id}`);
  }
}

export async function deleteJob(data: FormData) {
  const jobId = data.get('jobId') as string;

  // disabled for safety reasons
  //   await deleteJobAPI(jobId);
  //   revalidatePath('/');
  //   redirect('/jobs');
}
