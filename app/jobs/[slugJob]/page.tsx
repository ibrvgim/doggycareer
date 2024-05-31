import Footer from '@/components/general/Footer';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import CompanyInfoCard from '@/components/jobs/CompanyInfoCard';
import JobContentContainer from '@/components/jobs/JobContentContainer';
import { JobItemHeader } from '@/components/jobs/JobItemHeader';
import JobSuggestions from '@/components/jobs/JobSuggestions';

function JobItemPage() {
  return (
    <div>
      <SecondaryHeader />

      <main className='px-[20%] pt-20 pb-10'>
        <JobItemHeader />

        <div className='mt-8 flex flex-wrap gap-2'>
          <Button style='bg-cyan-600 text-white hover:bg-cyan-700'>
            Apply
          </Button>
          <Button style='border-cyan-700 hover:bg-cyan-50'>Save</Button>
        </div>

        <JobContentContainer />

        <div className='flex justify-center items-center gap-5 mb-16 border-y-2 border-y-gray-300 py-8'>
          <p className='text-[17px] font-semibold text-gray-600 tracking-wider'>
            Are you interested?
          </p>
          <Button style='bg-cyan-600 text-white text-sm hover:bg-cyan-700'>
            Apply Now
          </Button>
        </div>

        <CompanyInfoCard />
      </main>
      <JobSuggestions />
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
