'use server';

import { redirect } from 'next/navigation';

export async function filterAction(data: FormData) {
  const mainFilter = data.get('mainFilter') as string | null;

  const publicationDate = (data.get('publicationDate') as string) || 'all';
  const jobType = (data.get('jobType') as string) || 'all';
  const officeType = (data.get('officeType') as string) || 'all';
  const sortBy = (data.get('sortBy') as string) || 'all';

  let location: string | null = null;
  let title: string | null = null;

  if (mainFilter) {
    const [loc, tit] = mainFilter.split('%');
    location = loc !== 'null' ? loc : null;
    title = tit !== 'null' ? tit : null;
  }

  if (location && title) {
    redirect(
      `/jobs/?location=${location}&title=${title}&sortBy=${sortBy}&publicationDate=${publicationDate}&jobType=${jobType}&officeType=${officeType}`
    );
  } else if (location) {
    redirect(
      `/jobs/?location=${location}&sortBy=${sortBy}&publicationDate=${publicationDate}&jobType=${jobType}&officeType=${officeType}`
    );
  } else if (title) {
    redirect(
      `/jobs/?title=${title}&sortBy=${sortBy}&publicationDate=${publicationDate}&jobType=${jobType}&officeType=${officeType}`
    );
  } else {
    redirect(
      `/jobs/?sortBy=${sortBy}&publicationDate=${publicationDate}&jobType=${jobType}&officeType=${officeType}`
    );
  }
}
