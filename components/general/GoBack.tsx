'use client';

import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

function GoBack() {
  const router = useRouter();

  return (
    <button
      className='text-gray-500 opacity-70 font-semibold hover:text-cyan-700 transition-all flex gap-2 items-center'
      onClick={() => router.back()}
    >
      <ArrowLongLeftIcon className='size-5' />
      Go Back
    </button>
  );
}

export default GoBack;
