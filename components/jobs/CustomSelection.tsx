import { useRef } from 'react';

function CustomSelection({
  label,
  name,
  value,
  inputType,
}: {
  label: string;
  name: string;
  value: string;
  inputType: string;
}) {
  const inputElement = useRef<HTMLInputElement>(null);

  function handleCheck() {
    if (inputElement.current)
      inputElement.current.checked = !inputElement.current.checked;
  }

  return (
    <div className='flex gap-2 cursor-pointer'>
      <div className='flex justify-center items-center leading-none'>
        <label className='container'>
          <input
            type={inputType}
            name={name}
            value={value}
            className='peer hidden after:opacity-100'
            ref={inputElement}
          />
          <span className="inline-block w-5 h-5 border-2 relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[9px] after:h-[9px] after:bg-blue-800 after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100 rounded-md"></span>
        </label>
      </div>
      <button
        className='font-light text-blue-950 hover:text-blue-900 hover:font-medium transition-all text-[14px] tracking-wider'
        onClick={handleCheck}
        type='button'
      >
        {label}
      </button>
    </div>
  );
}

export default CustomSelection;
