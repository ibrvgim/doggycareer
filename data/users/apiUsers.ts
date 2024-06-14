import { createClient } from '../supabase/server';

interface PersonalDataType {
  linkedin: string;
  github: string;
}

export async function getPersonalData() {
  const supabase = createClient();

  const { data, error } = await supabase.from('users').select('*');

  if (error) throw new Error(error.message);
  return data;
}

export async function createPersonalData(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('users')
    .insert([{ userId: id }])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function updatePersonalData(
  id: string,
  updatedData: PersonalDataType
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('users')
    .update(updatedData)
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}
