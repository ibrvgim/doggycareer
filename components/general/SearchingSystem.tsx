import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Input from './Input';
import RegionInput from './RegionInput';
import { Cities } from '@/types/types';

function SearchingSystem({ cities }: Cities) {
  return (
    <form className='flex justify-center items-center mt-12 gap-[0.3rem]'>
      <Input
        name='title'
        placeholder='Job Title'
        icon={<MagnifyingGlassIcon className='size-6 text-gray-400' />}
      />
      <RegionInput
        name='location'
        placeholder='Job Region'
        icon={<MapPinIcon className='size-6 text-gray-400' />}
        cities={cities}
      />

      <button
        type='submit'
        className='bg-blue-800 text-white font-bold tracking-wider px-12 h-full py-[0.63rem] 
        rounded shadow-xl hover:bg-blue-900 transition-colors'
      >
        Get Jobs
      </button>
    </form>
  );
}

export default SearchingSystem;
