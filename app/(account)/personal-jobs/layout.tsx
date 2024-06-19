import NavigationMenu from '@/components/my-jobs/NavigationMenu';
import { getUserAPI } from '@/data/auth/apiUser';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'My Jobs',
};

async function MyJobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserAPI();
  if (user?.role !== 'authenticated') redirect('/authentication');

  return (
    <div className='flex items-start gap-14 px-16 py-20 xl:px-32'>
      <NavigationMenu />
      {children}
    </div>
  );
}

export default MyJobsLayout;
