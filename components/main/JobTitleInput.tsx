'use client';
import { useState } from 'react';

interface Props {
  name: string;
  placeholder: string;
  icon: JSX.Element;
  industries: string[];
  error?: string;
  defaultValue?: string;
}

function JobTitleInput({
  name,
  placeholder,
  icon,
  industries,
  error,
  defaultValue,
}: Props) {
  const [input, setInput] = useState(defaultValue || '');
  const [show, setShow] = useState(false);

  const getSomeCities = industries
    ?.map((item) => item.toLowerCase())
    .filter((item: string) => item.includes(input.trim().toLowerCase()))
    .slice(0, 4);

  return (
    <div className='flex items-center relative'>
      <span className='z-10 absolute left-4'>{icon}</span>
      <input
        type='text'
        name={name}
        placeholder={placeholder}
        className={`h-12 w-[22rem] rounded-md pl-[3.2rem] pr-4 border-[1px] border-gray-400 shadow-lg 
          text-[15px] text-gray-700 tracking-widest font-medium placeholder:font-light ${
            error ? 'placeholder:text-red-500' : 'placeholder:text-gray-400'
          }`}
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
        style={error ? { border: '2px solid rgb(239 68 68)' } : {}}
      />

      {show && input.trim().length > 0 && getSomeCities?.length > 0 && (
        <div className='bg-white w-full rounded-md absolute top-14 flex flex-col items-start gap-2 px-3 py-4 border-gray-300 border-[1px] shadow-lg'>
          {getSomeCities.length > 0 &&
            getSomeCities.map((industry: string) => (
              <button
                key={industry}
                className='text-gray-400 cursor-pointer tracking-wider capitalize w-full flex px-3 py-1 rounded-[0.200rem]
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
  );
}

export default JobTitleInput;
