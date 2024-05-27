import Header from '@/components/general/Header';
import Features from '@/components/main/Features';
import Questionnaire from '@/components/questionnaire/Questionnaire';
import RecommendedJobs from '@/components/main/RecommendedJobs';
import Statistics from '@/components/main/Statistics';

function RootPage() {
  return (
    <main>
      <Header />

      <section className='py-20 px-28'>
        <Questionnaire />
        {/* <RecommendedJobs /> */}
        <Features />
        <Statistics />
      </section>
    </main>
  );
}

export default RootPage;
