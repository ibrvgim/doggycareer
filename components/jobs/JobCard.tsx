import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

const description =
  'We are a lively and diverse team, founded by our CEO Julian Weselek in 2016, currently active in Germany and France. Our ambition is to become the leading travel company for authentic';

function JobCard({ descriptionLength = 200 }: { descriptionLength?: number }) {
  return (
    <Link href='/jobs/id'>
      <div className='border-[2px] rounded-2xl border-gray-300 px-10 pt-8 pb-12 hover:border-blue-800 transition-all cursor-pointer'>
        <p className='text-2xl font-bold tracking-wider text-blue-900 mb-4 opacity-90'>
          Junior Front - End Developer
        </p>

        <ul className='flex items-center flex-wrap gap-x-10 gap-y-4'>
          <li className='flex items-center gap-2'>
            <BriefcaseIcon className='size-[1.20rem] text-rose-300' />
            <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-50'>
              Trivago GmbH
            </span>
          </li>

          <li className='flex items-center gap-2'>
            <MapPinIcon className='size-[1.20rem] text-rose-300' />
            <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-50'>
              Berlin, Germany
            </span>
          </li>

          <li className='flex items-center gap-2'>
            <ClockIcon className='size-[1.20rem] text-rose-300' />
            <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-50'>
              Full time
            </span>
          </li>

          <li className='flex items-center gap-2'>
            <BuildingOfficeIcon className='size-[1.20rem] text-rose-300' />
            <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-50'>
              Remote
            </span>
          </li>
        </ul>

        <p className='mt-6 mb-4 text-gray-500 tracking-wider text-[15px] leading-7'>
          {description.slice(0, descriptionLength) + '...'}
        </p>

        <span className='text-sm text-gray-400 float-right'>17 hours ago</span>
      </div>
    </Link>
  );
}

export default JobCard;
