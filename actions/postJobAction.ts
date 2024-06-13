'use server';

import { getUserAPI } from '@/data/auth/apiUser';
import { getSingleJob, postJobAPI, updateJobAPI } from '@/data/jobs/apiJobs';
import { ErrorsType, PostedJobType } from '@/types/types';
import { formatNumber } from '@/utilities/formatNumber';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const errors: ErrorsType = {};

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

export async function postJobAction(_: any, data: FormData) {
  const user = await getUserAPI();

  const jobId = data.get('jobId') as string | undefined;

  const companyName = data.get('companyName') as string;
  const logo = data.get('logo') as string;
  const jobTitle = data.get('jobTitle') as string;
  const location = data.get('location') as string;
  const jobType = data.get('jobType') as string;
  const officeType = data.get('officeType') as string;
  const website = data.get('website') as string;
  const employeesMinValue = data.get('employeesMinValue') as string;
  const employeesMaxValue = data.get('employeesMaxValue') as string;
  const employeesNumber = `${formatNumber(employeesMinValue)} - ${formatNumber(
    employeesMaxValue
  )}`;
  const jobDescription = data.get('jobDescription') as string;
  const responsibilities = data.get('responsibilities') as string;
  const qualifications = data.get('qualifications') as string;
  const industry = data.get('industry') as string;

  const checkCompanyName = validValue('companyName', companyName, 5);
  const checkLogo = validValue('logo', logo, 10);
  const checkJobTitle = validValue('jobTitle', jobTitle, 20);
  const checkLocation = validValue('location', location, 4);
  const checkJobType = validValue('jobType', jobType, 5);
  const checkOfficeType = validValue('officeType', officeType, 5);
  const checkEmployeesNumber = validValue(
    'employeesNumber',
    employeesNumber,
    4
  );
  const checkJobDescription = validValue('jobDescription', jobDescription, 600);
  const checkResponsibilities = validValue(
    'responsibilities',
    responsibilities,
    300
  );
  const checkQualifications = validValue('qualifications', qualifications, 300);
  const checkIndustry = validValue('industry', industry, 10);

  if (
    !checkCompanyName ||
    !checkLogo ||
    !checkJobTitle ||
    !checkLocation ||
    !checkJobType ||
    !checkOfficeType ||
    !checkEmployeesNumber ||
    !checkJobDescription ||
    !checkResponsibilities ||
    !checkQualifications ||
    !checkIndustry
  )
    return errors;

  const getJob = jobId && (await getSingleJob(jobId));

  const job: PostedJobType = {
    companyName,
    logo,
    jobTitle,
    location,
    jobType,
    officeType,
    website,
    employeesNumber,
    jobDescription,
    responsibilities,
    qualifications,
    industry: industry.toLowerCase(),
    postAuthor: user?.id || '',
  };

  if (jobId) {
    await updateJobAPI(getJob?.id, job);
    revalidatePath('/');
    redirect(`/jobs/${getJob?.id}`);
  } else {
    const response = await postJobAPI(job);
    revalidatePath('/');
    redirect(`/jobs/${response?.[0].id}`);
  }
}
