'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavTab({
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
export default NavTab;
