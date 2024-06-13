'use client';

import { PiBuildingsFill } from 'react-icons/pi';
import { IoLink, IoImagesOutline } from 'react-icons/io5';
import { CiTextAlignCenter } from 'react-icons/ci';
import { Cities, ErrorsType, JobType } from '@/types/types';
import JobRegionSelect from './JobRegionSelect';
import { Input } from '../general/Input';
import Select from '../general/Select';
import TextArea from '../general/TextArea';
import { useFormState } from 'react-dom';
import { postJobAction } from '@/actions/postJobAction';
import EmployeesInput from './EmployeesInput';
import { Button, OutlineButton } from '../general/Buttons';
import JobIndustrySelect from './JobIndustrySelect';
import { industries } from '@/data/manualData/industriesData';

function PostJobForm({
  cities,
  edit = false,
  defaultValues,
  jobId,
}: {
  cities: Cities;
  edit?: boolean;
  defaultValues?: JobType;
  jobId?: string;
}) {
  const [state, formAction] = useFormState(postJobAction, {});

  return (
    <form action={formAction}>
      {jobId && (
        <input name='jobId' value={jobId} className='hidden' hidden readOnly />
      )}
      <p className='mb-6 font-bold text-gray-500 text-2xl tracking-wider'>
        Company Information
      </p>
      <CompanyInformation
        cities={cities}
        state={state}
        edit={edit}
        defaultValues={defaultValues}
      />

      <p className='mb-6 font-bold text-gray-500 text-2xl tracking-wider mt-14'>
        Job Information
      </p>
      <JobInformation
        state={state}
        edit={edit}
        defaultValues={defaultValues}
        industries={industries}
      />

      <div className='flex gap-2 justify-end mt-8'>
        <OutlineButton>Cancel</OutlineButton>
        <Button>{edit ? 'Edit a Job' : 'Post a Job'}</Button>
      </div>
    </form>
  );
}

function CompanyInformation({
  cities,
  state,
  edit,
  defaultValues,
}: {
  cities: Cities;
  state?: ErrorsType;
  edit?: boolean;
  defaultValues?: JobType;
}) {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
      <Input
        name='companyName'
        type='text'
        placeholder='ex. Doggycareer'
        label='Company Name *'
        error={state?.companyName ? state.companyName : ''}
        defaultValue={edit ? defaultValues?.companyName : ''}
      >
        <PiBuildingsFill />
      </Input>

      <Input
        name='website'
        type='text'
        placeholder='ex. https://doggycareer.de'
        label='Company Website'
        defaultValue={edit ? defaultValues?.website : ''}
      >
        <IoLink />
      </Input>

      <Input
        name='logo'
        type='text'
        placeholder='ex. https://doggycareer/4789466.svg/'
        label='Company Logo *'
        error={state?.logo ? state.logo : ''}
        defaultValue={edit ? defaultValues?.logo : ''}
      >
        <IoImagesOutline />
      </Input>

      <JobRegionSelect
        name='location'
        cities={cities}
        error={state?.location ? state.location : ''}
        defaultValue={edit ? defaultValues?.location : ''}
      />

      <EmployeesInput
        error={state?.employeesNumber ? state.employeesNumber : ''}
        defaultValue={edit ? defaultValues?.employeesNumber : ''}
      />
    </div>
  );
}

function JobInformation({
  state,
  edit,
  defaultValues,
  industries,
}: {
  state: ErrorsType;
  edit?: boolean;
  defaultValues?: JobType;
  industries: string[];
}) {
  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
        <Input
          name='jobTitle'
          type='text'
          placeholder='ex. Senior Front - End Developer'
          label='Job Title *'
          error={state?.jobTitle ? state.jobTitle : ''}
          defaultValue={edit ? defaultValues?.jobTitle : ''}
        >
          <CiTextAlignCenter />
        </Input>

        <Select
          name='jobType'
          label='Job Type *'
          options={['Full time', 'Part time']}
          defaultValue={edit ? defaultValues?.jobType : ''}
        />

        <Select
          name='officeType'
          label='Office Type *'
          options={['On Site', 'Remote', 'Hybrid']}
          defaultValue={edit ? defaultValues?.officeType : ''}
        />

        <JobIndustrySelect
          name='industry'
          defaultValue={edit ? defaultValues?.industry : ''}
          error={state?.industry ? state.industry : ''}
          industries={industries}
        />
      </div>

      <div className='mt-12'>
        <TextArea
          label='About the Job *'
          name='jobDescription'
          size='20rem'
          placeholder='Tell us about your company and the job you are posting.'
          error={state?.jobDescription ? state.jobDescription : ''}
          defaultValue={edit ? defaultValues?.jobDescription : ''}
        />
      </div>

      <div className='mt-8'>
        <TextArea
          label='About Job Responsibilities *'
          name='responsibilities'
          size='14rem'
          placeholder='Describe the responsibilities that a person should do.'
          error={state?.responsibilities ? state.responsibilities : ''}
          defaultValue={edit ? defaultValues?.responsibilities : ''}
        />
      </div>

      <div className='mt-8'>
        <TextArea
          label='About Job Qualifications *'
          name='qualifications'
          size='14rem'
          placeholder='Describe the qualifications that a candidate should have.'
          error={state?.qualifications ? state.qualifications : ''}
          defaultValue={edit ? defaultValues?.qualifications : ''}
        />
      </div>
    </div>
  );
}

export default PostJobForm;
