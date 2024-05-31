import Navigation from './Navigation';

function SecondaryHeader() {
  return (
    // className='px-16 py-8 bg-gradient-to-r from-blue-200 via-rose-200 to-violet-200 shadow-lg'
    <header className='px-16 py-8 border-b-2 border-b-gray-300'>
      <Navigation />
    </header>
  );
}

export default SecondaryHeader;
