'use server';

import { getUserAPI } from '@/data/auth/apiUser';
import { updatePersonalData } from '@/data/users/apiUsers';
import { ErrorsType } from '@/types/types';
import { revalidatePath } from 'next/cache';

const errors: ErrorsType = {};

function validLinks(key: string, value: string, linkPattern: string) {
  if (!value?.includes(linkPattern)) {
    errors[key] = `Incorrect link type`;
    return false;
  } else {
    errors[key] = '';
    return true;
  }
}

export async function externalReferencesAction(_: any, data: FormData) {
  const user = await getUserAPI();
  if (!user?.id) return;

  const linkedin = data.get('linkedin') as string;
  const github = data.get('github') as string;

  if (linkedin && github) {
    const checkLinkedIn = validLinks(
      'linkedin',
      linkedin,
      'https://www.linkedin.com'
    );
    const checkGitHub = validLinks('github', github, 'https://github.com/');

    if (!checkLinkedIn || !checkGitHub) return errors;
  } else if (linkedin) {
    const checkLinkedIn = validLinks(
      'linkedin',
      linkedin,
      'https://www.linkedin.com'
    );

    if (!checkLinkedIn) return errors;
  } else if (github) {
    const checkGitHub = validLinks('github', github, 'https://github.com/');

    if (!checkGitHub) return errors;
  }

  await updatePersonalData(user?.id, { linkedin, github });
  revalidatePath('/account');
}
