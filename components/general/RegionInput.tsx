'use client';
import { useState } from 'react';

interface Props {
  name: string;
  placeholder: string;
  icon: JSX.Element;
  cities: {
    cities: string[];
  };
}

function RegionInput({ name, placeholder, icon, cities }: Props) {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  const getSomeCities = cities?.cities
    .map((city) => city.toLowerCase())
    .filter((city: string) => city.includes(input.trim().toLowerCase()))
    .slice(0, 4);

  return (
    <div className='flex items-center relative'>
      <span className='z-10 absolute left-4'>{icon}</span>
      <input
        type='text'
        name={name}
        placeholder={placeholder}
        className='h-12 w-[22rem] rounded-md pl-[3.2rem] pr-4 border-[1px] border-gray-400 shadow-lg 
          text-[15px] text-gray-700 tracking-widest font-medium placeholder:text-gray-400 placeholder:font-light capitalize'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setShow(true);
        }}
        autoComplete='off'
      />

      {show && input.trim().length > 0 && (
        <div className='bg-white w-full rounded-md absolute top-14 flex flex-col items-start gap-3 px-8 py-4 border-gray-300 border-[1px] shadow-lg'>
          {getSomeCities.length > 0 ? (
            getSomeCities.map((city: string) => (
              <button
                key={city}
                className='text-gray-500 cursor-pointer tracking-wider hover:text-cyan-700 transition-colors capitalize'
                onClick={() => {
                  setInput(city);
                  setShow(false);
                }}
                type='button'
              >
                {city}
              </button>
            ))
          ) : (
            <p className='text-gray-500 text-sm font-semibold tracking-wider'>
              No city found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default RegionInput;
