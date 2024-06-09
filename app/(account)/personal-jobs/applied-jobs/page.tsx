import JobCard from '@/components/jobs/JobCard';
import NoJobCard from '@/components/my-jobs/NoJobCard';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import ApplyJobImage from '@/public/general/apply-job-image.svg';

export const metadata = {
  title: 'Applied Jobs',
};

async function AppliedJobsPage() {
  const allJobs = await getJobs();
  const user = await getUserAPI();
  const storedJobs = await getUserStoredJobs();

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).appliedJobs;

  const getAllAppliedJobs = allJobs.filter((job) =>
    listAppliedJobs?.includes(job.id.toString())
  );

  return (
    <div className='w-full'>
      {getAllAppliedJobs.length > 0 ? (
        <div className='flex flex-col gap-7'>
          {getAllAppliedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <NoJobCard
          image={ApplyJobImage}
          title='No Applied Jobs'
          description='Start your job search now and be one of the first to apply for new opportunities.'
        />
      )}
    </div>
  );
}

export default AppliedJobsPage;
