'use client';

import ProgressBar from './ProgressBar';
import { Suspense, lazy, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Cities } from '@/types/types';
import LoadingSpinner from './LoadingSpinner';

const FirstStage = lazy(() => import('./FirstStage'));
const SecondStage = lazy(() => import('./SecondStage'));
const ThirdStage = lazy(() => import('./ThirdStage'));
const FourthStage = lazy(() => import('./FourthStage'));

function Questionnaire({ cities }: Cities) {
  const [stage, setStage] = useState(0);
  const router = useRouter();

  const stages = [
    <FirstStage key='first-stage' />,
    <SecondStage key='second-stage' cities={cities} />,
    <ThirdStage key='third-stage' />,
    <FourthStage key='fourth-stage' />,
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
          <Button handleOnClick={handleSkip}>Skip</Button>
          {stage === stages.length - 1 ? (
            <Button handleOnClick={handleFinish}>Submit</Button>
          ) : (
            <Button handleOnClick={handleNext}>Next</Button>
          )}
        </div>
      </div>
    </section>
  );
}

function Button({
  children,
  handleOnClick,
}: {
  children: string;
  handleOnClick: () => void;
}) {
  return (
    <button
      className='text-blue-900 font-bold opacity-70 uppercase tracking-widest hover:opacity-100 transition-all'
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

export default Questionnaire;
