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

// {
//   id: '52bf68fa-e96b-4551-bcd0-5ad51e6abef9',
//   aud: 'authenticated',
//   role: 'authenticated',
//   email: 'ibra@gmail.com',
//   email_confirmed_at: '2024-06-05T19:01:54.75816Z',
//   phone: '',
//   confirmed_at: '2024-06-05T19:01:54.75816Z',
//   last_sign_in_at: '2024-06-07T14:23:42.695958Z',
//   app_metadata: { provider: 'email', providers: [ 'email' ] },
//   user_metadata: {
//     email: 'ibra@gmail.com',
//     email_verified: false,
//     firstName: 'Ibrahim',
//     lastName: 'Ismayilov',
//     phoneNumber: '+17684618956',
//     phone_verified: false,
//     sub: '52bf68fa-e96b-4551-bcd0-5ad51e6abef9'
//   },
//   identities: [
//     {
//       identity_id: '41e4f4c5-bf0d-44a9-aff7-1a15f5a839a7',
//       id: '52bf68fa-e96b-4551-bcd0-5ad51e6abef9',
//       user_id: '52bf68fa-e96b-4551-bcd0-5ad51e6abef9',
//       identity_data: [Object],
//       provider: 'email',
//       last_sign_in_at: '2024-06-05T19:01:54.750686Z',
//       created_at: '2024-06-05T19:01:54.750742Z',
//       updated_at: '2024-06-05T19:01:54.750742Z',
//       email: 'ibra@gmail.com'
//     }
//   ],
//   created_at: '2024-06-05T19:01:54.729114Z',
//   updated_at: '2024-06-07T15:05:29.548473Z',
//   is_anonymous: false
// }
