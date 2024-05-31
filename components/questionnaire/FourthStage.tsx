import { EnvelopeIcon, BellAlertIcon } from '@heroicons/react/24/solid';
import QuestionnaireCard from './QuestionnaireCard';
import MailImage from '@/public/questionnaire-images/mail.svg';

function FourthStage() {
  return (
    <QuestionnaireCard
      question={
        <>
          Get <span className='text-rose-400'>notifications</span> and{' '}
          <span className='text-rose-400'>never miss</span> jobs that match you!
        </>
      }
      image={MailImage}
    >
      <div className='mt-6'>
        <div className='flex items-center relative'>
          <EnvelopeIcon className='size-[18px] text-gray-400 absolute left-6' />
          <input
            type='email'
            placeholder='Where to send notifications?'
            className='border-[1px] border-gray-400 rounded-full w-10/12 pl-14 pr-6 h-11 text-sm tracking-wider text-blue-900 placeholder:font-medium'
            autoComplete='off'
          />
        </div>

        <button className='flex gap-3 items-center justify-center bg-cyan-500 text-white w-10/12 rounded-full mt-4 px-4 py-2 font-bold hover:bg-cyan-600 transition-all'>
          <BellAlertIcon className='size-[18px] text-white' />
          Get Notifications
        </button>
        <p className='text-gray-500 text-xs mt-3 w-10/12 text-justify px-2'>
          We will send you matching jobs by email from now on. You may{' '}
          <span className='text-rose-500'>unsubscribe</span> at any time from
          our emails and services.
        </p>
      </div>
    </QuestionnaireCard>
  );
}

export default FourthStage;
