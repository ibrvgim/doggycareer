import NoPostedJobCard from '@/components/account/post-job/NoPostedJobCard';
import SecondaryJobsListContainer from '@/components/general/SecondaryJobsListContainer';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';

export const metadata = {
  title: 'My Posted Jobs',
};

async function MyPostedJobs() {
  const [user, allJobs] = await Promise.all([getUserAPI(), getJobs()]);

  const myPostedJobs = allJobs
    .filter((job) => job.postAuthor === user?.id)
    .sort(
      (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    );

  return (
    <div className='w-full'>
      <p className='border-b-[1px] border-b-gray-300 mb-8 pb-4 text-lg tracking-wider text-rose-500'>
        Jobs you post will not appear in search results for you.
      </p>

      {myPostedJobs.length > 0 ? (
        <SecondaryJobsListContainer jobs={myPostedJobs} />
      ) : (
        <NoPostedJobCard />
      )}
    </div>
  );
}

export default MyPostedJobs;
