'use server';

import { getUserAPI } from '@/data/auth/apiUser';
import {
  getUserStoredJobs,
  updateAppliedJobs,
  updateArchiveJobs,
  updateSavedJobs,
} from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function saveJobAction(data: FormData) {
  const jobId = data.get('jobId') as string;
  const [user, storedJobs] = await Promise.all([
    getUserAPI(),
    getUserStoredJobs(),
  ]);

  if (user?.role !== 'authenticated') redirect('/authentication');

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  if (user?.id && jobId) {
    if (listSavedJobs.includes(jobId)) {
      const clearedJobs = listSavedJobs.filter((job: string) => job !== jobId);
      await updateSavedJobs(user?.id, [...clearedJobs]);
    } else await updateSavedJobs(user?.id, [jobId, ...listSavedJobs]);
    revalidatePath('/');
  }
}

export async function archiveJobAction(data: FormData) {
  const jobId = data.get('jobId') as string;
  const [user, storedJobs] = await Promise.all([
    getUserAPI(),
    getUserStoredJobs(),
  ]);

  if (user?.role !== 'authenticated') redirect('/authentication');

  const listArchivedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).archive;

  const listAppliedJobs = storedJobs
    ?.find((item) => item.userId === user?.id)
    .appliedJobs.filter((item: string) => item !== jobId);

  if (user?.id && jobId) {
    await updateArchiveJobs(user?.id, [jobId, ...listArchivedJobs]);
    await updateAppliedJobs(user?.id, [...listAppliedJobs]);
    revalidatePath('/');
  }
}
