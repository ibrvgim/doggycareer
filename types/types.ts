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
  cities: {
    cities: string[];
  };
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
  website: string | null;
  employeesNumber: string;
  jobDescription: string;
  responsibilities: string;
  qualifications: string;
  industry: string;
}
