'use client';

import { JobType } from '@/types/types';
import JobCard from '../jobs/JobCard';
import { POSTED_JOBS_PER_PAGE } from '@/utilities/constants';
import BasicPagination from '../general/Pagination';
import { useState } from 'react';

function PostedJobsList({ jobs }: { jobs: JobType[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(jobs.length / POSTED_JOBS_PER_PAGE);

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }

  const paginatedJobs = jobs.slice(
    (currentPage - 1) * POSTED_JOBS_PER_PAGE,
    currentPage * POSTED_JOBS_PER_PAGE
  );

  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-4'>
        {paginatedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>

      {jobs.length > POSTED_JOBS_PER_PAGE && (
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

export default PostedJobsList;
