import Link from 'next/link';
import { HiMiniPencilSquare } from 'react-icons/hi2';

function JobPreferences() {
  return (
    <div>
      <p className='text-2xl font-bold text-gray-400 tracking-widest flex items-center gap-3'>
        Job Preferences
        <Link href='/' className='hover:text-cyan-700 transition-all'>
          <HiMiniPencilSquare />
        </Link>
      </p>

      {/* <div className='flex flex-col gap-2 mt-4 text-gray-400 font-semibold tracking-wider'>
        <p>
          <span className='text-rose-400'>Job Type:</span> Full time
        </p>
        <p>
          <span className='text-rose-400'>Office Type:</span> On Site
        </p>
        <p>
          <span className='text-rose-400'>Job Region:</span> Berlin
        </p>
        <p>
          <span className='text-rose-400'>Job Industry:</span> Software
          Development
        </p>
      </div> */}
      <EmptyCard />
    </div>
  );
}

function EmptyCard() {
  return (
    <div className='mt-4'>
      <p className='text-base font-semibold text-gray-400 tracking-wider'>
        No Job Preferences have been selected. Go to the{' '}
        <Link
          href='/'
          className='text-cyan-600 hover:text-cyan-800 transition-colors'
        >
          Main Page
        </Link>{' '}
        and fill out the questionnaire.
      </p>

      <p className='text-base font-semibold text-gray-400 tracking-wider mt-1'>
        It will help you see more relevant vacancies that interest you.
      </p>
    </div>
  );
}

export default JobPreferences;
