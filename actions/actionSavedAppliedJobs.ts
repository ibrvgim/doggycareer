'use server';

import { getUserAPI } from '@/data/auth/apiUser';
import {
  getSavedJobs,
  updateSavedJobs,
} from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { revalidatePath } from 'next/cache';

export async function saveJobAction(data: FormData) {
  const jobId = data.get('jobId') as string;
  const user = await getUserAPI();
  const savedJobs = await getSavedJobs();

  const getCurrentUserSavedJobs = savedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  if (user?.id && jobId) {
    if (getCurrentUserSavedJobs.includes(jobId)) {
      const clearedJobs = getCurrentUserSavedJobs.filter(
        (job: string) => job !== jobId
      );
      await updateSavedJobs(user?.id, [...clearedJobs]);
    } else await updateSavedJobs(user?.id, [...getCurrentUserSavedJobs, jobId]);
    revalidatePath('/personal-jobs');
  }
}
