import LoginCard from '@/components/authentication/LoginCard';
import SignupCard from '@/components/authentication/SignupCard';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import { getUserAPI } from '@/data/auth/apiUser';
import { redirect } from 'next/navigation';

async function AuthenticationPage({
  searchParams,
}: {
  searchParams: { type: string };
}) {
  const user = await getUserAPI();
  if (user?.role === 'authenticated') redirect('/');

  return (
    <div>
      <SecondaryHeader />
      <section className='px-32 py-20'>
        {searchParams.type === 'signup' ? <SignupCard /> : <LoginCard />}
      </section>
    </div>
  );
}

export default AuthenticationPage;
