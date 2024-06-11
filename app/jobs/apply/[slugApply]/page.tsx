import GoBack from '@/components/general/GoBack';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import ApplyForm from '@/components/jobs/ApplyForm';
import JobInfoBadge from '@/components/jobs/JobInfoBadge';
import { getUserAPI } from '@/data/auth/apiUser';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { JobType } from '@/types/types';
import { redirect } from 'next/navigation';

async function ApplyPage({ params }: { params: { slugApply: string } }) {
  const getJob: JobType = await getSingleJob(params.slugApply);
  const user = await getUserAPI();
  if (!user) redirect('/authentication');
  const isAuthor = user?.id === getJob.postAuthor;
  if (isAuthor) redirect('/jobs');

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

        <ApplyForm user={user} jobId={params.slugApply} />
      </section>
    </div>
  );
}

export default ApplyPage;
