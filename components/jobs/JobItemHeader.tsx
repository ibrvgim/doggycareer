import JobInfoBadge from '@/components/jobs/JobInfoBadge';
import CompanyLogo from '@/public/trivago-logo.svg';
import Image from 'next/image';

function JobItemHeader() {
  return (
    <div className='flex gap-10 items-center'>
      <JobItemImage />

      <div>
        <p className='text-3xl font-bold text-blue-900 mb-3'>
          Junior Front - End Developer
        </p>
        <JobInfoBadge />
      </div>
    </div>
  );
}

function JobItemImage() {
  return (
    <div className='border-[1.5px] border-gray-400 rounded-md min-w-24 min-h-24 flex justify-center items-center px-1 shadow-md'>
      <Image src={CompanyLogo} alt='company logo' draggable={false} />
    </div>
  );
}

export { JobItemHeader, JobItemImage };
