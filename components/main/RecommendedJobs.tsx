import { JobType } from '@/types/types';
import JobCard from '../jobs/JobCard';
import ListSpinner from '../general/ListSpinner';
import { Suspense } from 'react';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { getUserAPI } from '@/data/auth/apiUser';

async function RecommendedJobs({ allJobs }: { allJobs: JobType[] }) {
  const user = await getUserAPI();
  const storedJobs = await getUserStoredJobs();

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).appliedJobs;

  return (
    <div>
      <p className='text-center text-6xl font-extrabold text-cyan-700 tracking-widest mt-12'>
        Jobs Picked For You
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        Jobs that match your searches and preferences
      </p>

      <div className='flex justify-center items-stretch gap-5 mt-12 max-w-[104rem] min-h-96 mx-auto'>
        <Suspense fallback={<ListSpinner />}>
          {allJobs
            .filter((job) => !listAppliedJobs.includes(job.id.toString()))
            .slice(0, 3)
            .map((job) => (
              <div key={job.id} className='flex-1'>
                <JobCard job={job} descriptionLength={86} />
              </div>
            ))}
        </Suspense>
      </div>
    </div>
  );
}

export default RecommendedJobs;
