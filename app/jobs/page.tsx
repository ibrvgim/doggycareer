import Header from '@/components/general/Header';
import FiltersList from '@/components/jobs/FiltersList';
import JobsList from '@/components/jobs/JobsList';

function JobsPage() {
  return (
    <main>
      <Header />

      <section className='flex gap-12 py-20 px-28'>
        <FiltersList />
        <JobsList />
      </section>
    </main>
  );
}

export default JobsPage;
