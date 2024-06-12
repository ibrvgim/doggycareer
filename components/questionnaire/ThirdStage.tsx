import { BoltIcon } from '@heroicons/react/24/solid';
import CustomJobsSelect from './CustomJobsSelection';
import QuestionnaireCard from './QuestionnaireCard';
import JobImage from '@/public/questionnaire-images/job.svg';

function ThirdStage({ industries }: { industries: string[] }) {
  return (
    <QuestionnaireCard
      question={
        <>
          Which <span className='text-rose-400'>job(s)</span> are you looking
          for?
        </>
      }
      image={JobImage}
    >
      <div className='mt-4'>
        <CustomJobsSelect industries={industries} />

        <div className='border-[1px] border-blue-600 rounded-xl bg-blue-100 w-10/12 mt-6 px-6 py-3 flex gap-5 items-center'>
          <BoltIcon className='size-10 text-blue-500' />
          <p className='text-blue-900 text-sm tracking-wider'>
            Please select as many as possible so we can provide more accurate
            recommendations.
          </p>
        </div>
      </div>
    </QuestionnaireCard>
  );
}

export default ThirdStage;
