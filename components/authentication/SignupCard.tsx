'use client';

import { createUser } from '@/actions/authActions';
import { Input } from '@/components/account/FormSettingsInput';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import {
  MdOutlineDriveFileRenameOutline,
  MdEmail,
  MdLocalPhone,
  MdLock,
} from 'react-icons/md';
import SubmitButton from './SubmitButton';

function SignupCard() {
  const [state, formAction] = useFormState(createUser, {});

  return (
    <form
      className='flex flex-wrap border-[1px] border-cyan-600 rounded-2xl overflow-hidden shadow-xl'
      action={formAction}
    >
      <div className='flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-200 via-rose-200 to-yellow-50 text-cyan-600 px-6 py-12'>
        <p className='text-4xl font-bold tracking-wider mb-8'>
          Welcome to Doggycareer!
        </p>
        <p className='font-semibold tracking-wide'>Already have an account?</p>

        <Link
          href='/authentication/?type=login'
          className='border-2 border-cyan-600 px-10 py-1 rounded-full mt-4 uppercase text-xs tracking-widest font-semibold hover:border-cyan-800 hover:text-cyan-800 transition-all'
        >
          Sign In
        </Link>
      </div>

      <div className='flex-1 px-12 py-14 border-l-[1px] border-l-cyan-600'>
        <p className='mb-8 font-extrabold text-3xl text-cyan-600 tracking-widest uppercase'>
          Sign Up
        </p>
        <div className='w-[30rem] mx-auto'>
          <Input
            type='firstName'
            name='firstName'
            label='First Name'
            placeholder='ex. Alex'
            error={state?.firstName ? state.firstName : ''}
          >
            <MdOutlineDriveFileRenameOutline />
          </Input>

          <div className='mt-4'>
            <Input
              type='lastName'
              name='lastName'
              label='Last Name'
              placeholder='ex. Johnson'
              error={state?.lastName ? state.lastName : ''}
            >
              <MdOutlineDriveFileRenameOutline />
            </Input>
          </div>

          <div className='mt-4'>
            <Input
              type='email'
              name='email'
              label='Email Address'
              placeholder='ex. alex.johnson@gmail.com'
              error={state?.email ? state.email : ''}
            >
              <MdEmail />
            </Input>
          </div>

          <div className='mt-4'>
            <Input
              type='text'
              name='phoneNumber'
              label='Phone Number'
              placeholder='ex. +49 176 846 18 956'
              error={state?.phoneNumber ? state.phoneNumber : ''}
            >
              <MdLocalPhone />
            </Input>
          </div>

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

          <div className='mt-4'>
            <Input
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Minimum 8 characters'
              error={state?.confirmPassword ? state.confirmPassword : ''}
            >
              <MdLock />
            </Input>
          </div>
          <SubmitButton>Create Account</SubmitButton>
        </div>
      </div>
    </form>
  );
}

export default SignupCard;
