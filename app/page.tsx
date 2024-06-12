import Header from '@/components/general/Header';
import Features from '@/components/main/Features';
import Questionnaire from '@/components/questionnaire/Questionnaire';
import Statistics from '@/components/main/Statistics';
import { getCountries } from '@/data/getCountries';
import MobileAdCard from '@/components/general/MobileAdCard';
import Footer from '@/components/general/Footer';
import TipCard from '@/components/main/TipCard';
import RecommendedJobs from '@/components/main/RecommendedJobs';
import { getJobs } from '@/data/jobs/apiJobs';
import { getIndustries } from '@/data/getIndustries';

async function RootPage() {
  const [cities, industries, allJobs] = await Promise.all([
    getCountries(),
    getIndustries(),
    getJobs(),
  ]);

  return (
    <>
      <main>
        <Header cities={cities} />

        <div className='py-20 px-28'>
          <Questionnaire cities={cities} industries={industries} />
          {/* <RecommendedJobs allJobs={allJobs} /> */}
          <Features />
          <TipCard />
          <Statistics />
          <MobileAdCard />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RootPage;
