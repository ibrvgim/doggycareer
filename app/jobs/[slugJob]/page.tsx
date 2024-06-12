import Footer from '@/components/general/Footer';
import GoBack from '@/components/general/GoBack';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import CompanyInfoCard from '@/components/jobs/CompanyInfoCard';
import JobContentContainer from '@/components/jobs/JobContentContainer';
import JobInterestedContainer from '@/components/jobs/JobInterestedContainer';
import { JobItemHeader } from '@/components/jobs/JobItemHeader';
import JobManageContainer from '@/components/jobs/JobManageContainer';
import JobStatusContainer from '@/components/jobs/JobStatusContainer';
import JobSuggestions from '@/components/jobs/JobSuggestions';
import { getUserAPI } from '@/data/auth/apiUser';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { notFound } from 'next/navigation';
import { FaBoxArchive } from 'react-icons/fa6';

async function JobItemPage({ params }: { params: { slugJob: string } }) {
  const [user, singleJob, storedJobs] = await Promise.all([
    getUserAPI(),
    getSingleJob(params.slugJob),
    getUserStoredJobs(),
  ]);

  if (!singleJob) notFound();

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
          <JobStatusContainer
            jobId={params.slugJob}
            listAppliedJobs={listAppliedJobs}
            listSavedJobs={listSavedJobs}
          />
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
