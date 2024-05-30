import Link from 'next/link';
import Image from 'next/image';

function NoJobCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className='px-5 pt-5 pb-3 min-h-[28rem] flex flex-col items-center justify-center text-center'>
      <Image
        src={image}
        alt='bookmark image'
        width={300}
        className='mb-14'
        draggable={false}
      />

      <p className='text-5xl font-extrabold text-gray-500 tracking-widest mb-3'>
        {title}
      </p>

      <p className='text-lg text-gray-400 tracking-wide mb-10'>{description}</p>

      <Link
        href='/jobs'
        className='border-[1.5px] border-blue-600 px-10 py-2 rounded-md font-semibold text-blue-600 uppercase text-xs tracking-widest
        hover:bg-blue-50 hover:shadow-sm hover:text-blue-800 hover:border-blue-800 transition-all'
      >
        See Jobs
      </Link>
    </div>
  );
}

export default NoJobCard;
