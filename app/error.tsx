'use client';

import SecondaryHeader from '@/components/general/SecondaryHeader';
import Image from 'next/image';
import ErrorImage from '@/public/general/error.svg';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Something went wrong',
};

function ErrorPage({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div>
      <SecondaryHeader />

      <section className='flex flex-col gap-14 items-center justify-center px-32 py-16'>
        <Image
          src={ErrorImage}
          alt='page not found'
          width={280}
          draggable={false}
        />

        <div className='text-center flex-1 flex flex-col items-center'>
          <p className='text-3xl uppercase tracking-widest text-gray-500 font-extrabold mb-4'>
            Something went wrong!
          </p>
          <p className='text-lg lowercase tracking-wider font-semibold text-rose-500 mb-8'>
            {error.message}
          </p>

          <div className='flex flex-col gap-3 min-w-10'>
            <Button handleClick={reset}>Try Again</Button>
            <Button handleClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Button({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      className='border-2 border-cyan-600 tracking-wider px-12 py-2 rounded-md text-cyan-600 hover:text-cyan-900 hover:border-cyan-900 transition-all'
    >
      {children}
    </button>
  );
}

export default ErrorPage;
