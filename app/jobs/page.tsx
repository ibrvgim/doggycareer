import Footer from '@/components/general/Footer';
import Header from '@/components/general/Header';
import JobsContainer from '@/components/jobs/JobsContainer';
import { getUserAPI } from '@/data/auth/apiUser';
import { getCountries } from '@/data/getCountries';
import { getJobs } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { JobType } from '@/types/types';

export async function generateStaticParams() {
  const allJobs: JobType[] = await getJobs();

  return allJobs.map((job) => ({
    slugJob: job.id,
  }));
}

async function JobsPage() {
  const [cities, allJobs, user, storedJobs] = await Promise.all([
    getCountries(),
    getJobs(),
    getUserAPI(),
    getUserStoredJobs(),
  ]);

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.savedJobs;

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.appliedJobs;

  return (
    <>
      <main>
        <Header cities={cities} />
        <JobsContainer
          userId={user?.id}
          allJobs={allJobs}
          listSavedJobs={listSavedJobs}
          listAppliedJobs={listAppliedJobs}
        />
      </main>
      <Footer />
    </>
  );
}

export default JobsPage;
