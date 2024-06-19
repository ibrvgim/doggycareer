import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { MdTipsAndUpdates } from 'react-icons/md';

function TipCard() {
  return (
    <div className='border-2 rounded-2xl border-cyan-600 h-24 max-w-[104rem] mx-auto mt-24 pl-12 pr-10 bg-cyan-600 flex items-center justify-between gap-5'>
      <div className='flex gap-7 items-center'>
        <MdTipsAndUpdates className='text-6xl text-yellow-400 lg:text-4xl' />
        <p className='text-white font-extrabold uppercase tracking-wider text-sm leading-loose'>
          You can save the job and get back to it at any time while the job
          offer is still active!
        </p>
      </div>

      <Link
        href='/personal-jobs/saved-jobs'
        className='text-gray-200 tracking-wider font-bold hover:text-white transition-all'
      >
        <div className='flex items-center justify-end gap-2 w-28'>
          My Jobs
          <ArrowLongRightIcon className='size-6' />
        </div>
      </Link>
    </div>
  );
}

export default TipCard;
