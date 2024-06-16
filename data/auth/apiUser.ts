import { createClient } from '../supabase/server';

export async function createUserAPI(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        phoneNumber,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function loginUserAPI(email: string, password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return error.message;
  return data;
}

export async function logoutUserAPI() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getUserAPI() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function updatePersonalInformationAPI(
  firstName: string,
  lastName: string,
  phoneNumber: string
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.updateUser({
    data: { firstName, lastName, phoneNumber },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function updatePasswordAPI(password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}
