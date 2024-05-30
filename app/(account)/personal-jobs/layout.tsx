import NavigationMenu from '@/components/my-jobs/NavigationMenu';

function MyJobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex items-start gap-14'>
      <NavigationMenu />
      {children}
    </div>
  );
}

export default MyJobsLayout;
