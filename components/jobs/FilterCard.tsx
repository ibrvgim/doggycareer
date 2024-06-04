'use client';

import { FilterCardType } from '@/types/types';
import CustomSelection from './CustomSelection';

function FilterCard({ options, title, defaultChecked }: FilterCardType) {
  return (
    <div className='border-[1.7px] rounded-2xl border-gray-300 p-8 w-[19rem] mb-6'>
      <p className='border-b-2 border-gray-300 pb-3 font-bold text-cyan-700 opacity-90 tracking-wide text-[15px]'>
        {title}
      </p>

      <div className='flex flex-col gap-2 pt-4'>
        {options.map((option) => (
          <CustomSelection
            key={option.value}
            label={option.label}
            name={option.name}
            value={option.value}
            defaultChecked={option.value === defaultChecked}
            inputType='radio'
          />
        ))}
      </div>
    </div>
  );
}

export default FilterCard;
