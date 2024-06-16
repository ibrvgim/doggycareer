import { clearQuestionnaireAction } from '@/actions/questionnaireAction';
import { QuestionnaireType } from '@/types/types';
import Link from 'next/link';
import { HiMiniPencilSquare } from 'react-icons/hi2';

function JobPreferences({
  jobPreferences,
}: {
  jobPreferences: QuestionnaireType;
}) {
  return (
    <div>
      <div className='flex items-center gap-3'>
        <p className='text-2xl font-bold text-gray-400 tracking-widest'>
          Job Preferences
        </p>
        {jobPreferences ? (
          <form action={clearQuestionnaireAction}>
            <button
              className='border-[1px] border-rose-400 text-rose-400 text-xs tracking-wider py-[1px] px-5 rounded-full 
            hover:border-rose-700 hover:text-rose-700 transition-all'
            >
              Delete
            </button>
          </form>
        ) : (
          <Link
            href='/'
            className='text-2xl font-bold text-gray-400 hover:text-cyan-700 transition-all'
          >
            <HiMiniPencilSquare />
          </Link>
        )}
      </div>

      {jobPreferences ? (
        <div className='flex flex-col gap-2 mt-4 text-gray-400 font-semibold tracking-wider'>
          {jobPreferences.jobType && (
            <p className='capitalize'>
              <span className='text-rose-400'>Job Type:</span>{' '}
              {jobPreferences.jobType}
            </p>
          )}

          {jobPreferences.location.length > 0 && (
            <p className='capitalize'>
              <span className='text-rose-400'>
                {jobPreferences.location.length > 1
                  ? 'Job Regions:'
                  : 'Job Region:'}
              </span>{' '}
              {jobPreferences.location.join(' | ')}
            </p>
          )}

          {jobPreferences.industry.length > 0 && (
            <p className='capitalize'>
              <span className='text-rose-400'>
                {jobPreferences.industry.length > 1
                  ? 'Job Industries:'
                  : 'Job Industry:'}
              </span>{' '}
              {jobPreferences.industry.join(' | ')}
            </p>
          )}
        </div>
      ) : (
        <EmptyCard />
      )}
    </div>
  );
}

function EmptyCard() {
  return (
    <div className='mt-4'>
      <p className='text-base font-semibold text-gray-400 tracking-wider'>
        No Job Preferences have been selected. Go to the{' '}
        <Link
          href='/'
          className='text-cyan-600 hover:text-cyan-800 transition-colors'
        >
          Main Page
        </Link>{' '}
        and fill out the questionnaire.
      </p>

      <p className='text-base font-semibold text-gray-400 tracking-wider mt-1'>
        It will help you see more relevant vacancies that interest you.
      </p>
    </div>
  );
}

export default JobPreferences;
