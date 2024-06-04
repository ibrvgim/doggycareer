import Image, { StaticImageData } from 'next/image';
import OutStoryImage from '@/public/about-page-images/our-story.jpg';
import WhoWeImage from '@/public/about-page-images/who-we.jpg';
import HowWorksImage from '@/public/about-page-images/how-works.jpg';
import Footer from '@/components/general/Footer';

export const metadata = {
  title: 'About',
  description:
    'When people are searching for a job, we want the obvious choice to be doggycareer',
};

function AboutUsPage() {
  return (
    <div>
      <section className='px-32 py-24 grid grid-cols-[1fr_1fr] gap-20 gap-y-40 max-w-[105rem] mx-auto items-center justify-items-center'>
        <DescriptionCard title='Our Story'>
          In 2019, four university friends crammed into a small studio in
          Berlin, Germany and started building doggycareer. They were united by
          a passion to help people, an insatiable appetite for building better
          tech. Today, those same forces unite hundreds of talents from
          different countries, serving over millions of daily users around the
          globe.
        </DescriptionCard>
        <ImageCard image={OutStoryImage} />

        <ImageCard image={WhoWeImage} />
        <DescriptionCard title='Who we are'>
          We&apos;re a team of creative and growth-minded entrepreneurs from all
          over the world united in Berlin to build a search engine that is fast,
          intuitive and unbiased. Some of us write code, others write blogs, but
          we all have the same purpose – to empower millions of users and
          partners to get more out of their lives!
        </DescriptionCard>

        <DescriptionCard title='How It Works'>
          Our metasearch engine helps you find your ideal job in just a few
          simple clicks. You start your search with your interest field, city,
          narrow it down with our clever filters, compare jobs, and then find
          and apply the one that suits you best on website.
        </DescriptionCard>
        <ImageCard image={HowWorksImage} />
      </section>
      <Footer />
    </div>
  );
}

function DescriptionCard({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='max-w-[35rem]'>
      <p className='text-5xl font-extrabold text-cyan-700 opacity-80 tracking-wider mb-8'>
        {title}
      </p>
      <p className='text-justify tracking-wide leading-loose text-gray-600'>
        {children}
      </p>
    </div>
  );
}

function ImageCard({ image }: { image: StaticImageData }) {
  return (
    <div className='max-h-96 max-w-[30rem] overflow-hidden rounded-xl'>
      <Image
        src={image}
        alt='story part image'
        className='max-h-96 max-w-[30rem] object-cover'
        draggable={false}
      />
    </div>
  );
}

export default AboutUsPage;
