import PostJobForm from '@/components/account/post-job/PostJobForm';
import Footer from '@/components/general/Footer';
import GoBack from '@/components/general/GoBack';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import { getUserAPI } from '@/data/auth/apiUser';
import { getCountries } from '@/data/getCountries';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { JobType } from '@/types/types';
import { notFound, redirect } from 'next/navigation';

async function EditPage({ params }: { params: { slugEdit: string } }) {
  const user = await getUserAPI();
  const cities = await getCountries();
  const getJob: JobType = await getSingleJob(params?.slugEdit);
  if (!getJob) notFound();
  const isAuthor = user?.id === getJob.postAuthor;
  if (!isAuthor) redirect(`/jobs/${params?.slugEdit}`);

  return (
    <div>
      <SecondaryHeader />

      <section className='px-[20%] pt-20 pb-20'>
        <div className='mb-12'>
          <GoBack />
        </div>

        <p className='text-3xl text-gray-500 font-bold tracking-wider leading-normal mb-10'>
          Edit Job #{getJob?.id} -{' '}
          <span className='text-cyan-600'>{getJob.jobTitle}</span>
        </p>

        <PostJobForm
          cities={cities}
          defaultValues={getJob}
          edit={true}
          jobId={params?.slugEdit}
        />
      </section>
      <Footer />
    </div>
  );
}

export default EditPage;
