'use client';

import { loginUser } from '@/actions/authActions';
import { Input } from '@/components/account/FormSettingsInput';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

function LoginCard() {
  const [state, formAction] = useFormState(loginUser, {});

  useEffect(() => {
    if (state?.credentials) toast.error(state.credentials);
  }, [state.credentials]);

  return (
    <form
      className='flex flex-wrap border-[1px] border-cyan-600 rounded-2xl overflow-hidden shadow-lg'
      action={formAction}
    >
      <div className='flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-200 via-rose-200 to-yellow-50 text-cyan-600 px-6 py-12'>
        <p className='text-4xl font-bold tracking-wider mb-8'>Welcome Back!</p>
        <p className='font-semibold tracking-wide'>
          Don&apos;t have an account yet?
        </p>

        <Link
          href='/authentication/?type=signup'
          className='border-2 border-cyan-600 px-10 py-1 rounded-full mt-4 uppercase text-xs tracking-widest font-semibold hover:border-cyan-800 hover:text-cyan-800 transition-all'
        >
          Sign Up
        </Link>
      </div>

      <div className='flex-1 px-12 py-14 border-l-[1px] border-l-cyan-600'>
        <p className='mb-8 font-extrabold text-3xl text-cyan-600 tracking-widest uppercase'>
          Sign In
        </p>
        <div className='w-[30rem] mx-auto'>
          <Input
            type='text'
            name='email'
            label='Email Address'
            placeholder='ex. alex.johnson@gmail.com'
            error={state?.email ? state.email : ''}
          >
            <MdEmail />
          </Input>

          <div className='mt-4'>
            <Input
              type='password'
              name='password'
              label='Password'
              placeholder='Minimum 8 characters'
              error={state?.password ? state.password : ''}
            >
              <MdLock />
            </Input>
          </div>

          {state?.credentials && (
            <p className='mt-6 uppercase text-xs tracking-wider font-semibold text-red-500'>
              {state.credentials}
            </p>
          )}
          <SubmitButton>Continue</SubmitButton>
        </div>
      </div>
    </form>
  );
}

export default LoginCard;
