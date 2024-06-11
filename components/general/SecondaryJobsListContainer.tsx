'use client';

import { JobType } from '@/types/types';
import JobCard from '../jobs/JobCard';
import BasicPagination from './Pagination';
import { useState } from 'react';
import { SMALL_LIST_ITEMS_PER_PAGE } from '@/utilities/constants';

function SecondaryJobsListContainer({ jobs }: { jobs: JobType[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(jobs.length / SMALL_LIST_ITEMS_PER_PAGE);

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }

  const paginatedJobs = jobs.slice(
    (currentPage - 1) * SMALL_LIST_ITEMS_PER_PAGE,
    currentPage * SMALL_LIST_ITEMS_PER_PAGE
  );

  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-4'>
        {paginatedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>

      {jobs.length > SMALL_LIST_ITEMS_PER_PAGE && (
        <div className='mt-14 flex justify-center'>
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

export default SecondaryJobsListContainer;
