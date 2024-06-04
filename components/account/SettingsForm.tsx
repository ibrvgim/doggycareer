import { Button, OutlineButton } from './FormSettingsButton';
import { Input } from './FormSettingsInput';
import {
  MdOutlineDriveFileRenameOutline,
  MdEmail,
  MdLocalPhone,
  MdLock,
} from 'react-icons/md';

export function PersonalInfoForm() {
  return (
    <form>
      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider'>
        Change Personal Information
      </p>

      <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
        <Input
          name='firstName'
          type='text'
          placeholder='ex. Alex'
          label='First Name'
        >
          <MdOutlineDriveFileRenameOutline />
        </Input>

        <Input
          name='lastName'
          type='text'
          placeholder='ex. Johnson'
          label='Last Name'
        >
          <MdOutlineDriveFileRenameOutline />
        </Input>

        <Input
          type='email'
          label='Email Address'
          disabled={true}
          defaultValue='alex.johnson@gmail.com'
        >
          <MdEmail />
        </Input>

        <Input
          name='phoneNumber'
          type='phone'
          placeholder='ex. +4917684618956'
          label='Phone Number'
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
  return (
    <form>
      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider'>
        Change Credentials
      </p>

      <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
        <Input
          name='password'
          type='password'
          placeholder='Minimum 8 characters'
          label='Password'
        >
          <MdLock />
        </Input>

        <Input
          name='lastName'
          type='text'
          placeholder='Minimum 8 characters'
          label='Confirm Password'
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
