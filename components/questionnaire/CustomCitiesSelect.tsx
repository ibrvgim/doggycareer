'use client';

import { useState } from 'react';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface Cities {
  cities: {
    cities: string[];
  };
}

function CustomCitiesSelect({ cities }: Cities) {
  const [input, setInput] = useState('');
  const [chosenCities, setchosenCities] = useState<string[]>([]);

  const getSomeCities = cities?.cities
    .map((city) => city.toLowerCase())
    .filter((city: string) => city.includes(input.toLowerCase()))
    .slice(0, 5);

  function chooseOnClick(chosenCity: string) {
    if (chosenCities.includes(chosenCity) || chosenCities.length >= 6) {
      setInput('');
      return;
    }

    setchosenCities((cities) => [...cities, chosenCity]);
    setInput('');
  }

  function deleteCity(cityToDelete: string) {
    setchosenCities((cities) => cities.filter((city) => city !== cityToDelete));
  }

  return (
    <div className='relative top-0 left-0'>
      <ul className='flex flex-wrap gap-3 mb-5 text-gray-600'>
        {chosenCities.length > 0 &&
          chosenCities.map((city) => (
            <li
              key={city}
              className='bg-rose-100 text-rose-900 tracking-wide px-6 py-1 rounded-full text-sm border-rose-600 border-[1px] cursor-pointer hover:bg-rose-200 transition-all capitalize'
              onClick={() => deleteCity(city)}
            >
              {city}
            </li>
          ))}

        {!chosenCities.includes('home office') && (
          <li
            className='bg-transparent px-5 py-1 rounded-full border-blue-900 border-[1px] text-sm cursor-pointer flex items-center gap-2 hover:text-blue-800 hover:bg-blue-50 hover:border-blue-900 transition-all'
            onClick={() => chooseOnClick('home office')}
          >
            <PlusIcon className='size-[14px] font-extrabold' />
            <p>home office</p>
          </li>
        )}
      </ul>

      <div className='flex items-center relative'>
        <MagnifyingGlassIcon className='size-5 text-gray-400 absolute left-4' />
        <input
          type='text'
          placeholder='Choose Job Regions ( max. 5 )'
          className='border-[1px] border-gray-400 rounded-full w-10/12 pl-12 pr-6 h-11 text-sm tracking-wider text-blue-900 placeholder:font-light disabled:opacity-60'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          disabled={
            chosenCities.includes('home office')
              ? chosenCities.length === 6
              : chosenCities.length === 5
          }
          autoComplete='off'
        />
      </div>

      {input && (
        <div className='bg-white w-10/12 rounded-xl absolute mt-2 flex flex-col items-start gap-3 px-8 py-4 border-gray-300 border-[1px] shadow-lg'>
          {getSomeCities.length > 0 ? (
            getSomeCities.map((city: string) => (
              <button
                key={city}
                className='text-gray-500 cursor-pointer tracking-wider text-sm hover:text-blue-700 transition-colors font-semibold capitalize'
                onClick={() => chooseOnClick(city)}
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

export default CustomCitiesSelect;
