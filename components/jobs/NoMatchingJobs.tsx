import NoMatchingJob from '@/public/general/no-match.svg';
import { JobType } from '@/types/types';
import Image from 'next/image';
import JobCard from './JobCard';

function NoMatchingJobs({ allJobs }: { allJobs: JobType[] }) {
  return (
    <div>
      <div className='flex flex-col items-center text-center border-b-2 border-b-gray-300 pb-16 mb-9'>
        <Image
          src={NoMatchingJob}
          alt='no match job found'
          width={150}
          className='mb-8'
          draggable={false}
        />

        <p className='text-4xl font-extrabold text-gray-500 tracking-widest mb-6'>
          No Matching Jobs Found
        </p>

        <p className='text-gray-400 tracking-wide'>
          Try changing your settings to get a wider variety of jobs.
        </p>
      </div>

      <div>
        <p className='text-2xl tracking-wider text-gray-500 font-semibold mb-10'>
          Other Job Suggestions
        </p>
        <div className='flex flex-col gap-5'>
          {allJobs.slice(0, 10).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoMatchingJobs;
