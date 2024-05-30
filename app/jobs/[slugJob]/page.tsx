import Footer from '@/components/general/Footer';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import CompanyInfoCard from '@/components/jobs/CompanyInfoCard';
import JobContentContainer from '@/components/jobs/JobContentContainer';
import { JobItemHeader } from '@/components/jobs/JobItemHeader';

function JobItemPage() {
  return (
    <div>
      <SecondaryHeader />

      <main className='px-[20%] pt-20 pb-10'>
        <JobItemHeader />

        <div className='mt-8 flex flex-wrap gap-2'>
          <Button style='border-blue-500 bg-blue-800 text-white hover:bg-blue-600'>
            Apply
          </Button>
          <Button style='border-blue-900 hover:bg-blue-50'>Save</Button>
        </div>

        <JobContentContainer />
        <CompanyInfoCard />

        <div>Other Job Suggestions</div>
      </main>

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
