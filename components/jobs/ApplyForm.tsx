'use client';

import { ErrorsType, UserType } from '@/types/types';
import {
  MdOutlineDriveFileRenameOutline,
  MdEmail,
  MdLocalPhone,
  MdDateRange,
} from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { GrCircleInformation } from 'react-icons/gr';
import { IoDocument } from 'react-icons/io5';
import { Input } from '../general/Input';
import FileInput from './FileInput';
import { Button, OutlineButton } from '../general/Buttons';
import { useFormState } from 'react-dom';
import { applyFormAction } from '@/actions/applyFormAction';

function ApplyForm({ user, jobId }: { user: UserType; jobId: string }) {
  const [state, formAction] = useFormState(applyFormAction, {});

  return (
    <form className='mt-20' action={formAction}>
      <input name='jobId' value={jobId} hidden className='hidden' readOnly />
      <p className='font-semibold text-2xl mb-6 text-rose-400 tracking-wider'>
        Files Attachment *
      </p>
      <FilesAttachment />

      <p className='font-semibold text-2xl mb-6 mt-14 text-rose-400 tracking-wider'>
        Personal Information *
      </p>
      <PersonalInformation user={user} state={state} />

      <p className='font-semibold text-2xl mb-6 mt-14 text-rose-400 tracking-wider'>
        Other References
      </p>
      <OtherReferences state={state} />

      <p className='font-semibold text-2xl mb-6 mt-14 text-rose-400 tracking-wider'>
        Additional Information
      </p>
      <AdditionalInformation state={state} />

      <div className='flex gap-3 justify-end mt-14'>
        <OutlineButton>Cancel</OutlineButton>
        <Button>Submit Application</Button>
      </div>
    </form>
  );
}

function FilesAttachment() {
  return (
    <div className='flex gap-3'>
      <FileInput label='Resume' name='resume' bgColor='#0891b2' />
      <FileInput label='Cover Letter' name='coverLetter' bgColor='#0891b2' />
      <FileInput
        label='Other Document'
        name='additionalFile'
        bgColor='#0891b2'
      />
    </div>
  );
}

function PersonalInformation({
  user,
  state,
}: {
  user: UserType;
  state: ErrorsType | undefined;
}) {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-7'>
      <Input
        name='firstName'
        type='text'
        placeholder='ex. Alex'
        label='First Name'
        defaultValue={user?.user_metadata.firstName}
        error={state?.firstName ? state?.firstName : ''}
      >
        <MdOutlineDriveFileRenameOutline />
      </Input>

      <Input
        name='lastName'
        type='text'
        placeholder='ex. Alex'
        label='Last Name'
        defaultValue={user?.user_metadata.lastName}
        error={state?.lastName ? state?.lastName : ''}
      >
        <MdOutlineDriveFileRenameOutline />
      </Input>

      <Input
        name='email'
        type='text'
        placeholder='ex. alex.johnson@gmail.com'
        label='Email Address'
        defaultValue={user?.user_metadata.email}
        error={state?.email ? state?.email : ''}
      >
        <MdEmail />
      </Input>

      <Input
        name='phoneNumber'
        type='text'
        placeholder='ex. +49 176 846 18 956'
        label='Phone Number'
        defaultValue={user?.user_metadata.phoneNumber}
        error={state?.phoneNumber ? state?.phoneNumber : ''}
      >
        <MdLocalPhone />
      </Input>
    </div>
  );
}

function OtherReferences({ state }: { state: ErrorsType | undefined }) {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-7'>
      <Input
        name='linkedIn'
        type='text'
        placeholder='ex. www.linkedin.com/685a95287'
        label='LinkedIn'
        error={state?.linkedIn ? state?.linkedIn : ''}
      >
        <FaLinkedin />
      </Input>

      <Input
        name='github'
        type='text'
        placeholder='ex. https://github.com/ibrvgim'
        label='GitHub'
        error={state?.github ? state?.github : ''}
      >
        <FaGithub />
      </Input>
    </div>
  );
}

function AdditionalInformation({ state }: { state: ErrorsType | undefined }) {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-7'>
      <Input
        name='salary'
        type='text'
        placeholder='Gross Per Year'
        label='What are your salary expectations? *'
        error={state?.salary ? state?.salary : ''}
      >
        <GiReceiveMoney />
      </Input>

      <Input
        name='startDate'
        type='text'
        placeholder='DD.MM.YYYY'
        label='When are you able to start? *'
        error={state?.startDate ? state?.startDate : ''}
      >
        <MdDateRange />
      </Input>

      <Input
        name='workPermission'
        type='text'
        placeholder='ex. Yes, I do'
        label='Do you have a work permit in Germany? *'
        error={state?.workPermission ? state?.workPermission : ''}
      >
        <IoDocument />
      </Input>

      <Input
        name='addInfo'
        type='text'
        placeholder='Something related to disability etc.'
        label='Any information we should know about?'
      >
        <GrCircleInformation />
      </Input>
    </div>
  );
}

export default ApplyForm;
