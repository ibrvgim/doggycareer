import Footer from '@/components/general/Footer';
import Header from '@/components/general/Header';
import FiltersList from '@/components/jobs/FiltersList';
import JobsList from '@/components/jobs/JobsList';
import { getUserAPI } from '@/data/auth/apiUser';
import { getCountries } from '@/data/getCountries';
import { getJobs } from '@/data/jobs/apiJobs';
import { getSavedJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { JobType } from '@/types/types';

async function JobsPage() {
  const cities = await getCountries();
  const allJobs: JobType[] = await getJobs();
  const user = await getUserAPI();
  const savedJobs = await getSavedJobs();

  const getCurrentUserSavedJobs = savedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  return (
    <>
      <main>
        <Header cities={cities} />

        <section className='flex gap-12 py-20 px-28'>
          <FiltersList />
          <JobsList allJobs={allJobs} savedJobs={getCurrentUserSavedJobs} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default JobsPage;
