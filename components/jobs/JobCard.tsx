import Link from 'next/link';
import JobInfoBadge from './JobInfoBadge';
import { JobType } from '@/types/types';
import { jobPosted } from '@/utilities/jobPosted';
import { IoCheckmarkDoneCircle, IoStar } from 'react-icons/io5';

function JobCard({
  job,
  descriptionLength = 200,
  savedJobs,
  aplliedJobs,
}: {
  job: JobType;
  descriptionLength?: number;
  savedJobs?: string[];
  aplliedJobs?: string[];
}) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className='h-full w-full border-[2px] rounded-2xl border-gray-300 bg-white px-10 pt-8 pb-8 hover:border-cyan-600 transition-all cursor-pointer'>
        <div className='flex justify-between mb-5'>
          <p className='text-2xl font-bold tracking-wider text-cyan-700 opacity-90'>
            {job.jobTitle}
          </p>

          <div className='flex items-center gap-3'>
            {aplliedJobs && aplliedJobs?.includes(job.id.toString()) && (
              <IoCheckmarkDoneCircle
                className='size-6 cursor-default text-cyan-700 opacity-70'
                title='Job Applied'
              />
            )}

            {savedJobs && savedJobs?.includes(job.id.toString()) && (
              <IoStar
                className='size-[1.40rem] cursor-default text-cyan-700 opacity-70'
                title='Job Saved'
              />
            )}
          </div>
        </div>

        <JobInfoBadge job={job} />

        <div className='flex flex-col'>
          <p className='mt-6 mb-4 text-gray-500 tracking-wider text-[15px] leading-7 h-full'>
            {job.jobDescription.slice(0, descriptionLength) + '...'}
          </p>

          <span className='text-sm text-gray-400 self-end'>
            {jobPosted(job.postedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
