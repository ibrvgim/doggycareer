import NoPostedJobCard from '@/components/account/NoPostedJobCard';
import PostedJobsList from '@/components/account/PostedJobsList';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';
import { JobType } from '@/types/types';

async function MyPostedJobs() {
  const user = await getUserAPI();
  const allJobs: JobType[] = await getJobs();

  const myPostedJobs = allJobs
    .filter((job) => job.postAuthor === user?.id)
    .sort(
      (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    );

  return (
    <div className='w-full'>
      {myPostedJobs.length > 0 ? (
        <PostedJobsList jobs={myPostedJobs} />
      ) : (
        <NoPostedJobCard />
      )}
    </div>
  );
}

export default MyPostedJobs;
