'use client';

import { JobType } from '@/types/types';
import JobCard from './JobCard';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ListSpinner from '../general/ListSpinner';
import NoMatchingJobs from './NoMatchingJobs';
import { differenceInDays, differenceInHours } from 'date-fns';

function JobsList({
  allJobs,
  savedJobs,
  aplliedJobs,
}: {
  allJobs: JobType[];
  savedJobs: string[];
  aplliedJobs: string[];
}) {
  const params = useSearchParams();
  const publicationDate = params?.get('publicationDate');
  const jobType = params?.get('jobType');
  const officeType = params?.get('officeType');
  const sortBy = params?.get('sortBy');

  const location = params.get('location');
  const title = params.get('title');

  let filteredJobs: JobType[] = allJobs;

  if (location || title) {
    filteredJobs = filteredJobs.filter((job) => {
      if (location && title) {
        return (
          job.location.toLowerCase().trim() ===
            location?.toLowerCase().trim().split('-').join(' ') &&
          job.industry.toLowerCase().trim() ===
            title?.toLowerCase().trim().split('-').join(' ')
        );
      } else if (location) {
        return (
          job.location.toLowerCase().trim() ===
          location?.toLowerCase().trim().split('-').join(' ')
        );
      } else {
        return (
          job.industry.toLowerCase().trim() ===
          title?.toLowerCase().trim().split('-').join(' ')
        );
      }
    });
  }

  if (sortBy) {
    filteredJobs = filteredJobs.sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
      } else return NaN;
    });
  }

  if (jobType) {
    filteredJobs = filteredJobs.filter((job) => {
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

  if (publicationDate) {
    filteredJobs = filteredJobs.filter((job) => {
      if (publicationDate === '24hours')
        return differenceInHours(new Date(), new Date(job.postedAt)) <= 24;
      else if (publicationDate === '7days')
        return differenceInDays(new Date(), new Date(job.postedAt)) <= 7;
      else if (publicationDate === '14days')
        return differenceInDays(new Date(), new Date(job.postedAt)) <= 14;
      else return job;
    });
  }

  return (
    <div className='w-full'>
      {filteredJobs.length > 0 ? (
        <Suspense fallback={<ListSpinner />}>
          <p className='text-xl font-bold text-gray-500 tracking-wider mb-8'>
            Job results: {filteredJobs.length}
          </p>

          <div className='flex flex-col gap-5'>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                savedJobs={savedJobs}
                aplliedJobs={aplliedJobs}
              />
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
