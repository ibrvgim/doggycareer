import QuestionnaireCard from './QuestionnaireCard';
import WorkImage from '@/public/questionnaire-images/work.svg';

function FirstStage() {
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
        <Button>Part time</Button>
        <Button>Full time</Button>
      </div>
    </QuestionnaireCard>
  );
}

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='border-2 rounded-md border-gray-400 text-gray-500 font-semibold w-[40%] h-12 hover:border-blue-900 hover:text-blue-800 transition-all'>
      {children}
    </button>
  );
}

export default FirstStage;
