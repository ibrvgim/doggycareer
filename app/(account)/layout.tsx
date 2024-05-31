import SecondaryHeader from '@/components/general/SecondaryHeader';

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SecondaryHeader />
      <main>{children}</main>
    </div>
  );
}
