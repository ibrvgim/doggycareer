import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';

function JobInfoBadge() {
  return (
    <ul className='flex items-center flex-wrap gap-x-10 gap-y-4'>
      <li className='flex items-center gap-2'>
        <BriefcaseIcon className='size-[1.20rem] text-rose-300' />
        <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
          Trivago GmbH
        </span>
      </li>

      <li className='flex items-center gap-2'>
        <MapPinIcon className='size-[1.20rem] text-rose-300' />
        <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
          Berlin, Germany
        </span>
      </li>

      <li className='flex items-center gap-2'>
        <ClockIcon className='size-[1.20rem] text-rose-300' />
        <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
          Full time
        </span>
      </li>

      <li className='flex items-center gap-2'>
        <BuildingOfficeIcon className='size-[1.20rem] text-rose-300' />
        <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
          Remote
        </span>
      </li>
    </ul>
  );
}

export default JobInfoBadge;
