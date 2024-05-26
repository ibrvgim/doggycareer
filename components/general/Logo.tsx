import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/public/logo.png';

function Logo() {
  return (
    <div>
      <Link href='/' className='flex items-center gap-5'>
        <Image
          src={LogoImage}
          alt='logo paw image'
          height={50}
          width={50}
          className='opacity-80'
        />
      </Link>
    </div>
  );
}

export default Logo;
