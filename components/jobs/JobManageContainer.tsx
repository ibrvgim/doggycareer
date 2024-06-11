import { deleteJob, repostJob } from '@/actions/jobManageAction';
import Link from 'next/link';
import { LuShieldCheck } from 'react-icons/lu';

function JobManageContainer({ jobId }: { jobId: string }) {
  return (
    <div className='mt-8 flex flex-col items-start'>
      <span className='text-[10px] text-white font-bold tracking-widest uppercase bg-cyan-600 py-1 px-4 rounded-full flex items-center justify-start gap-1'>
        <LuShieldCheck className='text-sm' />
        Job Author
      </span>

      <div className='mt-5 flex flex-wrap gap-3'>
        <form action={repostJob}>
          <input name='jobId' value={jobId} className='hidden' hidden />
          <Button style='bg-neutral-500 text-gray-100 border-neutral-500 hover:bg-neutral-600'>
            Re - Post
          </Button>
        </form>

        <Link
          href={`/jobs/edit/${jobId}`}
          className='border-[1px] rounded-full tracking-widest min-w-48 py-0 px-4 font-semibold bg-cyan-600 text-gray-100 border-cyan-600 hover:bg-cyan-700 text-center transition-all'
        >
          Edit
        </Link>

        <form action={deleteJob}>
          <input name='jobId' value={jobId} className='hidden' hidden />
          <Button style='bg-red-500 text-gray-100 border-red-600 hover:bg-red-700'>
            Delete
          </Button>
        </form>
      </div>
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
  return (
    <button
      className={`border-[1px] rounded-full tracking-widest min-w-48 py-0 px-4 font-semibold ${style} transition-all`}
    >
      {children}
    </button>
  );
}

export default JobManageContainer;
