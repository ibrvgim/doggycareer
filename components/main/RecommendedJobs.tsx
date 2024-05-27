import JobCard from '../jobs/JobCard';

function RecommendedJobs() {
  return (
    <div>
      <p className='text-center text-6xl font-extrabold text-blue-900 tracking-widest mt-12'>
        Jobs Picked For You
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        Jobs that match your searches and preferences
      </p>

      <div className='flex justify-center gap-5 mt-12 max-w-[104rem] mx-auto'>
        <JobCard descriptionLength={86} />
        <JobCard descriptionLength={86} />
        <JobCard descriptionLength={86} />
      </div>
    </div>
  );
}

export default RecommendedJobs;
