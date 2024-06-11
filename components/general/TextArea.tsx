import { PiPencilLine } from 'react-icons/pi';

function TextArea({
  label,
  name,
  size,
  placeholder,
  error,
  defaultValue,
}: {
  label: string;
  name: string;
  size: string;
  placeholder: string;
  error?: string;
  defaultValue?: string;
}) {
  return (
    <div className='w-full'>
      <label
        htmlFor={name}
        className='tracking-widest text-xs uppercase text-gray-500 flex flex-wrap items-center gap-2 mb-4'
      >
        <PiPencilLine className='text-xl text-gray-400' />
        {label}
        {error && (
          <span className='ml-auto text-red-500 normal-case text-sm'>
            {error.slice(0, 1).toUpperCase() + error.slice(1).toLowerCase()}
          </span>
        )}
      </label>
      <textarea
        name={name}
        id={name}
        className='w-full rounded-md text-[15px] px-4 py-3 tracking-wide border-[1px] text-gray-600 
        border-gray-400 placeholder:text-gray-300'
        placeholder={placeholder}
        style={{ minHeight: `${size}` }}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
}

export default TextArea;
