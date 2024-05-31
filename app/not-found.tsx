import Footer from '@/components/general/Footer';
import SecondaryHeader from '@/components/general/SecondaryHeader';
import NotFoundImage from '@/public/general/not-found.svg';
import Image from 'next/image';
import Link from 'next/link';

function PageNotFound() {
  return (
    <div>
      <SecondaryHeader />

      <section className='flex flex-col gap-20 items-center justify-center px-32 py-28'>
        <Image
          src={NotFoundImage}
          alt='page not found'
          width={350}
          draggable={false}
        />

        <div className='text-center flex-1'>
          <p className='text-4xl uppercase tracking-widest text-gray-600 font-extrabold mb-10'>
            Sorry. Page not found!
          </p>
          <Link
            href='/'
            className='border-[1px] border-cyan-600 px-8 py-2 rounded-md text-cyan-600 hover:text-cyan-900 hover:border-cyan-900 transition-all'
          >
            Go Back Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PageNotFound;
