function ProgressBar({
  stages,
  currentStage,
}: {
  stages: number;
  currentStage: number;
}) {
  const progress = ((currentStage + 1) / stages) * 100;

  return (
    <div>
      <div className='rounded-full h-2 bg-blue-200 overflow-hidden'>
        <div
          className='bg-rose-500 h-full rounded-full'
          style={{ width: `${progress}%` }}
        >
          &nbsp;
        </div>
      </div>
      <p className='text-gray-500 font-extrabold mt-3 float-right'>
        {currentStage + 1} / 4
      </p>
    </div>
  );
}

export default ProgressBar;
