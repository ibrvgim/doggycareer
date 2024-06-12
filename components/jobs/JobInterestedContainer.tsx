import Link from 'next/link';

function JobInterestedContainer({
  jobId,
  listAppliedJobs,
}: {
  jobId: string;
  listAppliedJobs: string[];
}) {
  return (
    <div className='flex justify-center items-center gap-5 mb-16 border-y-2 border-y-gray-300 py-8'>
      {!listAppliedJobs?.includes(jobId) ? (
        <>
          <p className='text-[17px] font-semibold text-gray-600 tracking-wider'>
            Are you interested?
          </p>
          <Link
            href={`apply/${jobId}`}
            className='bg-cyan-600 text-white text-sm hover:bg-cyan-700 border-[1.5px] rounded-full 
  tracking-wider text-center min-w-80 py-[0.35rem] px-5 font-bold transition-all'
          >
            Apply Now
          </Link>
        </>
      ) : (
        <p className='text-[17px] font-semibold text-gray-600 tracking-wider'>
          You have apllied for this job. We will contact you as soon as
          possible.
        </p>
      )}
    </div>
  );
}

export default JobInterestedContainer;
