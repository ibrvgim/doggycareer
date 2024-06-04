import { UserGroupIcon, MapPinIcon, LinkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { JobItemImage } from './JobItemHeader';
import { JobType } from '@/types/types';

function CompanyInfoCard({ job }: { job: JobType }) {
  return (
    <div className='border-[1.5px] border-gray-400 rounded-lg px-10 py-8'>
      <div className='flex items-center gap-7 '>
        <JobItemImage job={job} />

        <div>
          <p className='text-gray-500 font-bold tracking-widest text-xl mb-4'>
            {job.companyName}
          </p>

          <ul className='flex items-center flex-wrap gap-x-10 gap-y-4'>
            <li className='flex items-center gap-2'>
              <MapPinIcon className='size-[1.20rem] text-rose-300' />
              <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
                {job.location}
              </span>
            </li>

            <li className='flex items-center gap-2'>
              <UserGroupIcon className='size-[1.20rem] text-rose-300' />
              <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
                {job.employeesNumber}
              </span>
            </li>

            <li className='flex items-center gap-2'>
              <LinkIcon className='size-[1.20rem] text-rose-300' />
              <span className='font-semibold text-sm tracking-wider text-blue-600 opacity-80 hover:text-blue-700 hover:opacity-100 transition-all'>
                {job.website && (
                  <Link href={job.website} target='_blank'>
                    {job.website}
                  </Link>
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoCard;
