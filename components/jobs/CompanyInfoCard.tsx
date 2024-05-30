import { UserGroupIcon, MapPinIcon, LinkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { JobItemImage } from './JobItemHeader';

function CompanyInfoCard() {
  return (
    <div className='border-[1.5px] border-gray-400 rounded-lg px-12 py-12'>
      <div className='flex items-center gap-7 '>
        <JobItemImage />

        <div>
          <p className='text-gray-500 font-bold tracking-widest text-xl mb-4'>
            Trivago GmbH
          </p>

          <ul className='flex items-center flex-wrap gap-x-10 gap-y-4'>
            <li className='flex items-center gap-2'>
              <MapPinIcon className='size-[1.20rem] text-rose-300' />
              <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
                Berlin, Germany
              </span>
            </li>

            <li className='flex items-center gap-2'>
              <UserGroupIcon className='size-[1.20rem] text-rose-300' />
              <span className='font-semibold text-sm tracking-wider text-blue-950 opacity-70'>
                5.000 - 10.000
              </span>
            </li>

            <li className='flex items-center gap-2'>
              <LinkIcon className='size-[1.20rem] text-rose-300' />
              <span className='font-semibold text-sm tracking-wider text-blue-600 opacity-80 hover:text-blue-700 hover:opacity-100 transition-all'>
                <Link href='https://www.trivago.com' target='_blank'>
                  https://www.trivago.com
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoCard;
