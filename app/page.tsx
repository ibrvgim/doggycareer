import Header from '@/components/general/Header';
import Features from '@/components/main/Features';
import Statistics from '@/components/main/Statistics';
import { getCountries } from '@/data/getCountries';
import MobileAdCard from '@/components/general/MobileAdCard';
import Footer from '@/components/general/Footer';
import TipCard from '@/components/main/TipCard';
import { getJobs } from '@/data/jobs/apiJobs';
import { getIndustries } from '@/data/getIndustries';
import RecommendedJobs from '@/components/main/RecommendedJobs';
import Questionnaire from '@/components/questionnaire/Questionnaire';
import { getPersonalData } from '@/data/users/apiUsers';
import { getUserAPI } from '@/data/auth/apiUser';

async function RootPage() {
  const [user, cities, industries, allJobs, usersPersonalData] =
    await Promise.all([
      getUserAPI(),
      getCountries(),
      getIndustries(),
      getJobs(),
      getPersonalData(),
    ]);

  const checkQuestionnaire = usersPersonalData?.find(
    (item) => item.userId === user?.id
  )?.questionnaire;

  return (
    <>
      <main>
        <Header cities={cities} />

        <div className='py-20 px-28'>
          {checkQuestionnaire ? (
            <RecommendedJobs allJobs={allJobs} />
          ) : (
            <div className='mt-12'>
              <Questionnaire cities={cities} industries={industries} />
            </div>
          )}
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
