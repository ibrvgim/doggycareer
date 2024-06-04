import JobInfoBadge from '@/components/jobs/JobInfoBadge';
import CompanyLogo from '@/public/trivago-logo.svg';
import { JobType } from '@/types/types';
import Image from 'next/image';

function JobItemHeader({ job }: { job: JobType }) {
  console.log(job.logo);
  return (
    <div className='flex gap-10 items-center'>
      <JobItemImage job={job} />

      <div>
        <p className='text-3xl font-bold text-cyan-700 mb-3'>{job.jobTitle}</p>
        <JobInfoBadge job={job} />
      </div>
    </div>
  );
}

function JobItemImage({ job }: { job: JobType }) {
  return (
    <div className='border-[1.5px] border-gray-400 rounded-md min-w-24 min-h-24 flex justify-center items-center shadow-md relative'>
      <Image
        src={job?.logo}
        height={80}
        width={80}
        alt='company logo'
        draggable={false}
      />
    </div>
  );
}

export { JobItemHeader, JobItemImage };
