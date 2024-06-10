function JobTitleInput({
  name,
  placeholder,
  icon,
}: {
  name: string;
  placeholder: string;
  icon: JSX.Element;
}) {
  return (
    <div>
      <div className='flex items-center relative'>
        <span className='z-10 absolute left-4'>{icon}</span>
        <input
          type='text'
          name={name}
          placeholder={placeholder}
          className='h-12 w-[22rem] rounded-md pl-[3.2rem] pr-4 border-[1px] border-gray-400 shadow-lg 
          text-[15px] text-gray-700 tracking-widest font-medium placeholder:text-gray-400 placeholder:font-light'
          autoComplete='off'
        />
      </div>

      <div></div>
    </div>
  );
}

export default JobTitleInput;
