'use server';

import { redirect } from 'next/navigation';

export async function filterAction(data: FormData) {
  const publicationDate = data.get('publicationDate') || 'all';
  const jobType = data.get('jobType') || 'all';
  const officeType = data.get('officeType') || 'all';
  const sortBy = data.get('sortBy') || 'all';

  redirect(
    `/jobs/?sortBy=${sortBy}&publicationDate=${publicationDate}&jobType=${jobType}&officeType=${officeType}`
  );
}
