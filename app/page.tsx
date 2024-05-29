import Header from '@/components/general/Header';
import Features from '@/components/main/Features';
import Questionnaire from '@/components/questionnaire/Questionnaire';
import Statistics from '@/components/main/Statistics';
import { getCountries } from '@/data/getCountries';
import MobileAdCard from '@/components/general/MobileAdCard';
import Footer from '@/components/general/Footer';
import TipCard from '@/components/main/TipCard';

async function RootPage() {
  const cities = await getCountries();

  return (
    <main>
      <Header cities={cities} />

      <div className='py-20 px-28'>
        <Questionnaire cities={cities} />
        {/* <RecommendedJobs /> */}
        <Features />
        <TipCard />
        <Statistics />
        <MobileAdCard />
      </div>

      <Footer />
    </main>
  );
}

export default RootPage;
