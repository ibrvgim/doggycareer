'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaPenToSquare } from 'react-icons/fa6';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import SignoutButton from '../authentication/SignoutButton';

function ProfileNavigationMenu({ logout }: { logout: () => void }) {
  return (
    <div className='border-[1.7px] border-gray-300 px-5 min-w-72 pt-5 pb-3 rounded-xl'>
      <div className='flex flex-col gap-2 tracking-[0.07rem] font-medium text-gray-700'>
        <p className='pb-3 px-2 mb-2 border-b-2 border-b-gray-200 font-semibold text-gray-600'>
          My Account
        </p>

        <Tab
          href='/account/profile'
          icon={<FaRegUserCircle className='text-[16px] text-gray-600' />}
        >
          Profile
        </Tab>

        <Tab
          href='/account/post-job'
          icon={<FaPenToSquare className='text-[16px] text-gray-600' />}
        >
          Post a Job
        </Tab>

        <Tab
          href='/account/messages'
          icon={
            <BiSolidMessageSquareDetail className='text-[16px] text-gray-600' />
          }
        >
          Messages
        </Tab>

        <Tab
          href='/account/settings'
          icon={<IoSettingsSharp className='text-lg text-gray-600' />}
        >
          Settings
        </Tab>

        <div className='pt-2 mt-2 border-t-2 border-t-gray-200'>
          <SignoutButton logout={logout} />
        </div>
      </div>
    </div>
  );
}

function Tab({
  children,
  href,
  icon,
}: {
  children: React.ReactNode;
  href: string;
  icon: JSX.Element;
}) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className='py-2 px-4 rounded-md text-sm cursor-pointer text-gray-800  hover:bg-slate-100 transition-all flex gap-2 items-center'
      style={isActive ? { backgroundColor: '#e2e8f0' } : { opacity: '60%' }}
    >
      {icon}
      {children}
    </Link>
  );
}

export default ProfileNavigationMenu;
