'use client';

import { Button, OutlineButton } from '@/components/account/FormSettingsButton';
import { PiBuildingsFill } from 'react-icons/pi';
import { IoLink, IoImagesOutline } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { CiTextAlignCenter } from 'react-icons/ci';
import { BsPersonWorkspace } from 'react-icons/bs';
import { Cities, ErrorsType } from '@/types/types';
import JobRegionSelect from './JobRegionSelect';
import { Input } from '../general/Input';
import Select from '../general/Select';
import TextArea from '../general/TextArea';
import { useFormState } from 'react-dom';
import { postJobAction } from '@/actions/postJobAction';

function PostJobForm({ cities }: { cities: Cities }) {
  const [state, formAction] = useFormState(postJobAction, {});

  return (
    <form action={formAction}>
      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider'>
        Company Information
      </p>
      <CompanyInformation cities={cities} state={state || {}} />

      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider mt-14'>
        Job Information
      </p>
      <JobInformation state={state || {}} />

      <div className='flex gap-2 justify-end mt-8'>
        <OutlineButton>Cancel</OutlineButton>
        <Button>Post a Job</Button>
      </div>
    </form>
  );
}

function CompanyInformation({
  cities,
  state,
}: {
  cities: Cities;
  state: ErrorsType;
}) {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
      <Input
        name='companyName'
        type='text'
        placeholder='ex. Doggycareer'
        label='Company Name *'
        error={state?.companyName ? state.companyName : ''}
      >
        <PiBuildingsFill />
      </Input>

      <Input
        name='website'
        type='text'
        placeholder='ex. https://doggycareer.de'
        label='Company Website'
      >
        <IoLink />
      </Input>

      <Input
        name='logo'
        type='text'
        placeholder='ex. https://doggycareer/4789466.svg/'
        label='Company Logo *'
        error={state?.logo ? state.logo : ''}
      >
        <IoImagesOutline />
      </Input>

      <JobRegionSelect
        name='location'
        cities={cities}
        error={state?.location ? state.location : ''}
      />

      <Input
        name='employeesNumber'
        type='text'
        placeholder='ex. 5.000 - 10.000'
        label='Employees Number *'
        error={state?.employeesNumber ? state.employeesNumber : ''}
      >
        <FaPeopleGroup />
      </Input>
    </div>
  );
}

function JobInformation({ state }: { state: ErrorsType }) {
  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
        <Input
          name='jobTitle'
          type='text'
          placeholder='ex. Senior Front - End Developer'
          label='Job Title *'
          error={state?.jobTitle ? state.jobTitle : ''}
        >
          <CiTextAlignCenter />
        </Input>

        <Select
          name='jobType'
          label='Job Type *'
          options={['Full time', 'Part time']}
        />

        <Select
          name='officeType'
          label='Office Type *'
          options={['On Site', 'Remote', 'Hybrid']}
        />

        <Input
          name='industry'
          type='text'
          placeholder='ex. Information Technology'
          label='Job Industry *'
          error={state?.industry ? state.industry : ''}
        >
          <BsPersonWorkspace />
        </Input>
      </div>

      <div className='mt-12'>
        <TextArea
          label='About the Job *'
          name='jobDescription'
          size='20rem'
          placeholder='Tell us about your company and the job you are posting.'
          error={state?.jobDescription ? state.jobDescription : ''}
        />
      </div>

      <div className='mt-8'>
        <TextArea
          label='About Job Responsibilities *'
          name='responsibilities'
          size='14rem'
          placeholder='Describe the responsibilities that a person should do.'
          error={state?.responsibilities ? state.responsibilities : ''}
        />
      </div>

      <div className='mt-8'>
        <TextArea
          label='About Job Qualifications *'
          name='qualifications'
          size='14rem'
          placeholder='Describe the qualifications that a candidate should have.'
          error={state?.qualifications ? state.qualifications : ''}
        />
      </div>
    </div>
  );
}

export default PostJobForm;
