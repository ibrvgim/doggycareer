'use server';

import { ErrorsType } from '@/types/types';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

const errors: ErrorsType = {};

export async function jobSearchAction(_: any, data: FormData) {
  const title = data.get('title') as string;
  const location = data.get('location') as string;

  const filtersValue = data.get('filtersValue') || '';

  if (!title && !location && title.trim() === '' && location.trim() === '') {
    errors['inputError'] = 'Indicate what kind of job you are looking for';
    return errors;
  }

  errors['inputError'] = '';
  if (title && location) {
    redirect(
      `/jobs/?title=${slugify(title)}&location=${slugify(location)}${
        filtersValue && '&' + filtersValue
      }`
    );
  } else if (location) {
    redirect(
      `/jobs/?location=${slugify(location)}${
        filtersValue && '&' + filtersValue
      }`
    );
  } else if (title) {
    redirect(
      `/jobs/?title=${slugify(title)}${filtersValue && '&' + filtersValue}`
    );
  }
}
