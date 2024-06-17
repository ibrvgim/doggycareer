import GoBack from '@/components/general/GoBack';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import ApplyForm from '@/components/jobs/ApplyForm';
import JobInfoBadge from '@/components/jobs/JobInfoBadge';
import { getUserAPI } from '@/data/auth/apiUser';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { getPersonalData } from '@/data/users/apiUsers';
import { redirect } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slugApply: string };
}) {
  return {
    title: `Apply Job #${params.slugApply}`,
  };
}

async function ApplyPage({ params }: { params: { slugApply: string } }) {
  const [storedJobs, getJob, user, usersReferences] = await Promise.all([
    getUserStoredJobs(),
    getSingleJob(params.slugApply),
    getUserAPI(),
    getPersonalData(),
  ]);

  if (!user) redirect('/authentication');

  const isAuthor = user?.id === getJob.postAuthor;
  if (isAuthor || !getJob.active) redirect('/jobs');

  const getCurrentUserData = usersReferences?.find(
    (item) => item?.userId === user?.id
  );

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.appliedJobs;

  if (listAppliedJobs.includes(params.slugApply)) redirect('/jobs');

  return (
    <div>
      <SecondaryHeader />

      <section className='px-[20%] pt-20 pb-10'>
        <div className='mb-12'>
          <GoBack />
        </div>

        <div>
          <p className='text-4xl text-gray-500 font-bold tracking-wider leading-normal'>
            Apply for <span className='text-cyan-600'>{getJob.jobTitle}</span>{' '}
            Position
          </p>

          <div className='mt-6'>
            <JobInfoBadge job={getJob} />
          </div>
        </div>

        <ApplyForm
          user={user}
          jobId={params.slugApply}
          references={getCurrentUserData}
        />
      </section>
    </div>
  );
}

export default ApplyPage;
