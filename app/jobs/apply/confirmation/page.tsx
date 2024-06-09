import SecondaryHeader from '@/components/general/SecondaryHeader';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { JobType } from '@/types/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ConfirmationImage from '@/public/general/confirmation.svg';
import Image from 'next/image';

async function ConfirmationPage({
  searchParams,
}: {
  searchParams: { job: string };
}) {
  if (!searchParams.job) notFound();
  const getJob: JobType = await getSingleJob(searchParams.job);

  return (
    <div>
      <SecondaryHeader />

      <section className='px-[10%] pt-10 pb-10 text-center'>
        <Image
          src={ConfirmationImage}
          alt='confirmation image'
          width={250}
          className='mb-12 mx-auto'
        />
        <p className='text-3xl text-gray-500 font-extrabold tracking-wider mb-6 leading-relaxed'>
          Congratulations! You applied for{' '}
          <span className='text-rose-400'>{getJob.jobTitle}</span> postion.
        </p>
        <p className='tracking-wide text-gray-500 mb-16 leading-loose px-[10%]'>
          We have received your application and are currently reviewing your
          qualifications. Please ensure you regularly check the email address
          you provided in your application, as we will be contacting you with
          updates regarding the next steps in the hiring process. We appreciate
          your interest in joining our team and will get back to you soon.
        </p>

        <Link
          href='/jobs'
          className='border-2 border-cyan-600 text-cyan-600 px-10 py-2 rounded-md hover:text-cyan-800 hover:border-cyan-800 transition-all'
        >
          Other Jobs
        </Link>
      </section>
    </div>
  );
}

export default ConfirmationPage;
