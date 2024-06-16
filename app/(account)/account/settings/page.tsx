import ExternalReferencesForm from '@/components/account/settings/ExternalReferencesForm';
import {
  PasswordForm,
  PersonalInfoForm,
} from '@/components/account/settings/SettingsForm';
import { getUserAPI } from '@/data/auth/apiUser';
import { getPersonalData } from '@/data/users/apiUsers';
import { UserType } from '@/types/types';

export const metadata = {
  title: 'Settings',
};

async function SettingsPage() {
  const user: UserType | null = await getUserAPI();
  const usersReferences = await getPersonalData();
  if (!user) return null;

  const getCurrentUserData = usersReferences?.find(
    (item) => item?.userId === user?.id
  );

  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='border-[1px] border-gray-300 rounded-xl px-12 py-10 bg-gray-50'>
        <PersonalInfoForm user={user} />
      </div>

      <div className='border-[1px] border-gray-300 rounded-xl px-12 py-10 bg-gray-50'>
        <ExternalReferencesForm references={getCurrentUserData} />
      </div>

      <div className='border-[1px] border-gray-300 rounded-xl px-12 py-10 bg-gray-50'>
        <PasswordForm />
      </div>
    </div>
  );
}

export default SettingsPage;
