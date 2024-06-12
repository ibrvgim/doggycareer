import {
  archiveJobAction,
  saveJobAction,
} from '@/actions/actionSavedAppliedJobs';
import JobManageButton from '@/components/jobs/JobManageButton';
import Link from 'next/link';
import { AiOutlineFileProtect } from 'react-icons/ai';

function JobStatusContainer({
  jobId,
  listAppliedJobs,
  listSavedJobs,
}: {
  jobId: string;
  listAppliedJobs: string[];
  listSavedJobs: string[];
}) {
  return (
    <div className='mt-8 flex items-center flex-wrap gap-2'>
      {!listAppliedJobs.includes(jobId) ? (
        <Link
          href={`apply/${jobId}`}
          className='bg-cyan-600 text-white hover:bg-cyan-700 border-[1.5px] rounded-full tracking-wider text-center min-w-72 py-1 px-4 font-bold transition-all'
        >
          Apply
        </Link>
      ) : (
        <JobAppliedContainer jobId={jobId} />
      )}

      {!listAppliedJobs.includes(jobId) && (
        <JobSaveContainer jobId={jobId} listSavedJobs={listSavedJobs} />
      )}
    </div>
  );
}

function JobAppliedContainer({ jobId }: { jobId: string }) {
  return (
    <div className='mt-6 flex items-center gap-5'>
      <div className='flex gap-2 items-center opacity-80 border-r-2 border-r-gray-400 pr-4'>
        <AiOutlineFileProtect className='size-6 text-gray-500' />
        <p className='text-gray-500 tracking-wider font-semibold'>
          You have applied for this Job.
        </p>
      </div>

      <form action={archiveJobAction}>
        <input name='jobId' value={jobId} className='hidden' hidden />
        <JobManageButton style='bg-gray-500 text-gray-100 text-sm font-semibold min-w-64 hover:bg-gray-600'>
          Move to Archive
        </JobManageButton>
      </form>
    </div>
  );
}

function JobSaveContainer({
  jobId,
  listSavedJobs,
}: {
  jobId: string;
  listSavedJobs: string[];
}) {
  return (
    <form action={saveJobAction}>
      <input name='jobId' value={jobId} hidden className='hidden' readOnly />

      {!listSavedJobs.includes(jobId) ? (
        <JobManageButton style='border-cyan-700 hover:bg-cyan-50 font-semibold'>
          Save
        </JobManageButton>
      ) : (
        <JobManageButton style='border-red-500 hover:bg-red-50 text-red-500 font-semibold'>
          Remove from My Jobs
        </JobManageButton>
      )}
    </form>
  );
}

export default JobStatusContainer;
