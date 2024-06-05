import ProfileNavigationMenu from '@/components/account/ProfileNavigationMenu';
import { logoutUserAPI } from '@/data/auth/apiUser';

async function MyJobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function logout() {
    'use server';
    return await logoutUserAPI();
  }

  return (
    <div className='flex items-start gap-14 px-32 py-20'>
      <ProfileNavigationMenu logout={logout} />
      {children}
    </div>
  );
}

export default MyJobsLayout;
