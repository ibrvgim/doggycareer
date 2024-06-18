import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/public/logo.png';

function Logo() {
  return (
    <div>
      <Link
        href='/'
        className='flex gap-5 items-center text-2xl uppercase font-extrabold tracking-widest text-cyan-700'
      >
        <Image
          src={LogoImage}
          alt='logo paw image'
          height={50}
          width={50}
          className='opacity-80'
        />
        <span className='hidden md:inline-block'>Doggycareer</span>
      </Link>
    </div>
  );
}

export default Logo;
