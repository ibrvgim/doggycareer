import {
  PasswordForm,
  PersonalInfoForm,
} from '@/components/account/SettingsForm';

function SettingsPage() {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='border-[1px] border-gray-300 rounded-xl px-12 py-10 bg-gray-50'>
        <PersonalInfoForm />
      </div>

      <div className='border-[1px] border-gray-300 rounded-xl px-12 py-10 bg-gray-50'>
        <PasswordForm />
      </div>
    </div>
  );
}

export default SettingsPage;
