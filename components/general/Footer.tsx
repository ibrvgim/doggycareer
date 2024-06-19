import {
  additionalList,
  companyList,
  privacyList,
} from '@/data/manualData/footerData';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import AppStoreIcon from '@/public/badges/app-store-badge.svg';
import PlayStoreIcon from '@/public/badges/play-store-badge.svg';
import LogoImage from '@/public/logo.png';

interface List {
  title: string;
  link: string;
}

function Footer() {
  return (
    <footer className='bg-gradient-to-br from-rose-50 to-blue-50 min-h-96 px-16 py-12 flex flex-col lg:px-32'>
      <div className='flex-grow flex justify-between flex-wrap gap-y-10 gap-x-5'>
        <FooterList title='Company' lists={companyList} />
        <FooterList title='Other Sources' lists={additionalList} />
        <FooterList title='Privacy & Terms' lists={privacyList} />
        <SocialMedia />
      </div>

      <div className='border-t-2 border-gray-300 mt-8 flex gap-3 items-center pt-6 '>
        <Image src={LogoImage} alt='company logo' height={25} width={25} />
        <p className='text-sm text-cyan-700 font-bold tracking-widest'>
          Doggycareer GmbH &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

function FooterList({ title, lists }: { title: string; lists: List[] }) {
  return (
    <div>
      <p className='mb-6 uppercase font-extrabold text-cyan-700 text-sm tracking-widest'>
        {title}
      </p>
      <ul className='text-sm tracking-wider text-gray-500 flex flex-col items-start gap-3'>
        {lists.map((list: List) => (
          <li key={list.title} className='hover:text-cyan-700 transition-all'>
            <Link href={list.link}>{list.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialMedia() {
  return (
    <div>
      <p className='mb-6 uppercase font-extrabold text-cyan-700 text-sm tracking-widest'>
        Connections
      </p>
      <ul className='text-gray-500 flex items-center gap-5'>
        <Link
          href='https://www.instagram.com/'
          target='_blank'
          className='hover:text-red-500 transition-colors'
        >
          <FaInstagram className='text-xl' />
        </Link>

        <Link
          href='https://web.telegram.org/'
          target='_blank'
          className='hover:text-blue-500 transition-colors'
        >
          <FaTelegramPlane className='text-xl' />
        </Link>

        <Link
          href='https://x.com/home?lang=en'
          target='_blank'
          className='hover:text-blue-900 transition-colors'
        >
          <FaXTwitter className='text-xl' />
        </Link>

        <Link
          href='https://www.youtube.com/'
          target='_blank'
          className='hover:text-red-500 transition-colors'
        >
          <FaYoutube className='text-xl' />
        </Link>

        <Link
          href='https://www.linkedin.com/in/ibrahim-ismayilov-685a95287/'
          target='_blank'
          className='hover:text-blue-700 transition-colors'
        >
          <FaLinkedinIn className='text-xl' />
        </Link>
      </ul>

      <div className='flex gap-3 mt-12'>
        <Link href='https://www.apple.com/app-store/' target='_blank'>
          <Image src={AppStoreIcon} alt='app store icon' className='w-24' />
        </Link>

        <Link href='https://play.google.com/store/apps' target='_blank'>
          <Image
            src={PlayStoreIcon}
            alt='play store icon'
            className='w-[6.5rem]'
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
