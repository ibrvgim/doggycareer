'use server';

import {
  createUserAPI,
  loginUserAPI,
  logoutUserAPI,
  updatePasswordAPI,
  updatePersonalInformationAPI,
} from '@/data/auth/apiUser';
import { createSavedAppliedJobs } from '@/data/jobs/saved-applied-jobs/apiSavedAppliedJobs';
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

export async function loginUser(_: any, data: FormData) {
  const email = data.get('email') as string;
  const password = data.get('password') as string;

  const checkEmail = validEmail(email);
  const checkPassword = validValue('password', password, 8);

  if (!checkEmail || !checkPassword) {
    return errors;
  }

  const loginOutput = await loginUserAPI(email, password);

  if (typeof loginOutput !== 'string') {
    errors.credentials = '';
    redirect('/');
  } else {
    errors.credentials = loginOutput;
    return errors;
  }
}

export async function createUser(_: any, data: FormData) {
  const firstName = data.get('firstName') as string;
  const lastName = data.get('lastName') as string;
  const email = data.get('email') as string;
  const phoneNumber = data.get('phoneNumber') as string;
  const password = data.get('password') as string;
  const confirmPassword = data.get('confirmPassword') as string;

  const checkFirstName = validValue('firstName', firstName, 3);
  const checkLastName = validValue('lastName', lastName, 3);
  const checkEmail = validEmail(email);
  const checkPhoneNumber = validValue('phoneNumber', phoneNumber, 10);
  const checkPassword = validValue('password', password, 8);
  const checkConfirmPassword = validValue(
    'confirmPassword',
    confirmPassword,
    8
  );

  if (
    !checkFirstName ||
    !checkLastName ||
    !checkEmail ||
    !checkPhoneNumber ||
    !checkPassword ||
    !checkConfirmPassword
  ) {
    return errors;
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords mismatch';
    errors.password = 'Passwords mismatch';
    return errors;
  } else {
    errors.confirmPassword = '';
    errors.password = '';
  }

  const newUser = await createUserAPI(
    email,
    password,
    firstName,
    lastName,
    phoneNumber
  );

  if (newUser.user) {
    createSavedAppliedJobs(newUser.user.id);
    redirect('/');
  }
}

export async function signoutAction() {
  await logoutUserAPI();
  redirect('/authentication');
}

export async function updateUserInfo(_: any, data: FormData) {
  const firstName = data.get('firstName') as string;
  const lastName = data.get('lastName') as string;
  const phoneNumber = data.get('phoneNumber') as string;

  const checkFirstName = validValue('firstName', firstName, 3);
  const checkLastName = validValue('lastName', lastName, 3);
  const checkPhoneNumber = validValue('phoneNumber', phoneNumber, 10);

  if (!checkFirstName || !checkLastName || !checkPhoneNumber) {
    return errors;
  } else {
    await updatePersonalInformationAPI(firstName, lastName, phoneNumber);
    revalidatePath('/');
  }
}

export async function updatePassword(_: any, data: FormData) {
  const password = data.get('password') as string;
  const confirmPassword = data.get('confirmPassword') as string;

  const checkPassword = validValue('password', password, 8);
  const checkConfirmPassword = validValue(
    'confirmPassword',
    confirmPassword,
    8
  );

  if (!checkPassword || !checkConfirmPassword) {
    return errors;
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords mismatch';
    errors.password = 'Passwords mismatch';
    return errors;
  } else {
    errors.confirmPassword = '';
    errors.password = '';

    await updatePasswordAPI(password);
  }
}
