import SecondaryJobsListContainer from '@/components/general/SecondaryJobsListContainer';
import { getUserAPI } from '@/data/auth/apiUser';
import { getJobs } from '@/data/jobs/apiJobs';
import { getUserStoredJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import Image from 'next/image';
import ArchiveImage from '@/public/general/archive.svg';

async function ArchivePage() {
  const user = await getUserAPI();
  const allJobs = await getJobs();
  const storedJobs = await getUserStoredJobs();

  const listArchivedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  )?.archive;

  const getAllArchivedJobs = allJobs.filter((job) =>
    listArchivedJobs?.includes(job.id.toString())
  );

  return (
    <div className='w-full'>
      {getAllArchivedJobs.length > 0 ? (
        <SecondaryJobsListContainer jobs={getAllArchivedJobs} />
      ) : (
        <div className='w-full min-h-[28rem] flex flex-col justify-center items-center'>
          <Image
            src={ArchiveImage}
            alt='bookmark image'
            width={250}
            className='mb-14'
            draggable={false}
          />
          <p className='uppercase tracking-widest text-5xl text-gray-400 font-extrabold'>
            Archive Is Empty
          </p>
        </div>
      )}
    </div>
  );
}

export default ArchivePage;
