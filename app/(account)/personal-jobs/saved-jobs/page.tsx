import JobCard from '@/components/jobs/JobCard';
import NoJobCard from '@/components/my-jobs/NoJobCard';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import SaveJobImage from '@/public/general/save-job-image.svg';

export const metadata = {
  title: 'Saved Jobs',
};

async function SavedJobsPage() {
  const allJobs = await getJobs();
  const user = await getUserAPI();
  const storedJobs = await getUserStoredJobs();

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  const getAllSavedJobs = allJobs.filter((job) =>
    listSavedJobs?.includes(job.id.toString())
  );

  return (
    <div className='w-full'>
      {getAllSavedJobs.length > 0 ? (
        <div className='flex flex-col gap-7'>
          {getAllSavedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
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
