import { JobType } from '@/types/types';
import JobCard from '../jobs/JobCard';
import ListSpinner from '../general/ListSpinner';
import { Suspense } from 'react';

function RecommendedJobs({ allJobs }: { allJobs: JobType[] }) {
  return (
    <div>
      <p className='text-center text-6xl font-extrabold text-cyan-700 tracking-widest mt-12'>
        Jobs Picked For You
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        Jobs that match your searches and preferences
      </p>

      <div className='flex justify-center gap-5 mt-12 max-w-[104rem] mx-auto'>
        <Suspense fallback={<ListSpinner />}>
          {allJobs.slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} descriptionLength={86} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default RecommendedJobs;
