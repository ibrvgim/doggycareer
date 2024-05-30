'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname
    .split('/')
    .some((path) => path && href.split('/').includes(path));

  return (
    <Link
      href={href}
      className='font-semibold tracking-wider text-lg text-gray-500 hover:text-sky-600'
      style={
        isActive
          ? {
              color: '#0891b2',
              borderBottom: '3px solid #0891b2',
              paddingBottom: '0.5rem',
            }
          : {}
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
