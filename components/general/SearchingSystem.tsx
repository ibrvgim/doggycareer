import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid';

function SearchingSystem() {
  return (
    <form className='flex justify-center items-center mt-12 gap-[0.3rem]'>
      <Input
        name='title'
        placeholder='Job Title'
        icon={<MagnifyingGlassIcon className='size-6 text-gray-400' />}
      />
      <Input
        name='location'
        placeholder='Job Region'
        icon={<MapPinIcon className='size-6 text-gray-400' />}
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

function Input({
  name,
  placeholder,
  icon,
}: {
  name: string;
  placeholder: string;
  icon: JSX.Element;
}) {
  return (
    <div className='flex items-center relative'>
      <span className='z-10 absolute left-4'>{icon}</span>
      <input
        type='text'
        name={name}
        placeholder={placeholder}
        className='h-12 w-[22rem] rounded-md pl-[3.2rem] pr-4 border-[1px] border-gray-400 shadow-lg 
        text-[15px] tracking-widest font-medium placeholder:text-gray-400 placeholder:font-light'
      />
    </div>
  );
}

export default SearchingSystem;
