import CustomCitiesSelect from './CustomCitiesSelect';
import QuestionnaireCard from './QuestionnaireCard';
import PlaceImage from '@/public/questionnaire-images/place.svg';
import { Cities } from '@/types/types';

function SecondStage({ cities }: { cities: Cities }) {
  return (
    <QuestionnaireCard
      question={
        <>
          <span className='text-rose-400'>Where</span> would you like to work?
        </>
      }
      image={PlaceImage}
    >
      <div className='mt-6'>
        <CustomCitiesSelect cities={cities} />
      </div>
    </QuestionnaireCard>
  );
}

export default SecondStage;
