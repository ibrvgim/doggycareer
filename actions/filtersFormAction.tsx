'use server';

import { redirect } from 'next/navigation';

export async function filterAction(data: FormData) {
  const publicationDate = data.get('publicationDate') || 'all';
  const jobType = data.get('jobType') || 'all';
  const officeType = data.get('officeType') || 'all';

  redirect(
    `/jobs/?publicationDate=${publicationDate}&jobType=${jobType}&officeType=${officeType}`
  );
}
