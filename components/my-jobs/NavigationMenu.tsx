'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosBookmark } from 'react-icons/io';
import { FaUserPen } from 'react-icons/fa6';

function NavigationMenu() {
  return (
    <div className='border-[1.7px] border-gray-300 px-5 min-w-72 pt-5 pb-3 rounded-xl'>
      <div className='flex flex-col gap-2 tracking-[0.07rem] font-medium text-gray-700'>
        <p className='pb-3 px-2 mb-2 border-b-2 border-b-gray-200 font-semibold text-gray-600'>
          My Items
        </p>
        <Tab
          href='/personal-jobs/saved-jobs'
          icon={<IoIosBookmark className='text-lg text-gray-600' />}
        >
          Saved Jobs
        </Tab>

        <Tab
          href='/personal-jobs/applied-jobs'
          icon={<FaUserPen className='text-lg text-gray-600' />}
        >
          Applied Jobs
        </Tab>
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

export default NavigationMenu;
