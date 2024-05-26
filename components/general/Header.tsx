import Navigation from './Navigation';
import SearchingSystem from './SearchingSystem';

function Header() {
  return (
    <header className='px-16 py-8 bg-gradient-to-r from-blue-200 via-rose-200 to-violet-200 h-[24rem] rounded-br-[10rem] rounded-bl-[10rem] shadow-xl'>
      <Navigation />

      <p className='text-6xl text-center mt-16 font-extrabold tracking-widest text-blue-900'>
        Discover Your Dream Job Today!
      </p>

      <SearchingSystem />
    </header>
  );
}

export default Header;
