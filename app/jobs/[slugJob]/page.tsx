import { saveJobAction } from '@/actions/actionSavedAppliedJobs';
import Footer from '@/components/general/Footer';
import GoBack from '@/components/general/GoBack';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import CompanyInfoCard from '@/components/jobs/CompanyInfoCard';
import JobContentContainer from '@/components/jobs/JobContentContainer';
import { JobItemHeader } from '@/components/jobs/JobItemHeader';
import JobSuggestions from '@/components/jobs/JobSuggestions';
import { getUserAPI } from '@/data/auth/apiUser';
import { getSingleJob } from '@/data/jobs/apiJobs';
import { getSavedJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';

async function JobItemPage({ params }: { params: { slugJob: string } }) {
  const singleJob = await getSingleJob(params.slugJob);
  const user = await getUserAPI();
  const savedJobs = await getSavedJobs();

  const getCurrentUserSavedJobs = savedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  return (
    <div>
      <SecondaryHeader />

      <main className='px-[20%] pt-20 pb-10'>
        <div className='mb-8'>
          <GoBack />
        </div>
        <JobItemHeader job={singleJob} />

        <div className='mt-8 flex flex-wrap gap-2'>
          <Button style='bg-cyan-600 text-white hover:bg-cyan-700'>
            Apply
          </Button>
          <form action={saveJobAction}>
            <input
              name='jobId'
              value={params.slugJob}
              hidden
              className='hidden'
            />
            {!getCurrentUserSavedJobs.includes(params.slugJob) ? (
              <Button style='border-cyan-700 hover:bg-cyan-50 font-semibold'>
                Save
              </Button>
            ) : (
              <Button style='border-red-500 hover:bg-red-50 text-red-500 font-semibold'>
                Remove from My Jobs
              </Button>
            )}
          </form>
        </div>

        <JobContentContainer job={singleJob} />

        <div className='flex justify-center items-center gap-5 mb-16 border-y-2 border-y-gray-300 py-8'>
          <p className='text-[17px] font-semibold text-gray-600 tracking-wider'>
            Are you interested?
          </p>
          <Button style='bg-cyan-600 text-white text-sm hover:bg-cyan-700'>
            Apply Now
          </Button>
        </div>

        <CompanyInfoCard job={singleJob} />
      </main>
      <JobSuggestions slugJob={params.slugJob} />
      <Footer />
    </div>
  );
}

function Button({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <button
      className={`border-[1.5px] rounded-full text-blue-900 tracking-wider min-w-72 py-1 px-4 font-bold ${style} transition-all`}
    >
      {children}
    </button>
  );
}

export default JobItemPage;
