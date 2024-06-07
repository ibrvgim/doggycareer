import Link from 'next/link';
import JobInfoBadge from './JobInfoBadge';
import { JobType } from '@/types/types';
import { jobPosted } from '@/utilities/jobPosted';
import { StarIcon } from '@heroicons/react/24/solid';

function JobCard({
  job,
  descriptionLength = 200,
  savedJobs,
}: {
  job: JobType;
  descriptionLength?: number;
  savedJobs?: string[];
}) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className='border-[2px] rounded-2xl border-gray-300 bg-white px-10 pt-8 pb-12 hover:border-cyan-600 transition-all cursor-pointer'>
        <div className='flex justify-between'>
          <p className='text-2xl font-bold tracking-wider text-cyan-700 mb-4 opacity-90'>
            {job.jobTitle}
          </p>

          {savedJobs?.includes(job.id.toString()) && (
            <StarIcon
              className='size-6 cursor-default text-cyan-700 opacity-70'
              title='Job Saved'
            />
          )}
        </div>

        <JobInfoBadge job={job} />

        <p className='mt-6 mb-4 text-gray-500 tracking-wider text-[15px] leading-7'>
          {job.jobDescription.slice(0, descriptionLength) + '...'}
        </p>

        <span className='text-sm text-gray-400 float-right'>
          {jobPosted(job.postedAt)}
        </span>
      </div>
    </Link>
  );
}

export default JobCard;
