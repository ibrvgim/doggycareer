import { FaMinus, FaPeopleGroup } from 'react-icons/fa6';

function EmployeesInput({
  error,
  defaultValue,
}: {
  error: string;
  defaultValue?: string;
}) {
  const values = defaultValue?.split('-');

  return (
    <div>
      <label className='uppercase text-[11px] tracking-widest text-gray-500 font-semibold flex mb-2'>
        Employees Number *
        {error && (
          <span className='ml-auto text-red-500 normal-case text-xs'>
            {error.slice(0, 1).toUpperCase() + error.slice(1).toLowerCase()}
          </span>
        )}
      </label>

      <div className='flex items-center gap-3'>
        <div className='flex items-center relative'>
          <span className='absolute text-lg left-4 text-gray-400'>
            <FaPeopleGroup />
          </span>

          <input
            name='employeesMinValue'
            placeholder='min. employees'
            type='text'
            className='w-full h-10 rounded-md pl-11 text-sm tracking-wider border-[1px] text-gray-600 
            border-gray-400 placeholder:text-gray-300'
            defaultValue={values?.[0]?.trim()}
          />
        </div>

        <FaMinus className='text-gray-300 text-xl' />

        <div className='flex items-center relative'>
          <span className='absolute text-lg left-4 text-gray-400'>
            <FaPeopleGroup />
          </span>

          <input
            name='employeesMaxValue'
            placeholder='max. employees'
            className='w-full h-10 rounded-md pl-11 text-sm tracking-wider border-[1px] text-gray-600 
            border-gray-400 placeholder:text-gray-300'
            defaultValue={values?.[1]?.trim()}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeesInput;
