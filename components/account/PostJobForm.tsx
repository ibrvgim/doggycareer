'use client';

import { Button, OutlineButton } from '@/components/account/FormSettingsButton';
import { PiBuildingsFill } from 'react-icons/pi';
import { IoLink } from 'react-icons/io5';
import { IoImagesOutline } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdOutlineSubtitles, MdConnectWithoutContact } from 'react-icons/md';
import { IoIosTimer } from 'react-icons/io';
import { Cities } from '@/types/types';
import JobRegionSelect from './JobRegionSelect';
import { Input } from '../general/Input';

function PostJobForm({ cities }: Cities) {
  return (
    <form>
      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider'>
        Company Information
      </p>
      <CompanyInformation cities={cities} />

      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider mt-14'>
        Job Information
      </p>
      <JobInformation />

      <div className='flex gap-2 justify-end mt-8'>
        <OutlineButton>Cancel</OutlineButton>
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}

function CompanyInformation({ cities }: Cities) {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
      <Input
        name='companyName'
        type='text'
        placeholder='ex. Doggycareer'
        label='Company Name *'
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
      >
        <IoImagesOutline />
      </Input>

      <JobRegionSelect name='location' cities={cities} />

      <Input
        name='employeesNumber'
        type='text'
        placeholder='ex. 5.000 - 10.000'
        label='Employees Number *'
      >
        <FaPeopleGroup />
      </Input>
    </div>
  );
}

function JobInformation() {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
      <Input
        name='jobTitle'
        type='text'
        placeholder='ex. Senior Front - End Developer'
        label='Job Title *'
      >
        <MdOutlineSubtitles />
      </Input>

      <Input
        name='jobType'
        type='text'
        placeholder='ex. Full time'
        label='Job Type *'
      >
        <IoIosTimer />
      </Input>

      <Input
        name='officeType'
        type='text'
        placeholder='ex. Remote'
        label='Office Type *'
      >
        <MdConnectWithoutContact />
      </Input>

      <Input
        name='industry'
        type='text'
        placeholder='ex. Information Technology'
        label='Job Industry *'
      >
        <FaPeopleGroup />
      </Input>
    </div>
  );
}

export default PostJobForm;
