import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { MdTipsAndUpdates } from 'react-icons/md';

function TipCard() {
  return (
    <div className='border-[1.7px] rounded-2xl border-cyan-700 h-24 max-w-[104rem] mx-auto mt-32 pl-16 pr-8 bg-cyan-600 flex items-center justify-between gap-10'>
      <div className='flex gap-7 items-center'>
        <MdTipsAndUpdates className='text-4xl text-yellow-400' />
        <p className='text-white font-extrabold uppercase tracking-widest text-sm leading-relaxed'>
          You can save the job and get back to it at any time while the job
          offer is still active!
        </p>
      </div>

      <Link
        href='/personal-jobs/saved-jobs'
        className='flex items-center min-w-24 gap-2 text-white tracking-wider font-bold hover:text-gray-700 hover:opacity-100 transition-all'
      >
        My Jobs
        <ArrowLongRightIcon className='size-6' />
      </Link>
    </div>
  );
}

export default TipCard;
