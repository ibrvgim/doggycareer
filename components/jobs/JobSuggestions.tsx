import { getJobs } from '@/data/jobs/apiJobs';
import JobCard from './JobCard';

async function JobSuggestions({ slugJob }: { slugJob: string }) {
  const allJobs = await getJobs();

  const excludeCurrentJob = allJobs
    .filter((job) => job.id !== Number(slugJob))
    .slice(0, 5);

  return (
    <section className='mt-10 pt-16 pb-20 px-[20%] bg-gray-50'>
      <p className='text-4xl font-bold mb-10 text-cyan-700 tracking-wider'>
        Other Job Suggestions
      </p>

      <div className='flex flex-col gap-7'>
        {excludeCurrentJob.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

export default JobSuggestions;
