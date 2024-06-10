'use client';

import { UserType } from '@/types/types';
import { Button, OutlineButton } from './FormSettingsButton';
import { Input } from '../general/Input';
import { useFormState } from 'react-dom';
import { updatePassword, updateUserInfo } from '@/actions/authActions';
import {
  MdOutlineDriveFileRenameOutline,
  MdEmail,
  MdLocalPhone,
  MdLock,
} from 'react-icons/md';

export function PersonalInfoForm({ user }: { user: UserType }) {
  const [state, formAction] = useFormState(updateUserInfo, {});

  return (
    <form action={formAction}>
      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider'>
        Change Personal Information
      </p>

      <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
        <Input
          name='firstName'
          type='text'
          placeholder='ex. Alex'
          label='First Name'
          defaultValue={user?.user_metadata.firstName}
          error={state?.firstName ? state?.firstName : ''}
        >
          <MdOutlineDriveFileRenameOutline />
        </Input>

        <Input
          name='lastName'
          type='text'
          placeholder='ex. Johnson'
          label='Last Name'
          defaultValue={user?.user_metadata.lastName}
          error={state?.lastName ? state?.lastName : ''}
        >
          <MdOutlineDriveFileRenameOutline />
        </Input>

        <Input
          type='email'
          label='Email Address'
          disabled={true}
          defaultValue={user?.user_metadata.email}
        >
          <MdEmail />
        </Input>

        <Input
          name='phoneNumber'
          type='phone'
          placeholder='ex. +4917684618956'
          label='Phone Number'
          defaultValue={user?.user_metadata.phoneNumber}
          error={state?.phoneNumber ? state?.phoneNumber : ''}
        >
          <MdLocalPhone />
        </Input>
      </div>

      <div className='flex gap-2 justify-end mt-8'>
        <OutlineButton>Cancel</OutlineButton>
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}

export function PasswordForm() {
  const [state, formAction] = useFormState(updatePassword, {});

  return (
    <form action={formAction}>
      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider'>
        Change Credentials
      </p>

      <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
        <Input
          name='password'
          type='password'
          placeholder='Minimum 8 characters'
          label='Password'
          error={state?.password ? state?.password : ''}
        >
          <MdLock />
        </Input>

        <Input
          name='confirmPassword'
          type='password'
          placeholder='Minimum 8 characters'
          label='Confirm Password'
          error={state?.confirmPassword ? state?.confirmPassword : ''}
        >
          <MdLock />
        </Input>
      </div>

      <div className='flex gap-2 justify-end mt-8'>
        <OutlineButton>Cancel</OutlineButton>
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}
