import JobCard from './JobCard';

function JobSuggestions() {
  return (
    <section className='mt-10 pt-16 pb-20 px-[20%] bg-gray-50'>
      <p className='text-4xl font-bold mb-10 text-cyan-700 tracking-wider'>
        Other Job Suggestions
      </p>

      <div className='flex flex-col gap-7'>
        {/* SUSPENSE TO SHOW LOADING PROCCESS */}
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </section>
  );
}

export default JobSuggestions;
