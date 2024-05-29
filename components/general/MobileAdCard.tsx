import Image from 'next/image';
import Link from 'next/link';
import AppStoreIcon from '@/public/badges/app-store-badge.svg';
import PlayStoreIcon from '@/public/badges/play-store-badge.svg';
import QRCodeImage from '@/public/badges/qr-code.svg';

function MobileAdCard() {
  return (
    <section className='rounded-3xl min-h-[25rem] max-w-[104rem] mx-auto bg-gradient-to-r from-blue-200 via-rose-200 to-yellow-50 px-24 pt-16 pb-10 flex mt-36 gap-32 justify-center'>
      <Image
        src={QRCodeImage}
        alt='qr-code image'
        width={250}
        height={250}
        draggable={false}
      />

      <div>
        <p className='text-5xl font-extrabold uppercase tracking-widest text-blue-900 leading-snug'>
          Download the <span className='text-rose-500'>app</span> and start
          looking for a <span className='text-rose-500'>job!</span>
        </p>

        <div className='flex items-center gap-5 mt-8'>
          <Link href='https://www.apple.com/app-store/' target='_blank'>
            <Image src={AppStoreIcon} alt='app store icon' className='w-36' />
          </Link>

          <Link href='https://play.google.com/store/apps' target='_blank'>
            <Image
              src={PlayStoreIcon}
              alt='play store icon'
              className='w-[9.7rem]'
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MobileAdCard;
