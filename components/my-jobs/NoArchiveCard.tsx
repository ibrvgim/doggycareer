import Image from 'next/image';
import ArchiveImage from '@/public/general/archive.svg';

function NoArchiveCard() {
  return (
    <div className='w-full min-h-[28rem] flex flex-col justify-center items-center'>
      <Image
        src={ArchiveImage}
        alt='bookmark image'
        width={250}
        className='mb-14'
        draggable={false}
      />
      <p className='tracking-widest text-5xl text-gray-400 font-extrabold'>
        No Jobs in the Archive
      </p>
    </div>
  );
}

export default NoArchiveCard;
