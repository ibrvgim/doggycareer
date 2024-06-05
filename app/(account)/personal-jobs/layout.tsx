import NavigationMenu from '@/components/my-jobs/NavigationMenu';
import { getUserAPI } from '@/data/auth/apiUser';

async function MyJobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserAPI();
  console.log(user);

  return (
    <div className='flex items-start gap-14 px-32 py-20'>
      <NavigationMenu />
      {children}
    </div>
  );
}

export default MyJobsLayout;
