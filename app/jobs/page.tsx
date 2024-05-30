import Footer from '@/components/general/Footer';
import Header from '@/components/general/Header';
import FiltersList from '@/components/jobs/FiltersList';
import JobsList from '@/components/jobs/JobsList';
import { getCountries } from '@/data/getCountries';

async function JobsPage() {
  const cities = await getCountries();

  return (
    <>
      <main>
        <Header cities={cities} />

        <section className='flex gap-12 py-20 px-28'>
          <FiltersList />
          <JobsList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default JobsPage;
