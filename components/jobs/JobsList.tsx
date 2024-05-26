import JobCard from './JobCard';

function JobsList() {
  return (
    <div className='w-full'>
      <p className='text-lg font-bold text-blue-900 mb-5 tracking-wider'>
        Job results: 3.936
      </p>

      <div className='flex flex-col gap-5'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default JobsList;
