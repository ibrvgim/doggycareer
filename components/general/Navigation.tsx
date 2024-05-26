import Link from 'next/link';
import Logo from './Logo';
import { UserIcon } from '@heroicons/react/24/solid';

function Navigation() {
  return (
    <div className='flex items-center justify-between'>
      <Logo />

      <ul className='flex items-center gap-[2.5rem]'>
        <li>
          <Link
            href='/contact'
            className='font-semibold tracking-wider text-lg text-gray-600 hover:text-blue-800'
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            href='/about-us'
            className='font-semibold tracking-wider text-lg text-gray-600 hover:text-blue-800'
          >
            About Us
          </Link>
        </li>

        <li>
          <Link href='/profile'>
            <UserIcon className='size-7 text-gray-600 hover:text-blue-800 cursor-pointer transition-all ml-6' />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
