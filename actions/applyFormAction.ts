'use server';

import { getUserAPI } from '@/data/auth/apiUser';
import {
  getUserStoredJobs,
  updateAppliedJobs,
  updateSavedJobs,
} from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
import { ErrorsType } from '@/types/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const errors: ErrorsType = {};

function validEmail(email: string) {
  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  const valid = validateEmailRegex.test(email);

  if (!email || email.trim() === '') {
    errors.email = 'Field must be filled in';
    return true;
  } else if (!valid) {
    errors.email = 'Wrong email format';
    return false;
  } else {
    errors.email = '';
    return true;
  }
}

function validValue(key: string, value: string, length: number) {
  if (!value || value.trim() === '') {
    errors[key] = 'Field must be filled in';
    return false;
  } else if (value.length < length) {
    errors[key] = `Minimum ${length} characters`;
    return false;
  } else {
    errors[key] = '';
    return true;
  }
}

function validLinks(key: string, value: string, linkPattern: string) {
  if (!value.includes(linkPattern)) {
    errors[key] = `Incorrect link type`;
    return false;
  } else {
    errors[key] = '';
    return true;
  }
}

export async function applyFormAction(_: any, data: FormData) {
  const user = await getUserAPI();
  const storedJobs = await getUserStoredJobs();

  const listAppliedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).appliedJobs;

  const listSavedJobs = storedJobs?.find(
    (item) => item.userId === user?.id
  ).savedJobs;

  const jobId = data.get('jobId') as string;
  const firstName = data.get('firstName') as string;
  const lastName = data.get('lastName') as string;
  const email = data.get('email') as string;
  const phoneNumber = data.get('phoneNumber') as string;
  const linkedIn = data.get('linkedIn') as string;
  const github = data.get('github') as string;
  const salary = data.get('salary') as string;
  const startDate = data.get('startDate') as string;
  const workPermission = data.get('workPermission') as string;

  const checkFirstName = validValue('firstName', firstName, 3);
  const checkLastName = validValue('lastName', lastName, 3);
  const checkEmail = validEmail(email);
  const checkPhoneNumber = validValue('phoneNumber', phoneNumber, 10);
  const checkSalary = validValue('salary', salary, 3);
  const checkStartDate = validValue('startDate', startDate, 8);
  const checkWorkPermission = validValue('workPermission', workPermission, 2);
  const checkLinkedIn = linkedIn
    ? validLinks('linkedIn', linkedIn, 'www.linkedin.com')
    : true;
  const checkGitHub = github
    ? validLinks('github', github, 'https://github.com/')
    : true;

  if (
    !checkFirstName ||
    !checkLastName ||
    !checkEmail ||
    !checkPhoneNumber ||
    !checkSalary ||
    !checkStartDate ||
    !checkWorkPermission ||
    !checkLinkedIn ||
    !checkGitHub
  ) {
    return errors;
  }

  if (user) {
    updateAppliedJobs(user?.id, [jobId, ...listAppliedJobs]);
    if (listSavedJobs.includes(jobId)) {
      const clearedJobs = listSavedJobs.filter((job: string) => job !== jobId);
      await updateSavedJobs(user?.id, [...clearedJobs]);
    }

    revalidatePath('/jobs');
    redirect(`/jobs/apply/confirmation/?job=${jobId}`);
  }
}
