import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

function QuestionnaireCard({
  children,
  question,
  image,
}: {
  children: React.ReactNode;
  question: JSX.Element;
  image: string;
}) {
  const xl = useMediaQuery('(min-width:1280px)');

  return (
    <>
      <div className='flex-grow'>&nbsp;</div>
      <div className='flex flex-col gap-7 xl:items-center xl:flex-row'>
        <div className='flex-1'>
          <Image
            src={image}
            alt='questionnaire image'
            width={xl ? 450 : 400}
            height={xl ? 450 : 400}
            className='mx-auto'
            draggable={false}
          />
        </div>

        <div className='flex-1'>
          <p className='text-4xl font-bold text-cyan-600 leading-snug xl:text-5xl'>
            {question}
          </p>
          {children}
        </div>
      </div>
    </>
  );
}

export default QuestionnaireCard;
