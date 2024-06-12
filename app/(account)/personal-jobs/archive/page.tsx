import SecondaryJobsListContainer from '@/components/general/SecondaryJobsListContainer';
import NoArchiveCard from '@/components/my-jobs/NoArchiveCard';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';

async function ArchivePage() {
  const [user, allJobs, storedJobs] = await Promise.all([
    getUserAPI(),
    getJobs(),
    getUserStoredJobs(),
  ]);

  const listArchivedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.archive;

  const getAllArchivedJobs = allJobs.filter((job) =>
    listArchivedJobs?.includes(job.id.toString())
  );

  return (
    <div className='w-full'>
      {getAllArchivedJobs.length > 0 ? (
        <SecondaryJobsListContainer jobs={getAllArchivedJobs} />
      ) : (
        <NoArchiveCard />
      )}
    </div>
  );
}

export default ArchivePage;
