import SecondaryHeader from '@/components/general/SecondaryHeader';

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SecondaryHeader />
      <main className='px-32 py-20'>{children}</main>
    </div>
  );
}
