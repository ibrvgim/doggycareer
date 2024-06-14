import { getUserAPI } from '@/data/auth/apiUser';
import { getPersonalData } from '@/data/users/apiUsers';
import { redirect } from 'next/navigation';

async function QuestionnairePage() {
  const [user, personalData] = await Promise.all([
    getUserAPI(),
    getPersonalData(),
  ]);

  const questionnaire = personalData.find(
    (item) => item.userId === user?.id
  )?.questionnaire;

  if (!questionnaire) redirect('/');

  return <div className='w-full'>questionnaire</div>;
}

export default QuestionnairePage;
