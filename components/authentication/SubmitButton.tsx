'use client';

import { useFormStatus } from 'react-dom';
import MiniSpinner from '../general/MiniSpinner';

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-cyan-600 min-w-36 px-10 py-2 rounded-md text-white hover:bg-cyan-700 transition-all mt-7 float-right font-semibold text-sm tracking-wider disabled:opacity-60 disabled:bg-cyan-700'
      disabled={pending}
    >
      {pending ? <MiniSpinner /> : children}
    </button>
  );
}

export default SubmitButton;
