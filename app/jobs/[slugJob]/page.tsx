import {
  archiveJobAction,
  saveJobAction,
} from '@/actions/actionSavedAppliedJobs';
import Footer from '@/components/general/Footer';
import GoBack from '@/components/general/GoBack';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import CompanyInfoCard from '@/components/jobs/CompanyInfoCard';
import JobContentContainer from '@/components/jobs/JobContentContainer';
import JobInterestedContainer from '@/components/jobs/JobInterestedContainer';
import { JobItemHeader } from '@/components/jobs/JobItemHeader';
import JobManageButton from '@/components/jobs/JobManageButton';
import JobManageContainer from '@/components/jobs/JobManageContainer';
import JobStatusContainer from '@/components/jobs/JobStatusContainer';
import JobSuggestions from '@/components/jobs/JobSuggestions';
import { getUserAPI } from '@/data/auth/apiUser';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { JobType } from '@/types/types';
import { notFound } from 'next/navigation';
import { FaBoxArchive } from 'react-icons/fa6';
import { MdOutlineBlock } from 'react-icons/md';

export async function generateMetadata({
  params,
}: {
  params: { slugJob: string };
}) {
  const singleJob: JobType = await getSingleJob(params.slugJob);

  return {
    title: singleJob?.jobTitle,
  };
}

async function JobItemPage({ params }: { params: { slugJob: string } }) {
  const [user, singleJob, storedJobs] = await Promise.all([
    getUserAPI(),
    getSingleJob(params.slugJob),
    getUserStoredJobs(),
  ]);

  if (!singleJob) notFound();

  const allStoredJobs = storedJobs?.find((item) => item.userId === user?.id);
  const listSavedJobs = allStoredJobs?.savedJobs;
  const listAppliedJobs = allStoredJobs?.appliedJobs;
  const listArchivedJobs = allStoredJobs?.archive;
  const isAuthor = user?.id === singleJob?.postAuthor;

  return (
    <div>
      <SecondaryHeader />

      <main className='px-[20%] pt-20 pb-10'>
        <div className='mb-8'>
          <GoBack />
        </div>

        <JobItemHeader job={singleJob} />

        {!isAuthor &&
          !listArchivedJobs?.includes(params.slugJob) &&
          singleJob.active && (
            <JobStatusContainer
              jobId={params.slugJob}
              listAppliedJobs={listAppliedJobs}
              listSavedJobs={listSavedJobs}
            />
          )}

        {!singleJob.active && !isAuthor && (
          <div className='mt-10 flex items-center gap-5'>
            <div className='flex gap-2 items-center opacity-80'>
              <MdOutlineBlock className='size-5 text-red-600' />
              <p className='text-red-600 tracking-wider font-semibold'>
                Submission Closed.
              </p>
            </div>

            {listAppliedJobs?.includes(params.slugJob) && (
              <form
                action={archiveJobAction}
                className='border-l-2 border-l-red-400 pl-5'
              >
                <input
                  name='jobId'
                  value={params.slugJob}
                  className='hidden'
                  hidden
                />
                <JobManageButton style='border-red-500 hover:bg-red-50 text-red-500 text-sm font-semibold min-w-64'>
                  Move to Archive
                </JobManageButton>
              </form>
            )}

            {listSavedJobs?.includes(params.slugJob) && (
              <form
                action={saveJobAction}
                className='border-l-2 border-l-red-400 pl-5'
              >
                <input
                  name='jobId'
                  value={params.slugJob}
                  hidden
                  className='hidden'
                  readOnly
                />
                <JobManageButton style='border-red-500 hover:bg-red-50 text-red-500 text-sm font-semibold min-w-64'>
                  Remove from My Jobs
                </JobManageButton>
              </form>
            )}
          </div>
        )}

        {listArchivedJobs?.includes(params.slugJob) && singleJob.active && (
          <div className='flex gap-2 items-center opacity-80 pr-4 mt-10'>
            <FaBoxArchive className='size-5 text-gray-400' />
            <p className='text-gray-500 tracking-wider font-semibold'>
              Job is Archived.
            </p>
          </div>
        )}

        {isAuthor && (
          <JobManageContainer
            jobId={params?.slugJob}
            activeJob={singleJob?.active}
          />
        )}

        <JobContentContainer job={singleJob} />

        {!isAuthor &&
          !listArchivedJobs?.includes(params.slugJob) &&
          singleJob.active && (
            <JobInterestedContainer
              jobId={params.slugJob}
              listAppliedJobs={listAppliedJobs}
            />
          )}

        <CompanyInfoCard job={singleJob} />
      </main>

      <JobSuggestions slugJob={params.slugJob} />
      <Footer />
    </div>
  );
}

export default JobItemPage;
