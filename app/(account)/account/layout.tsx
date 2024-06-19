import ProfileNavigationMenu from '@/components/account/ProfileNavigationMenu';
import { getUserAPI } from '@/data/auth/apiUser';
import { redirect } from 'next/navigation';

async function MyJobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserAPI();
  if (user?.role !== 'authenticated') redirect('/authentication');

  return (
    <div className='flex items-start gap-14 px-16 py-20 xl:px-32'>
      <ProfileNavigationMenu />
      {children}
    </div>
  );
}

export default MyJobsLayout;
