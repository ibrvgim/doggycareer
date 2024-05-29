import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface Jobs {
  jobs: string[];
}

function CustomJobsSelect({ jobs }: Jobs) {
  const [input, setInput] = useState('');
  const [chosenJobs, setChosenJobs] = useState<string[]>([]);

  const getSomeJobes = jobs
    .map((job) => job.toLowerCase())
    .filter((job: string) => job.includes(input.trim().toLowerCase()))
    .slice(0, 5);

  function chooseOnClick(chosenJob: string) {
    if (chosenJobs.includes(chosenJob) || chosenJobs.length >= 3) {
      setInput('');
      return;
    }

    setChosenJobs((jobs) => [...jobs, chosenJob]);
    setInput('');
  }

  function deleteCity(jobToDelete: string) {
    setChosenJobs((jobs) => jobs.filter((job) => job !== jobToDelete));
  }

  return (
    <div className='relative top-0 left-0'>
      <ul className='flex flex-wrap gap-3 mb-5 text-gray-600'>
        {chosenJobs.length > 0 &&
          chosenJobs.map((job) => (
            <li
              key={job}
              className='bg-rose-100 text-rose-900 tracking-wide px-6 py-1 rounded-full text-sm border-rose-600 border-[1px] cursor-pointer hover:bg-rose-200 transition-all capitalize'
              onClick={() => deleteCity(job)}
            >
              {job}
            </li>
          ))}
      </ul>

      <div className='flex items-center relative'>
        <MagnifyingGlassIcon className='size-5 text-gray-400 absolute left-4' />
        <input
          type='text'
          placeholder='Choose Job Titles ( max. 3 )'
          className='border-[1px] border-gray-400 rounded-full w-10/12 pl-12 pr-6 h-11 text-sm tracking-wider text-blue-900 placeholder:font-medium disabled:opacity-60'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          disabled={chosenJobs.length >= 3}
          autoComplete='off'
        />
      </div>

      {input.trim().length > 0 && (
        <div className='bg-white w-10/12 rounded-xl absolute mt-2 flex flex-col items-start gap-3 px-8 py-4 border-gray-300 border-[1px] shadow-lg z-10'>
          {getSomeJobes.length > 0 ? (
            getSomeJobes.map((job: string) => (
              <button
                key={job}
                className='text-gray-500 cursor-pointer tracking-wider text-[15px] hover:text-blue-700 transition-colors font-medium capitalize'
                onClick={() => chooseOnClick(job)}
              >
                {job}
              </button>
            ))
          ) : (
            <p className='text-gray-500 text-sm font-semibold tracking-wider'>
              No title found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default CustomJobsSelect;
