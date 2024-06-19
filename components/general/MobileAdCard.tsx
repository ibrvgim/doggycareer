'use client';

import Image from 'next/image';
import Link from 'next/link';
import AppStoreIcon from '@/public/badges/app-store-badge.svg';
import PlayStoreIcon from '@/public/badges/play-store-badge.svg';
import QRCodeImage from '@/public/badges/qr-code.svg';
import { useMediaQuery } from '@mui/material';

function MobileAdCard() {
  const lg = useMediaQuery('(min-width:1024px)');

  return (
    <section className='rounded-3xl min-h-[25rem] max-w-[104rem] mx-auto bg-gradient-to-r from-blue-200 via-rose-200 to-yellow-50 px-9 py-16 flex mt-36 mb-16 gap-8 justify-center xl:gap-28 xl:px-20 lg:px-14 lg:gap-16'>
      <Image
        src={QRCodeImage}
        alt='qr-code image'
        width={lg ? 250 : 200}
        height={lg ? 250 : 200}
        draggable={false}
      />

      <div>
        <p className='text-4xl font-extrabold uppercase tracking-widest text-cyan-600 leading-snug lg:text-5xl'>
          Download the <span className='text-rose-500'>app</span> and start
          looking for a <span className='text-rose-500'>job!</span>
        </p>

        <div className='flex items-center gap-5 mt-8'>
          <Link href='https://www.apple.com/app-store/' target='_blank'>
            <Image
              src={AppStoreIcon}
              alt='app store icon'
              className='w-[8rem] lg:w-[9rem]'
            />
          </Link>

          <Link href='https://play.google.com/store/apps' target='_blank'>
            <Image
              src={PlayStoreIcon}
              alt='play store icon'
              className='w-[8.7rem] lg:w-[9.7rem]'
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MobileAdCard;
