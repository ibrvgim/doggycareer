'use client';

import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid';
import JobTitleInput from '../main/JobTitleInput';
import { Cities } from '@/types/types';
import RegionInput from '../main/RegionInput';
import { useFormState, useFormStatus } from 'react-dom';
import { jobSearchAction } from '@/actions/jobSearchAction';
import MiniSpinner from './MiniSpinner';
import { useSearchParams } from 'next/navigation';

function SearchingSystem({
  cities,
  industries,
}: {
  cities: Cities;
  industries: string[];
}) {
  const [state, formAction] = useFormState(jobSearchAction, {});
  const { pending } = useFormStatus();
  const serachParams = useSearchParams();
  const location = serachParams?.get('location');
  const title = serachParams?.get('title');

  const sortBy = serachParams.get('sortBy');
  const publicationDate = serachParams.get('publicationDate');
  const jobType = serachParams.get('jobType');
  const officeType = serachParams.get('officeType');

  return (
    <form
      className='flex justify-center items-center mt-12 gap-[0.3rem]'
      action={formAction}
    >
      {(sortBy || publicationDate || jobType || officeType) && (
        <input
          name='filtersValue'
          value={`sortBy=${sortBy}&publicationDate=${publicationDate}&jobType=${jobType}&officeType=${officeType}`}
          className='hidden'
          hidden
          readOnly
        />
      )}

      <JobTitleInput
        name='title'
        placeholder='Job Title'
        icon={
          <MagnifyingGlassIcon
            className='size-6 text-gray-400'
            style={state?.inputError ? { color: 'rgb(239 68 68)' } : {}}
          />
        }
        error={state?.inputError}
        defaultValue={title?.replaceAll('-', ' ') || ''}
        industries={industries}
      />

      <RegionInput
        name='location'
        placeholder='Job Region'
        icon={
          <MapPinIcon
            className='size-6 text-gray-400'
            fill='none'
            stroke={state?.inputError ? 'rgb(239 68 68)' : 'rgb(156 163 175)'}
          />
        }
        cities={cities}
        error={state?.inputError}
        defaultValie={location?.replaceAll('-', ' ') || ''}
      />

      <button
        type='submit'
        className='bg-cyan-600 text-white font-bold tracking-wider px-12 h-full py-[0.63rem] 
        rounded shadow-xl hover:bg-cyan-700 transition-colors'
        disabled={pending}
      >
        {pending ? (
          <div className='py-[2px] px-4'>
            <MiniSpinner />
          </div>
        ) : (
          'Get Jobs'
        )}
      </button>
    </form>
  );
}

export default SearchingSystem;
