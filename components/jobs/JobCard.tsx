import Link from 'next/link';
import JobInfoBadge from './JobInfoBadge';
import { JobType } from '@/types/types';

function JobCard({
  job,
  descriptionLength = 200,
}: {
  job: JobType;
  descriptionLength?: number;
}) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className='border-[2px] rounded-2xl border-gray-300 bg-white px-10 pt-8 pb-12 hover:border-cyan-600 transition-all cursor-pointer'>
        <p className='text-2xl font-bold tracking-wider text-cyan-700 mb-4 opacity-90'>
          {job.jobTitle}
        </p>

        <JobInfoBadge job={job} />

        <p className='mt-6 mb-4 text-gray-500 tracking-wider text-[15px] leading-7'>
          {job.jobDescription.slice(0, descriptionLength) + '...'}
        </p>

        <span className='text-sm text-gray-400 float-right'>17 hours ago</span>
      </div>
    </Link>
  );
}

export default JobCard;
