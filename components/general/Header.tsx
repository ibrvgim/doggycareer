import { Cities } from '@/types/types';
import Navigation from './Navigation';
import SearchingSystem from './SearchingSystem';
import { getIndustries } from '@/data/getIndustries';

async function Header({ cities }: { cities: Cities }) {
  const industries = await getIndustries();

  return (
    <header
      className='px-8 pt-8 pb-20 bg-gradient-to-r from-blue-200 via-rose-200 to-violet-200 min-h-[28rem]  
     shadow-xl lg:rounded-br-[10rem] lg:rounded-bl-[10rem] sm:px-16'
    >
      <Navigation />

      <p className='text-6xl text-center mt-28 font-extrabold tracking-widest text-cyan-700 leading-snug'>
        Discover Your Dream Job Today!
      </p>

      <SearchingSystem cities={cities} industries={industries} />
    </header>
  );
}

export default Header;
