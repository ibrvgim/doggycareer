'use server';

import { getUserAPI } from '@/data/auth/apiUser';
import {
  getUserStoredJobs,
  updateSavedJobs,
} from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { revalidatePath } from 'next/cache';

export async function saveJobAction(data: FormData) {
  const jobId = data.get('jobId') as string;
  const user = await getUserAPI();
  const storedJobs = await getUserStoredJobs();

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  if (user?.id && jobId) {
    if (listSavedJobs.includes(jobId)) {
      const clearedJobs = listSavedJobs.filter((job: string) => job !== jobId);
      await updateSavedJobs(user?.id, [...clearedJobs]);
    } else await updateSavedJobs(user?.id, [jobId, ...listSavedJobs]);
    revalidatePath('/personal-jobs');
  }
}
