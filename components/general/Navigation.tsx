import Link from 'next/link';
import Logo from './Logo';
import { UserIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';

function Navigation() {
  return (
    <div className='flex items-center justify-between'>
      <Logo />

      <ul className='flex items-center gap-[2.5rem]'>
        <li>
          <NavLink href='/personal-jobs/saved-jobs'>My Jobs</NavLink>
        </li>

        <li>
          <NavLink href='/about-us'>About</NavLink>
        </li>

        <li>
          <Link href='/profile'>
            <UserIcon className='size-7 text-gray-500 hover:text-sky-600 cursor-pointer transition-all ml-6' />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
