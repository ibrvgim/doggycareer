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
  return (
    <div className='flex gap-5 items-center'>
      <div className='flex-1'>
        <p className='text-5xl font-bold text-blue-800 leading-snug'>
          {question}
        </p>
        {children}
      </div>

      <div className='flex-1'>
        <Image
          src={image}
          alt='questionnaire image'
          width={350}
          height={350}
          className='mx-auto'
          draggable={false}
        />
      </div>
    </div>
  );
}

export default QuestionnaireCard;