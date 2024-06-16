'use client';

import {
  EnvelopeIcon,
  BellAlertIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';
import QuestionnaireCard from './QuestionnaireCard';
import MailImage from '@/public/questionnaire-images/mail.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setEmail } from '@/redux/slices/questionnaireSlice';
import { QuestionnaireType } from '@/types/types';

function FourthStage({ questionnaire }: { questionnaire: QuestionnaireType }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState('');

  function handleSubmit() {
    if (!input || input.trim() === '') setInvalid('Field must be filled in');
    else if (!/^\S+@\S+\.\S+$/.test(input)) setInvalid('Wrong email format');
    else {
      dispatch(setEmail(input));
      setInvalid('');
    }
  }

  function handleEdit() {
    setInput(questionnaire.email);
    dispatch(setEmail(''));
  }

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
        {invalid && (
          <span className='w-10/12 flex justify-end text-sm mb-2 tracking-wider text-red-600'>
            {invalid}
          </span>
        )}
        {!questionnaire.email && (
          <>
            <div className='flex items-center relative'>
              <EnvelopeIcon className='size-[18px] text-gray-400 absolute left-6' />
              <input
                type='email'
                placeholder='Where to send notifications?'
                className='border-[1px] border-gray-400 rounded-full w-10/12 pl-14 pr-6 h-11 text-sm tracking-wider text-gray-600 placeholder:font-medium'
                autoComplete='off'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <button
              className='flex gap-3 items-center justify-center bg-cyan-500 text-white w-10/12 rounded-full mt-4 px-4 py-2 font-bold hover:bg-cyan-600 transition-all'
              onClick={handleSubmit}
            >
              <BellAlertIcon className='size-[18px] text-white' />
              Get Notifications
            </button>
          </>
        )}

        {questionnaire.email && (
          <div className='mt-3 w-10/12 px-2 flex items-center gap-2'>
            <p className='text-gray-500 font-bold text-justify'>
              We will send notifications to:{' '}
              <span className='text-cyan-600 font-semibold'>
                {questionnaire.email}
              </span>
            </p>
            <button onClick={handleEdit}>
              <PencilSquareIcon className='size-[1.2rem] text-gray-400 hover:text-cyan-700 transition-all' />
            </button>
          </div>
        )}

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
