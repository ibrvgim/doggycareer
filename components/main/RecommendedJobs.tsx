import { JobType } from '@/types/types';
import JobCard from '../jobs/JobCard';
import ListSpinner from '../general/ListSpinner';
import { Suspense } from 'react';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { getUserAPI } from '@/data/auth/apiUser';
import { getPersonalData } from '@/data/users/apiUsers';

async function RecommendedJobs({ allJobs }: { allJobs: JobType[] }) {
  const [user, storedJobs, personalData] = await Promise.all([
    getUserAPI(),
    getUserStoredJobs(),
    getPersonalData(),
  ]);

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.appliedJobs;

  const listArchivedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.archive;

  const questionnaireData = personalData.find(
    (item) => item.userId === user?.id
  )?.questionnaire;

  const exludeJobs = allJobs.filter(
    (job) =>
      !listAppliedJobs.includes(job.id.toString()) &&
      !listArchivedJobs.includes(job.id.toString()) &&
      job.postAuthor !== user?.id
  );

  const finalFilterization = exludeJobs
    .filter((job) => questionnaireData?.industry.includes(job.industry))
    .slice(0, 6);

  const activeJobs =
    finalFilterization.length >= 2 ? finalFilterization : exludeJobs;

  return (
    <div>
      <p className='text-center text-6xl font-extrabold text-cyan-700 tracking-widest mt-12'>
        Jobs Picked For You
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        Jobs that match your searches and preferences
      </p>

      <div className='grid grid-cols-2 gap-x-4 gap-y-6 mt-12 max-w-[104rem] mx-auto'>
        <Suspense fallback={<ListSpinner />}>
          {activeJobs.map((job) => (
            <div key={job.id}>
              <JobCard job={job} descriptionLength={130} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default RecommendedJobs;
