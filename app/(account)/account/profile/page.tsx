import ExternalReferences from '@/components/account/profile/ExternalReferences';
import JobPreferences from '@/components/account/profile/JobPreferences';
import PersonalInformation from '@/components/account/profile/PersonalInformation';
import { getUserAPI } from '@/data/auth/apiUser';
import { getPersonalData } from '@/data/users/apiUsers';
import { redirect } from 'next/navigation';

async function ProfilePage() {
  const user = await getUserAPI();
  if (!user) redirect('/authentication');

  const usersReferences = await getPersonalData();
  const getCurrentUserData = usersReferences?.find(
    (item) => item?.userId === user?.id
  );

  return (
    <section className='w-full text-[15px] flex flex-col gap-10'>
      <PersonalInformation user={user} />
      <ExternalReferences references={getCurrentUserData} />
      <JobPreferences jobPreferences={getCurrentUserData?.questionnaire} />
    </section>
  );
}

export default ProfilePage;
