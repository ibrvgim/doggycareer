'use client';

import ProgressBar from './ProgressBar';
import { Suspense, lazy, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Cities, QuestionnaireType } from '@/types/types';
import LoadingSpinner from './LoadingSpinner';
import { useSelector } from 'react-redux';
import { questionnaireAction } from '@/actions/questionnaireAction';
import { useFormStatus } from 'react-dom';

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
  const formElement = useRef<HTMLFormElement>(null);
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

  const allFieldsFilled = Boolean(
    questionnaire.email &&
      questionnaire.industry.length > 0 &&
      questionnaire.jobType &&
      questionnaire.location.length > 0
  );

  const allFieldsEmpty = Boolean(
    !questionnaire.email &&
      questionnaire.industry.length === 0 &&
      !questionnaire.jobType &&
      questionnaire.location.length === 0
  );

  function handleBack() {
    setStage((stage) => stage - 1);
  }

  function handleSkip() {
    if (stage === stages.length - 1) {
      if (validForSubmission) {
        localStorage.setItem('questionnaire', JSON.stringify(questionnaire));
      }

      router.push('/jobs');
    } else setStage((stage) => stage + 1);
  }

  function handleNext() {
    setStage((stage) => stage + 1);
  }

  function handleFinish() {
    if (validForSubmission) {
      localStorage.setItem('questionnaire', JSON.stringify(questionnaire));
      formElement.current!.requestSubmit();
    }
  }

  return (
    <section
      className='rounded-3xl min-h-[42rem] max-w-[104rem] mx-auto bg-gradient-to-br from-blue-50 to-rose-50 
    px-16 pt-16 pb-10 flex flex-col shadow-md lg:px-24'
    >
      <ProgressBar stages={stages.length} currentStage={stage} />

      <Suspense fallback={<LoadingSpinner />}>{stages[stage]}</Suspense>

      <div className='flex justify-between mt-12'>
        {stage > 0 ? (
          <Button handleOnClick={handleBack}>Back</Button>
        ) : (
          <div className='h-5'>&nbsp;</div>
        )}

        <form
          className='flex gap-10'
          action={questionnaireAction}
          ref={formElement}
        >
          {validForSubmission && (
            <input
              name='questionnaireData'
              value={JSON.stringify(questionnaire)}
              className='hidden'
              hidden
              readOnly
            />
          )}
          {((!allFieldsFilled && stage !== stages.length - 1) ||
            allFieldsEmpty) && (
            <Button handleOnClick={handleSkip} disabled={validForNextStage}>
              Skip
            </Button>
          )}

          {stage === stages.length - 1 ? (
            <Button handleOnClick={handleFinish} disabled={!validForSubmission}>
              Submit
            </Button>
          ) : (
            <Button handleOnClick={handleNext} disabled={!validForNextStage}>
              Next
            </Button>
          )}
        </form>
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
  handleOnClick?: () => void;
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className='text-cyan-700 font-bold opacity-70 uppercase tracking-widest hover:opacity-100 transition-all 
      disabled:cursor-not-allowed disabled:opacity-50'
      onClick={handleOnClick}
      disabled={disabled || pending}
      type='button'
    >
      {pending ? 'Submitting...' : children}
    </button>
  );
}

export default Questionnaire;
