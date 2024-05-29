import {
  jobType,
  officeType,
  publicationDates,
} from '@/data/manualData/filtersCardData';
import FilterCard from './FilterCard';

function FiltersList() {
  return (
    <div>
      <FilterCard options={publicationDates} title='Publication Date' />
      <FilterCard options={jobType} title='Job Type' />
      <FilterCard options={officeType} title='Office Type' />
    </div>
  );
}

export default FiltersList;
