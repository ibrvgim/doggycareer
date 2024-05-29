import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { MdTipsAndUpdates } from 'react-icons/md';

function TipCard() {
  return (
    <div className='border-[1.7px] rounded-2xl border-cyan-900 h-24 max-w-[104rem] mx-auto mt-32 pl-16 pr-6 bg-cyan-700 flex items-center justify-between gap-10'>
      <div className='flex gap-7 items-center'>
        <MdTipsAndUpdates className='text-4xl text-yellow-400' />
        <p className='text-white font-extrabold uppercase tracking-widest text-sm leading-relaxed'>
          You can save the job and get back to it at any time while the job
          offer is still active.
        </p>
      </div>

      {/* <Link
        href='/'
        className='bg-blue-400 border-blue-700 border-2 size-12 flex items-center justify-center rounded-full opacity-80 hover:opacity-100 hover:bg-blue-500 transition-all'
      >
        <ArrowLongRightIcon className='size-6 text-gray-100' />
      </Link> */}
    </div>
  );
}

export default TipCard;
