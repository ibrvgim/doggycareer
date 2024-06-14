import { UserType } from '@/types/types';
import Link from 'next/link';
import { HiMiniPencilSquare } from 'react-icons/hi2';

function PersonalInformation({ user }: { user: UserType }) {
  return (
    <div>
      <p className='text-2xl font-bold text-gray-400 tracking-widest flex items-center gap-3'>
        My Personal Information
        <Link
          href='/account/settings'
          className='hover:text-cyan-700 transition-all'
        >
          <HiMiniPencilSquare />
        </Link>
      </p>

      <div className='flex flex-col gap-2 mt-4 text-gray-400 font-semibold tracking-wider'>
        <p>
          <span className='text-rose-400'>Full Name:</span>{' '}
          {user?.user_metadata.firstName} {user?.user_metadata.lastName}
        </p>
        <p>
          <span className='text-rose-400'>Email Address:</span>{' '}
          {user?.user_metadata.email}
        </p>
        <p>
          <span className='text-rose-400'>Phone Number:</span>{' '}
          {user?.user_metadata.phoneNumber}
        </p>
      </div>
    </div>
  );
}

export default PersonalInformation;
