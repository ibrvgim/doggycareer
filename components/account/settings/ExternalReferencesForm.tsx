'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Input } from '../../general/Input';
import { Button, OutlineButton } from '../../general/Buttons';
import { useFormState } from 'react-dom';
import { externalReferencesAction } from '@/actions/settingsAction';

function ExternalReferencesForm({
  references,
}: {
  references: { linkedin: string; github: string };
}) {
  const [state, formAction] = useFormState(externalReferencesAction, {});

  return (
    <form action={formAction}>
      <p className='mb-6 font-bold text-gray-500 text-3xl tracking-wider'>
        Update External References
      </p>

      <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
        <Input
          name='linkedin'
          type='text'
          placeholder='ex. www.linkedin.com/685a95287'
          label='LinkedIn'
          error={state?.linkedin ? state?.linkedin : ''}
          defaultValue={references.linkedin}
        >
          <FaLinkedin />
        </Input>

        <Input
          name='github'
          type='text'
          placeholder='ex. https://github.com/ibrvgim'
          label='GitHub'
          error={state?.github ? state?.github : ''}
          defaultValue={references.github}
        >
          <FaGithub />
        </Input>
      </div>

      <div className='flex gap-2 justify-end mt-8'>
        <OutlineButton>Cancel</OutlineButton>
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}

export default ExternalReferencesForm;
