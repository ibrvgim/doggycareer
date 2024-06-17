import { JobType } from '@/types/types';

function JobContentContainer({ job }: { job: JobType }) {
  const descriptions = job.jobDescription.trim().split('\\n');
  const responsibilities = job.responsibilities.trim().split('\\n');
  const qualifications = job.qualifications.trim().split('\\n');

  return (
    <section className='mb-14 mt-10'>
      <div className='text-gray-600 text-justify tracking-wide leading-relaxed mb-10'>
        <p className='text-cyan-700 text-xl font-semibold mb-4 tracking-wider'>
          About the Job:
        </p>
        {descriptions.map((item) => (
          <p key={item} className='mb-6'>
            {item}
          </p>
        ))}
      </div>

      <div className='mb-10'>
        <p className='text-cyan-700 text-[17px] font-semibold mb-4 tracking-wider'>
          Responsibilities:
        </p>
        <ul className='text-gray-600 tracking-wide flex flex-col gap-1'>
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className='text-cyan-700 text-[17px] font-semibold mb-4 tracking-wider'>
          Qualifications:
        </p>
        <ul className='text-gray-600 tracking-wide flex flex-col gap-1'>
          {qualifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default JobContentContainer;
