'use client';

import { JobType } from '@/types/types';
import JobCard from './JobCard';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import ListSpinner from '../general/ListSpinner';
import NoMatchingJobs from './NoMatchingJobs';
import { differenceInDays, differenceInHours } from 'date-fns';
import BasicPagination from '../general/Pagination';
import { ITEMS_PER_PAGE } from '@/utilities/constants';

function JobsList({
  allJobs,
  savedJobs,
  aplliedJobs,
}: {
  allJobs: JobType[];
  savedJobs: string[];
  aplliedJobs: string[];
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const params = useSearchParams();
  const location = params.get('location');
  const title = params.get('title');
  const publicationDate = params?.get('publicationDate');
  const jobType = params?.get('jobType');
  const officeType = params?.get('officeType');
  const sortBy = params?.get('sortBy');

  let filteredJobs: JobType[] = allJobs;

  if (location || title) {
    filteredJobs = filteredJobs.filter((job) => {
      if (location && title) {
        return (
          job.location.toLowerCase().trim().split('-').join(' ') ===
            location?.toLowerCase().trim().split('-').join(' ') &&
          (job.industry.toLowerCase().trim().split('-').join(' ') ===
            title?.toLowerCase().trim().split('-').join(' ') ||
            job.jobTitle
              .toLowerCase()
              .trim()
              .split('-')
              .join(' ')
              .includes(title?.toLowerCase().trim().split('-').join(' ')))
        );
      } else if (location) {
        return (
          job.location.toLowerCase().trim().split('-').join(' ') ===
          location?.toLowerCase().trim().split('-').join(' ')
        );
      } else if (title) {
        return (
          job.industry.toLowerCase().trim().split('-').join(' ') ===
            title?.toLowerCase().trim().split('-').join(' ') ||
          job.jobTitle
            .toLowerCase()
            .trim()
            .split('-')
            .join(' ')
            .includes(title?.toLowerCase().trim().split('-').join(' '))
        );
      } else return job;
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

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }

  const paginatedJobs = filteredJobs?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pageCount = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  return (
    <div className='w-full'>
      {filteredJobs.length > 0 ? (
        <Suspense fallback={<ListSpinner />}>
          <p className='text-xl font-bold text-gray-500 tracking-wider mb-8'>
            Job results: {filteredJobs.length}
          </p>

          <div className='flex flex-col gap-5'>
            {paginatedJobs.map((job) => (
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

      {pageCount >= 2 && (
        <div className='flex justify-center mt-16'>
          <BasicPagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            pageCount={pageCount}
          />
        </div>
      )}
    </div>
  );
}

export default JobsList;
