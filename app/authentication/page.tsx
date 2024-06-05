import LoginCard from '@/components/authentication/LoginCard';
import SignupCard from '@/components/authentication/SignupCard';
import SecondaryHeader from '@/components/general/SecondaryHeader';

async function AuthenticationPage({
  searchParams,
}: {
  searchParams: { type: string };
}) {
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
