import { useState } from 'react';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Cities, QuestionnaireType } from '@/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '@/redux/slices/questionnaireSLice';

function CustomCitiesSelect({ cities }: { cities: Cities }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const questionnaire = useSelector(
    (state: { questionnaire: QuestionnaireType }) => state.questionnaire
  );

  const getSomeCities = cities?.cities
    .map((city) => city.toLowerCase())
    .filter(
      (city: string) =>
        !questionnaire.location.includes(city) &&
        city.includes(input.trim().toLowerCase())
    )
    .slice(0, 5);

  function chooseOnClick(chosenCity: string) {
    if (questionnaire.location.length >= 6) {
      setInput('');
      return;
    }

    dispatch(setLocation(chosenCity));
    setInput('');
  }

  function deleteCity(cityToDelete: string) {
    dispatch(setLocation(cityToDelete));
  }

  return (
    <div className='relative top-0 left-0'>
      <ul className='flex flex-wrap gap-3 mb-5 text-gray-600'>
        {questionnaire.location.length > 0 &&
          questionnaire.location.map((city) => (
            <li
              key={city}
              className='bg-rose-100 text-rose-900 tracking-wide px-6 py-1 rounded-full text-sm border-rose-600 border-[1px] cursor-pointer hover:bg-rose-200 transition-all capitalize'
              onClick={() => deleteCity(city)}
            >
              {city}
            </li>
          ))}

        {!questionnaire.location.includes('home office') && (
          <li
            className='bg-transparent px-5 py-1 rounded-full border-cyan-700 border-[1px] text-sm cursor-pointer flex items-center gap-2 hover:text-cyan-800 hover:bg-cyan-100 hover:border-cyan-900 transition-all'
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
          className='border-[1px] border-gray-400 rounded-full w-10/12 pl-12 pr-6 h-11 text-sm tracking-wider text-gray-700 placeholder:font-medium disabled:opacity-60'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          disabled={
            questionnaire.location.includes('home office')
              ? questionnaire.location.length === 6
              : questionnaire.location.length === 5
          }
          autoComplete='off'
        />
      </div>

      {input.trim().length > 0 && getSomeCities.length > 0 && (
        <div className='bg-white w-10/12 rounded-xl absolute mt-2 flex flex-col items-start gap-3 px-4 py-4 border-gray-300 border-[1px] shadow-lg z-10'>
          {getSomeCities &&
            getSomeCities.length > 0 &&
            getSomeCities.map((city: string) => (
              <button
                key={city}
                className='text-gray-400 cursor-pointer tracking-wider capitalize w-full flex px-3 py-1 rounded-[0.200rem]
                  hover:text-gray-500 hover:bg-gray-100 transition-colors'
                onClick={() => chooseOnClick(city)}
              >
                {city}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default CustomCitiesSelect;
