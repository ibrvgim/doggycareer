'use client';

import { useState } from 'react';
import { BsPersonWorkspace } from 'react-icons/bs';

interface Props {
  name: string;
  industries: string[];
  error?: string;
  defaultValue?: string;
}

function JobIndustrySelect({ name, industries, error, defaultValue }: Props) {
  const [input, setInput] = useState(defaultValue || '');
  const [show, setShow] = useState(false);

  const getSomeIndustries = industries
    ?.map((industry) => industry.toLowerCase())
    .filter((industry: string) => industry.includes(input.trim().toLowerCase()))
    .slice(0, 4);

  return (
    <div>
      <label className='uppercase text-[11px] tracking-widest text-gray-500 font-semibold flex mb-2'>
        Job Industry *
        {error && (
          <span className='ml-auto text-red-500 normal-case text-xs'>
            {error.slice(0, 1).toUpperCase() + error.slice(1).toLowerCase()}
          </span>
        )}
      </label>
      <div className='flex items-center relative'>
        <span className='absolute text-lg left-4 text-gray-400'>
          <BsPersonWorkspace />
        </span>
        <input
          type='text'
          name={name}
          placeholder='ex. Software Development'
          className='w-full h-10 rounded-md pl-11 text-sm tracking-wider border-[1px] text-gray-600 border-gray-400 disabled:text-gray-500  disabled:opacity-85 disabled:border-gray-300 placeholder:text-gray-300 placeholder:lowercase'
          value={input
            .split(' ')
            .map((item) =>
              item !== 'and'
                ? item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
                : item
            )
            .join(' ')}
          onChange={(e) => {
            setInput(e.target.value);
            setShow(true);
          }}
          autoComplete='off'
        />

        {show && input.trim().length > 0 && getSomeIndustries.length > 0 && (
          <div className='bg-white z-50 w-full rounded-md absolute top-12 text-sm flex flex-col items-start gap-1 px-2 py-4 border-gray-300 border-[1px] shadow-lg'>
            {getSomeIndustries.length > 0 &&
              getSomeIndustries.map((industry: string) => (
                <button
                  key={industry}
                  className='text-gray-400 cursor-pointer tracking-wider w-full flex px-4 py-1 rounded-[0.200rem]
                    hover:text-gray-500 hover:bg-gray-100 transition-colors'
                  onClick={() => {
                    setInput(industry);
                    setShow(false);
                  }}
                  type='button'
                >
                  {industry
                    .split(' ')
                    .map((item) =>
                      item !== 'and'
                        ? item.slice(0, 1).toUpperCase() +
                          item.slice(1).toLowerCase()
                        : item
                    )
                    .join(' ')}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobIndustrySelect;
