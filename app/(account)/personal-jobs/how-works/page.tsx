import Link from 'next/link';

function HowWorksPage() {
  return (
    <div>
      <p className='text-5xl tracking-widest font-extrabold text-rose-400 opacity-95'>
        How It Works?
      </p>

      <ul className='flex flex-col gap-6 mt-10 tracking-wide text-[17px] leading-relaxed text-gray-500'>
        <li>
          <p>
            <Link
              href='/personal-jobs/saved-jobs'
              className='font-bold text-cyan-600 uppercase text-sm'
            >
              Saved Jobs:
            </Link>{' '}
            You may save vacancies that match your criteria, allowing you to
            easily get back to them at any time. It ensures that you won&apos;t
            miss out on potential opportunities and makes managing your job
            search more convenient and organized.
          </p>
        </li>

        <li>
          <p>
            <Link
              href='/personal-jobs/applied-jobs'
              className='font-bold text-cyan-600 uppercase text-sm'
            >
              Applied Jobs:
            </Link>{' '}
            All the vacancies you have applied for will be displayed in that
            section. This allows you to easily track your applications, monitor
            their status, and keep your job search organized.
          </p>
        </li>

        <li>
          <p>
            <Link
              href='/personal-jobs/archive'
              className='font-bold text-cyan-600 uppercase text-sm'
            >
              Archive:
            </Link>{' '}
            You may move all applied jobs to the archive, ensuring they
            won&apos;t appear in future job searches. It helps keep your job
            search clean and focused on new opportunities. You will not be able
            to remove jobs from the archive.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default HowWorksPage;
