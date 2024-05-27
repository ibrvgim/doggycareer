function ProgressBar() {
  return (
    <div>
      <div className='rounded-full h-2 bg-blue-200 overflow-hidden'>
        <div className='bg-rose-500 h-full w-1/4 rounded-full'>&nbsp;</div>
      </div>
      <p className='text-gray-500 font-extrabold mt-3 float-right'>1 / 4</p>
    </div>
  );
}

export default ProgressBar;
