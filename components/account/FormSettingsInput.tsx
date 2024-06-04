export function Input({
  name,
  children,
  type,
  placeholder,
  label,
  disabled = false,
  defaultValue,
}: {
  children: React.ReactNode;
  name?: string;
  type: string;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className='uppercase text-[11px] tracking-widest text-gray-500 font-semibold'
      >
        {label}
      </label>

      <div className='flex items-center mt-2 relative'>
        <span className='absolute text-lg left-4 text-gray-400'>
          {children}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className='w-full h-10 rounded-md pl-12 text-sm tracking-wider border-[1px] text-gray-600 border-gray-400 disabled:text-gray-500  disabled:bg-blue-50 placeholder:text-gray-300'
          disabled={disabled}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}
