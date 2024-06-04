'use client';

import { JobType } from '@/types/types';
import JobCard from './JobCard';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ListSpinner from '../general/ListSpinner';
import NoMatchingJobs from './NoMatchingJobs';

function JobsList({ allJobs }: { allJobs: JobType[] }) {
  const params = useSearchParams();
  const publicationDate = params?.get('publicationDate');
  const jobType = params?.get('jobType');
  const officeType = params?.get('officeType');

  let filteredJobs: JobType[] = allJobs;

  if (jobType) {
    filteredJobs = allJobs.filter((job) => {
      if (jobType === 'partTime')
        return job.jobType.toLowerCase() === 'part time';
      else if (jobType === 'fullTime')
        return job.jobType.toLowerCase() === 'full time';
      else return job;
    });
  }

  if (officeType) {
    filteredJobs = filteredJobs.filter((job) => {
      if (officeType === 'hybrid')
        return job.officeType.toLowerCase() === 'hybrid';
      else if (officeType === 'onSite')
        return job.officeType.toLowerCase() === 'on site';
      else if (officeType === 'remote')
        return job.officeType.toLowerCase() === 'remote';
      else return job;
    });
  }

  return (
    <div className='w-full'>
      {filteredJobs.length > 0 ? (
        <Suspense fallback={<ListSpinner />}>
          <p className='text-lg font-bold text-gray-500 mb-5 tracking-wider'>
            Job results: {filteredJobs.length}
          </p>

          <div className='flex flex-col gap-5'>
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </Suspense>
      ) : (
        <NoMatchingJobs allJobs={allJobs} />
      )}
    </div>
  );
}

export default JobsList;
