import { getJobs } from '@/data/jobs/apiJobs';
import { getUserAPI } from '@/data/auth/apiUser';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import JobCard from './JobCard';
import { JobType } from '@/types/types';

async function JobSuggestions({ slugJob }: { slugJob: string }) {
  const [allJobs, user, storedJobs] = await Promise.all([
    getJobs(),
    getUserAPI(),
    getUserStoredJobs(),
  ]);

  const listSavedJobs: string[] = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.savedJobs;

  const listAppliedJobs: string[] = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.appliedJobs;

  const listArchivedJobs: string[] = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.archive;

  // exclude current job, jobs posted by user and jobs that user already applied, archived
  const filteredJobs: JobType[] = allJobs
    .filter(
      (job: JobType) =>
        job.id !== Number(slugJob) &&
        !listAppliedJobs?.includes(job.id.toString()) &&
        !listArchivedJobs?.includes(job.id.toString()) &&
        job.postAuthor !== user?.id
    )
    .slice(0, 5);

  return (
    <section className='mt-10 pt-16 pb-20 px-[20%] bg-gray-50'>
      <p className='text-4xl font-bold mb-8 text-cyan-700 tracking-wider'>
        Other Job Suggestions
      </p>

      <div className='flex flex-col gap-7'>
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            savedJobs={listSavedJobs}
            aplliedJobs={listAppliedJobs}
          />
        ))}
      </div>
    </section>
  );
}

export default JobSuggestions;
