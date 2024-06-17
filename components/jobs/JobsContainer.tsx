'use client';

import { JobType } from '@/types/types';
import FiltersList from './FiltersList';
import JobsList from './JobsList';

function JobsContainer({
  userId,
  allJobs,
  listSavedJobs,
  listAppliedJobs,
  listArchivedJobs,
}: {
  userId: string | undefined;
  allJobs: JobType[];
  listSavedJobs: string[];
  listAppliedJobs: string[];
  listArchivedJobs: string[];
}) {
  const filteredJobs = allJobs.filter(
    (job) =>
      job.postAuthor !== userId &&
      job.active &&
      !listArchivedJobs?.includes(job?.id.toString())
  );

  return (
    <section className='flex gap-12 py-20 px-28'>
      <FiltersList />
      <JobsList
        allJobs={filteredJobs}
        savedJobs={listSavedJobs}
        aplliedJobs={listAppliedJobs}
      />
    </section>
  );
}

export default JobsContainer;
