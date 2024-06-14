import { QuestionnaireType } from '@/types/types';
import QuestionnaireCard from './QuestionnaireCard';
import WorkImage from '@/public/questionnaire-images/work.svg';
import { useDispatch } from 'react-redux';
import { setJobType } from '@/redux/slices/questionnaireSLice';

function FirstStage({ questionnaire }: { questionnaire: QuestionnaireType }) {
  const dispatch = useDispatch();

  function handleJobType(type: string) {
    dispatch(setJobType(type));
  }

  return (
    <QuestionnaireCard
      question={
        <>
          Do you want to work <span className='text-rose-400'>part</span> or{' '}
          <span className='text-rose-400'>full</span> time?
        </>
      }
      image={WorkImage}
    >
      <div className='flex gap-3 mt-14'>
        <Button
          handleOnClick={() => handleJobType('part time')}
          active={questionnaire.jobType === 'part time'}
        >
          Part time
        </Button>
        <Button
          handleOnClick={() => handleJobType('full time')}
          active={questionnaire.jobType === 'full time'}
        >
          Full time
        </Button>
      </div>
    </QuestionnaireCard>
  );
}

function Button({
  children,
  handleOnClick,
  active,
}: {
  children: React.ReactNode;
  handleOnClick: () => void;
  active: boolean;
}) {
  return (
    <button
      className='border-2 rounded-md border-gray-400 text-gray-500 font-semibold w-[40%] h-12 
      hover:border-cyan-600 hover:text-cyan-700 transition-all'
      style={
        active
          ? { border: '2px solid rgb(8 145 178)', color: 'rgb(14 116 144)' }
          : {}
      }
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

export default FirstStage;
