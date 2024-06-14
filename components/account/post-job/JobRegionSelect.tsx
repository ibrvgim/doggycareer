'use client';

import { Cities } from '@/types/types';
import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';

interface Props {
  name: string;
  cities: Cities;
  error?: string;
  defaultValue?: string;
}

function JobRegionSelect({ name, cities, error, defaultValue }: Props) {
  const [input, setInput] = useState(defaultValue || '');
  const [show, setShow] = useState(false);

  const getSomeCities = cities?.cities
    .map((city) => city.toLowerCase())
    .filter((city: string) => city.includes(input.trim().toLowerCase()))
    .slice(0, 4);

  return (
    <div>
      <label className='uppercase text-[11px] tracking-widest text-gray-500 font-semibold flex mb-2'>
        Company City *
        {error && (
          <span className='ml-auto text-red-500 normal-case text-xs'>
            {error.slice(0, 1).toUpperCase() + error.slice(1).toLowerCase()}
          </span>
        )}
      </label>
      <div className='flex items-center relative'>
        <span className='absolute text-[1.35rem] left-4 text-gray-400'>
          <MdLocationOn />
        </span>
        <input
          type='text'
          name={name}
          placeholder='ex. Berlin'
          className='w-full h-10 rounded-md pl-11 text-sm tracking-wider border-[1px] text-gray-600 border-gray-400 disabled:text-gray-500  disabled:opacity-85 disabled:border-gray-300 placeholder:text-gray-300 capitalize'
          value={input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()}
          onChange={(e) => {
            setInput(e.target.value);
            setShow(true);
          }}
          autoComplete='off'
        />

        {show && input.trim().length > 0 && getSomeCities.length > 0 && (
          <div className='bg-white z-50 w-full rounded-md absolute top-12 text-sm flex flex-col items-start gap-1 px-2 py-4 border-gray-300 border-[1px] shadow-lg'>
            {getSomeCities.length > 0 &&
              getSomeCities.map((city: string) => (
                <button
                  key={city}
                  className='text-gray-400 cursor-pointer tracking-wider capitalize w-full flex px-4 py-1 rounded-[0.200rem]
                  hover:text-gray-500 hover:bg-gray-100 transition-colors'
                  onClick={() => {
                    setInput(city);
                    setShow(false);
                  }}
                  type='button'
                >
                  {city}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobRegionSelect;
