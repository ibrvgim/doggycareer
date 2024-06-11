import JobInfoBadge from '@/components/jobs/JobInfoBadge';
import { JobType } from '@/types/types';
import { jobPosted } from '@/utilities/jobPosted';
import Image from 'next/image';

function JobItemHeader({ job }: { job: JobType }) {
  return (
    <div className='flex gap-10 items-center'>
      <JobItemImage job={job} />

      <div className='w-full'>
        <div className='mb-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2'>
          <p className='text-3xl font-bold text-cyan-700'>{job.jobTitle}</p>

          <p className='text-sm text-gray-400 font-medium'>
            posted {jobPosted(job.postedAt)}
          </p>
        </div>

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
