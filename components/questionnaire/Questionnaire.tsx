import ProgressBar from './ProgressBar';
import FirstStage from './FirstStage';
import SecondStage from './SecondStage';

function Questionnaire() {
  return (
    <div className='rounded-3xl h-[32rem] max-w-[104rem] mx-auto bg-gradient-to-br from-blue-50 to-rose-50 px-24 py-16 flex flex-col shadow-md'>
      <ProgressBar />
      <div className='flex-grow'>&nbsp;</div>

      {/* <FirstStage /> */}
      <SecondStage />
    </div>
  );
}

export default Questionnaire;
