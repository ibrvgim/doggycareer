// FORMS ERROR TYPE
export interface ErrorsType {
  [key: string]: string | undefined;
}

//  FILTERS TYPE
export interface FilterCardType {
  options: CardItemsType[];
  title: string;
  defaultChecked?: string;
}

interface CardItemsType {
  label: string;
  value: string;
  name: string;
}

// FETCHING CITIES TYPE
export interface Cities {
  cities: string[];
}

// JOBS TYPE
export interface JobType {
  id: number;
  postedAt: string;
  companyName: string;
  logo: string;
  jobTitle: string;
  location: string;
  jobType: string;
  officeType: string;
  website: string | undefined;
  employeesNumber: string;
  jobDescription: string;
  responsibilities: string;
  qualifications: string;
  industry: string;
  postAuthor?: string;
}

export interface PostedJobType {
  companyName: string;
  logo: string;
  jobTitle: string;
  location: string;
  jobType: string;
  officeType: string;
  website: string | null;
  employeesNumber: string;
  jobDescription: string;
  responsibilities: string;
  qualifications: string;
  industry: string;
  postAuthor?: string;
}

export interface StoredJobsType {
  id: string;
  savedJobs: string[];
  appliedJobs: string[];
  archive: string[];
}

// QUESTIONNAIRE TYPE
export interface QuestionnaireType {
  jobType: string;
  location: string[];
  industry: string[];
  email: string;
}

// USER TYPE
export interface UserType {
  id: string;
  email?: string;
  user_metadata: UserMetaData;
}

interface UserMetaData {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}
