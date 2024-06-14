'use server';

import { getUserAPI } from '@/data/auth/apiUser';
import { updatePersonalData } from '@/data/users/apiUsers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function questionnaireAction(data: FormData) {
  const user = await getUserAPI();
  if (!user) redirect('/authentication');
  const questionnaireData = data.get('questionnaireData') as string;

  if (questionnaireData) {
    await updatePersonalData(user?.id, {
      questionnaire: JSON.parse(questionnaireData),
    });
    revalidatePath('/');
  }
}
