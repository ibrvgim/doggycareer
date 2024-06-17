import Link from 'next/link';
import PostJobImage from '@/public/general/post image.svg';
import Image from 'next/image';

function NoPostedJobCard() {
  return (
    <div className='px-5 pt-5 pb-3 min-h-[28rem] flex flex-col items-center justify-center text-center'>
      <Image
        src={PostJobImage}
        alt='bookmark image'
        width={250}
        className='mb-14'
        draggable={false}
      />

      <p className='text-[2.6rem] font-extrabold text-gray-500 tracking-widest mb-3'>
        No Posted Jobs
      </p>

      <p className='text-[17px] text-gray-400 tracking-wide mb-10'>
        You do not have posted jobs. Start placing jobs and hiring people as
        easily as possible.
      </p>

      <Link
        href='/account/post-job'
        className='border-[1.5px] border-cyan-600 px-10 py-2 rounded-md font-semibold text-cyan-600 uppercase text-xs tracking-widest
  hover:bg-cyan-50 hover:shadow-sm hover:text-cyan-800 hover:border-cyan-800 transition-all'
      >
        Post a Job
      </Link>
    </div>
  );
}

export default NoPostedJobCard;
