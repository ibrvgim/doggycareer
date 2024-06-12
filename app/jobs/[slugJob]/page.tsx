import {
  archiveJobAction,
  saveJobAction,
} from '@/actions/actionSavedAppliedJobs';
import Footer from '@/components/general/Footer';
import GoBack from '@/components/general/GoBack';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import CompanyInfoCard from '@/components/jobs/CompanyInfoCard';
import JobContentContainer from '@/components/jobs/JobContentContainer';
import { JobItemHeader } from '@/components/jobs/JobItemHeader';
import JobManageContainer from '@/components/jobs/JobManageContainer';
import JobSuggestions from '@/components/jobs/JobSuggestions';
import { getUserAPI } from '@/data/auth/apiUser';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { JobType } from '@/types/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { FaBoxArchive } from 'react-icons/fa6';

async function JobItemPage({ params }: { params: { slugJob: string } }) {
  const singleJob: JobType = await getSingleJob(params.slugJob);
  if (!singleJob) notFound();
  const user = await getUserAPI();
  const storedJobs = await getUserStoredJobs();

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.savedJobs;

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.appliedJobs;

  const listArchivedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.archive;

  const isAuthor = user?.id === singleJob.postAuthor;

  return (
    <div>
      <SecondaryHeader />

      <main className='px-[20%] pt-20 pb-10'>
        <div className='mb-8'>
          <GoBack />
        </div>
        <JobItemHeader job={singleJob} />

        {!isAuthor && !listArchivedJobs.includes(params.slugJob) && (
          <div className='mt-8 flex items-center flex-wrap gap-2'>
            {!listAppliedJobs.includes(params.slugJob) ? (
              <Link
                href={`apply/${params.slugJob}`}
                className='bg-cyan-600 text-white hover:bg-cyan-700 border-[1.5px] rounded-full tracking-wider text-center min-w-72 py-1 px-4 font-bold transition-all'
              >
                Apply
              </Link>
            ) : (
              <div className='mt-6 flex items-center gap-5'>
                <div className='flex gap-2 items-center opacity-80 border-r-2 border-r-gray-400 pr-4'>
                  <AiOutlineFileProtect className='size-6 text-gray-500' />
                  <p className='text-gray-500 tracking-wider font-semibold'>
                    You have applied for this Job.
                  </p>
                </div>

                <form action={archiveJobAction}>
                  <input
                    name='jobId'
                    value={params?.slugJob}
                    className='hidden'
                    hidden
                  />
                  <Button style='bg-gray-500 text-gray-100 text-sm font-semibold min-w-64 hover:bg-gray-600'>
                    Move to Archive
                  </Button>
                </form>
              </div>
            )}

            {!listAppliedJobs.includes(params.slugJob) && (
              <form action={saveJobAction}>
                <input
                  name='jobId'
                  value={params.slugJob}
                  hidden
                  className='hidden'
                  readOnly
                />

                {!listSavedJobs.includes(params.slugJob) ? (
                  <Button style='border-cyan-700 hover:bg-cyan-50 font-semibold'>
                    Save
                  </Button>
                ) : (
                  <Button style='border-red-500 hover:bg-red-50 text-red-500 font-semibold'>
                    Remove from My Jobs
                  </Button>
                )}
              </form>
            )}
          </div>
        )}

        {listArchivedJobs.includes(params.slugJob) && (
          <div className='flex gap-2 items-center opacity-80 pr-4 mt-8'>
            <FaBoxArchive className='size-5 text-gray-400' />
            <p className='text-gray-500 tracking-wider font-semibold'>
              Job is Archived.
            </p>
          </div>
        )}

        {isAuthor && <JobManageContainer jobId={params?.slugJob} />}

        <JobContentContainer job={singleJob} />

        {!isAuthor && !listArchivedJobs.includes(params.slugJob) && (
          <div className='flex justify-center items-center gap-5 mb-16 border-y-2 border-y-gray-300 py-8'>
            {!listAppliedJobs.includes(params.slugJob) ? (
              <>
                <p className='text-[17px] font-semibold text-gray-600 tracking-wider'>
                  Are you interested?
                </p>
                <Link
                  href={`apply/${params.slugJob}`}
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
        )}

        <CompanyInfoCard job={singleJob} />
      </main>
      <JobSuggestions slugJob={params.slugJob} />
      <Footer />
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
      className={`border-[1.5px] rounded-full text-blue-900 tracking-wider min-w-72 py-1 px-4 font-bold ${style} transition-all`}
    >
      {children}
    </button>
  );
}

export default JobItemPage;
