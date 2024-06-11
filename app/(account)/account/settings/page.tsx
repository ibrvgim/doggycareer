import {
  PasswordForm,
  PersonalInfoForm,
} from '@/components/account/SettingsForm';
import { getUserAPI } from '@/data/auth/apiUser';
import { UserType } from '@/types/types';

async function SettingsPage() {
  const user: UserType | null = await getUserAPI();
  if (!user) return null;

  console.log(user);

  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='border-[1px] border-gray-300 rounded-xl px-12 py-10 bg-gray-50'>
        <PersonalInfoForm user={user} />
      </div>

      <div className='border-[1px] border-gray-300 rounded-xl px-12 py-10 bg-gray-50'>
        <PasswordForm />
      </div>
    </div>
  );
}

export default SettingsPage;
