'use client';

import { deleteJob } from '@/actions/jobManageAction';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import MiniSpinner from '../general/MiniSpinner';

function JobDeleteButton({ jobId }: { jobId: string }) {
  const [deleteActive, setDeleteActive] = useState(false);

  function toggleDeleteActivation() {
    setDeleteActive((active) => !active);
  }

  return deleteActive ? (
    <ConfirmCard
      jobId={jobId}
      toggleDeleteActivation={toggleDeleteActivation}
    />
  ) : (
    <Button
      style='bg-red-500 text-gray-100 border-red-600 hover:bg-red-700 min-w-48'
      handleClick={toggleDeleteActivation}
    >
      Delete
    </Button>
  );
}

function ConfirmCard({
  jobId,
  toggleDeleteActivation,
}: {
  jobId: string;
  toggleDeleteActivation: () => void;
}) {
  return (
    <form action={deleteJob} className='flex items-center gap-3'>
      <input name='jobId' value={jobId} className='hidden' hidden readOnly />
      <p className='text-gray-500 font-semibold tracking-wide'>
        Do you want to delete the Job?
      </p>
      <Button
        style='bg-red-500 text-gray-100 min-w-20 font-semibold border-red-600 hover:bg-red-700'
        type='button'
        handleClick={toggleDeleteActivation}
      >
        No
      </Button>
      <Button style='bg-green-600 text-gray-100 min-w-20 font-semibold border-green-600 hover:bg-green-700'>
        Yes
      </Button>
    </form>
  );
}

export default JobDeleteButton;

function Button({
  children,
  style,
  handleClick,
  type = 'submit',
}: {
  children: React.ReactNode;
  style?: string;
  handleClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`border-[1px] rounded-full tracking-widest py-0 px-4 opacity-85 ${style} transition-all`}
      onClick={handleClick}
      type={type}
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
