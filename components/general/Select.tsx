'use client';

import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Select({
  name,
  label,
  options,
  defaultValue,
}: {
  name: string;
  label: string;
  options: string[];
  defaultValue?: string;
}) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(defaultValue || options[0]);

  function toggleSelect() {
    setShow((show) => !show);
  }

  function selectValue(selected: string) {
    setValue(selected);
    setShow(false);
  }

  return (
    <div className='relative'>
      <p className='uppercase text-[11px] tracking-widest text-gray-500 font-semibold flex mb-2'>
        {label}
      </p>
      <input className='hidden' name={name} hidden readOnly value={value} />
      <button
        type='button'
        className='w-full h-10 rounded-md text-sm tracking-wider border-[1px] text-gray-500 border-gray-400 flex justify-between items-center px-4'
        onClick={toggleSelect}
      >
        {value}
        {show ? (
          <IoIosArrowUp className='text-lg text-cyan-700 opacity-70' />
        ) : (
          <IoIosArrowDown className='text-lg text-cyan-700 opacity-70' />
        )}
      </button>

      {show && (
        <ul
          className='w-full rounded-md text-sm tracking-wider border-[1px] text-gray-400 border-gray-400 px-3 flex flex-col 
                    py-3 absolute z-30 bg-white top-[4.5rem] shadow-sm'
        >
          {options.map((option) => (
            <li key={option}>
              <Option selectValue={selectValue} option={option} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Option({
  option,
  selectValue,
}: {
  option: string;
  selectValue: (data: string) => void;
}) {
  return (
    <button
      type='button'
      className='w-full flex px-3 py-2 rounded-[0.200rem] hover:bg-gray-100 hover:text-gray-600 transition-all'
      onClick={() => selectValue(option)}
    >
      {option}
    </button>
  );
}

export default Select;
