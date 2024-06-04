import ProfileNavigationMenu from '@/components/account/ProfileNavigationMenu';

function MyJobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex items-start gap-14 px-32 py-20'>
      <ProfileNavigationMenu />
      {children}
    </div>
  );
}

export default MyJobsLayout;
