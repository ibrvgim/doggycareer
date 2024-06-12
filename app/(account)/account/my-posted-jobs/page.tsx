import NoPostedJobCard from '@/components/account/NoPostedJobCard';
import SecondaryJobsListContainer from '@/components/general/SecondaryJobsListContainer';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';

async function MyPostedJobs() {
  const [user, allJobs] = await Promise.all([getUserAPI(), getJobs()]);

  const myPostedJobs = allJobs
    .filter((job) => job.postAuthor === user?.id)
    .sort(
      (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    );

  return (
    <div className='w-full'>
      {myPostedJobs.length > 0 ? (
        <SecondaryJobsListContainer jobs={myPostedJobs} />
      ) : (
        <NoPostedJobCard />
      )}
    </div>
  );
}

export default MyPostedJobs;
