'use client';

import { JobType } from '@/types/types';
import BasicPagination from '../general/Pagination';
import FiltersList from './FiltersList';
import JobsList from './JobsList';
import { ITEMS_PER_PAGE } from '@/utilities/constants';
import { useState } from 'react';

function JobsContainer({
  allJobs,
  listSavedJobs,
  listAppliedJobs,
}: {
  allJobs: JobType[];
  listSavedJobs: string[];
  listAppliedJobs: string[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(allJobs.length / ITEMS_PER_PAGE);

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }

  const paginatedJobs = allJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <section className='flex gap-12 py-20 px-28'>
        <FiltersList />
        <JobsList
          allJobs={paginatedJobs}
          savedJobs={listSavedJobs}
          aplliedJobs={listAppliedJobs}
        />
      </section>

      <div className='flex gap-12 pb-20 px-28'>
        <div className='w-[19rem]'>&nbsp;</div>
        <div className='mx-auto'>
          <BasicPagination
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default JobsContainer;
