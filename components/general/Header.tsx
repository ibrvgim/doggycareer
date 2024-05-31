import { Cities } from '@/types/types';
import Navigation from './Navigation';
import SearchingSystem from './SearchingSystem';

function Header({ cities }: Cities) {
  return (
    <header className='px-16 py-8 bg-gradient-to-r from-blue-200 via-rose-200 to-violet-200 h-[28rem] rounded-br-[10rem] rounded-bl-[10rem] shadow-xl'>
      <Navigation />

      <p className='text-6xl text-center mt-28 font-extrabold tracking-widest text-cyan-700'>
        Discover Your Dream Job Today!
      </p>

      <SearchingSystem cities={cities} />
    </header>
  );
}

export default Header;
