'use client';

import {
  jobType,
  officeType,
  publicationDates,
} from '@/data/manualData/filtersCardData';
import FilterCard from './FilterCard';
import { filterAction } from '@/actions/filtersFormAction';
import { useSearchParams } from 'next/navigation';

function FiltersList() {
  const params = useSearchParams();
  const defaultPublicationDate = params.get('publicationDate') || '';
  const defaultJobType = params.get('jobType') || '';
  const defaultOfficeType = params.get('officeType') || '';

  return (
    <form action={filterAction}>
      <FilterCard
        options={publicationDates}
        title='Publication Date'
        defaultChecked={defaultPublicationDate}
      />
      <FilterCard
        options={jobType}
        title='Job Type'
        defaultChecked={defaultJobType}
      />
      <FilterCard
        options={officeType}
        title='Office Type'
        defaultChecked={defaultOfficeType}
      />

      <div className='flex justify-end mt-8'>
        <button className='bg-cyan-600 text-white px-8 py-2 rounded-md text-sm tracking-wider font-semibold'>
          Apply Filters
        </button>
      </div>
    </form>
  );
}

export default FiltersList;
