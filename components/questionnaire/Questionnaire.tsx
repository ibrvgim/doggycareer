'use client';

import ProgressBar from './ProgressBar';
import { Suspense, lazy, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Cities, QuestionnaireType } from '@/types/types';
import LoadingSpinner from './LoadingSpinner';
import { useSelector } from 'react-redux';

const FirstStage = lazy(() => import('./FirstStage'));
const SecondStage = lazy(() => import('./SecondStage'));
const ThirdStage = lazy(() => import('./ThirdStage'));
const FourthStage = lazy(() => import('./FourthStage'));

function Questionnaire({
  cities,
  industries,
}: {
  cities: Cities;
  industries: string[];
}) {
  const [stage, setStage] = useState(0);
  const router = useRouter();
  const questionnaire = useSelector(
    (state: { questionnaire: QuestionnaireType }) => state.questionnaire
  );

  const stages = [
    <FirstStage key='first-stage' questionnaire={questionnaire} />,
    <SecondStage key='second-stage' cities={cities} />,
    <ThirdStage key='third-stage' industries={industries} />,
    <FourthStage key='fourth-stage' questionnaire={questionnaire} />,
  ];

  function handleBack() {
    setStage((stage) => stage - 1);
  }

  function handleSkip() {
    if (stage === stages.length - 1) router.push('/jobs');
    else setStage((stage) => stage + 1);
  }

  function handleNext() {
    setStage((stage) => stage + 1);
  }

  function handleFinish() {
    router.push('/jobs');
  }

  const validForSubmission = Boolean(
    questionnaire.email ||
      questionnaire.industry.length > 0 ||
      questionnaire.jobType ||
      questionnaire.location.length > 0
  );

  const validForNextStage =
    (stage === 0 && !!questionnaire.jobType) ||
    (stage === 1 && questionnaire.location.length > 0) ||
    (stage === 2 && questionnaire.industry.length > 0) ||
    (stage === 3 && !!questionnaire.email);

  return (
    <section className='rounded-3xl min-h-[42rem] max-w-[104rem] mx-auto bg-gradient-to-br mt-12 from-blue-50 to-rose-50 px-24 pt-16 pb-10 flex flex-col shadow-md'>
      <ProgressBar stages={stages.length} currentStage={stage} />

      <Suspense fallback={<LoadingSpinner />}>{stages[stage]}</Suspense>

      <div className='flex justify-between mt-12'>
        {stage > 0 ? (
          <Button handleOnClick={handleBack}>Back</Button>
        ) : (
          <div className='h-5'>&nbsp;</div>
        )}
        <div className='flex gap-10'>
          <Button handleOnClick={handleSkip} disabled={validForNextStage}>
            Skip
          </Button>
          {stage === stages.length - 1 ? (
            <Button handleOnClick={handleFinish} disabled={!validForSubmission}>
              Submit
            </Button>
          ) : (
            <Button handleOnClick={handleNext} disabled={!validForNextStage}>
              Next
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

function Button({
  children,
  handleOnClick,
  disabled = false,
}: {
  children: string;
  handleOnClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className='text-cyan-700 font-bold opacity-70 uppercase tracking-widest hover:opacity-100 transition-all 
      disabled:cursor-not-allowed disabled:opacity-50'
      onClick={handleOnClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Questionnaire;
