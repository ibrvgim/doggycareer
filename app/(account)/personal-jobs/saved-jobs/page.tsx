import SecondaryJobsListContainer from '@/components/general/SecondaryJobsListContainer';
import NoJobCard from '@/components/my-jobs/NoJobCard';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import SaveJobImage from '@/public/general/save-job-image.svg';

export const metadata = {
  title: 'Saved Jobs',
};

async function SavedJobsPage() {
  const [user, allJobs, storedJobs] = await Promise.all([
    getUserAPI(),
    getJobs(),
    getUserStoredJobs(),
  ]);

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  const getAllSavedJobs = allJobs.filter((job) =>
    listSavedJobs?.includes(job.id.toString())
  );

  return (
    <div className='w-full'>
      {getAllSavedJobs.length > 0 ? (
        <SecondaryJobsListContainer jobs={getAllSavedJobs} />
      ) : (
        <NoJobCard
          image={SaveJobImage}
          title='No Saved Jobs'
          description='Discover new opportunities and save jobs that match your criteria for future review.'
        />
      )}
    </div>
  );
}

export default SavedJobsPage;
