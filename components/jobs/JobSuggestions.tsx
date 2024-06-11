import { getJobs } from '@/data/jobs/apiJobs';
import JobCard from './JobCard';
import { getUserAPI } from '@/data/auth/apiUser';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';

async function JobSuggestions({ slugJob }: { slugJob: string }) {
  const allJobs = await getJobs();
  const user = await getUserAPI();
  const storedJobs = await getUserStoredJobs();

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.savedJobs;

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.appliedJobs;

  // exclude current job and jobs that user already applied
  const filteredJobs = allJobs
    .filter(
      (job) =>
        job.id !== Number(slugJob) &&
        !listAppliedJobs.includes(job.id.toString())
    )
    .slice(0, 5);

  return (
    <section className='mt-10 pt-16 pb-20 px-[20%] bg-gray-50'>
      <p className='text-4xl font-bold mb-10 text-cyan-700 tracking-wider'>
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
