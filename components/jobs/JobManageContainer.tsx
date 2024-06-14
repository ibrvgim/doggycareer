'use client';

import { repostJob } from '@/actions/jobManageAction';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { LuShieldCheck } from 'react-icons/lu';
import JobDeleteButton from './JobDeleteButton';
import MiniSpinner from '../general/MiniSpinner';

function JobManageContainer({ jobId }: { jobId: string }) {
  const [state, formAction] = useFormState(repostJob, {});

  return (
    <div className='mt-8 flex flex-col items-start'>
      <span className='text-[10px] text-white font-bold tracking-widest uppercase bg-cyan-600 py-1 px-4 rounded-full flex items-center justify-start gap-1'>
        <LuShieldCheck className='text-sm' />
        Job Author
      </span>

      <div className='mt-5 flex flex-wrap gap-3'>
        <form action={formAction}>
          <input
            name='jobId'
            value={jobId}
            className='hidden'
            hidden
            readOnly
          />
          <Button style='bg-neutral-500 text-gray-100 border-neutral-500 hover:bg-neutral-600'>
            Re - Post
          </Button>
        </form>

        <Link
          href={`/jobs/edit/${jobId}`}
          className='border-[1px] rounded-full tracking-widest min-w-48 opacity-85 py-0 px-4 bg-cyan-600 text-gray-100 border-cyan-600 hover:bg-cyan-700 text-center transition-all'
        >
          Edit
        </Link>

        <JobDeleteButton jobId={jobId} />
      </div>
      {state.repostError && (
        <p className='mt-6 text-red-500 font-semibold tracking-wide opacity-70'>
          {state.repostError}
        </p>
      )}
    </div>
  );
}

function Button({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`border-[1px] rounded-full tracking-widest min-w-48 py-0 px-4 opacity-85 ${style} transition-all`}
    >
      {pending ? (
        <div className='py-[2px]'>
          <MiniSpinner />
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default JobManageContainer;
