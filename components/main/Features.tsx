import FeatureCard from './FeatureCard';
import {
  MagnifyingGlassIcon,
  AtSymbolIcon,
  CursorArrowRippleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';

const featuresData = [
  {
    icon: <AcademicCapIcon className='size-20 text-rose-400 mb-5 mx-auto' />,
    title: 'Build a Solid Resume With Us',
    description:
      'By following the tips and lessons from our resume writing experts, you can learn the best ways to represent yourself.',
  },

  {
    icon: <AtSymbolIcon className='size-20 text-rose-400 mb-5 mx-auto' />,
    title: 'Get New Jobs Notifications',
    description:
      'Subscribe to email and stay updated on the latest jobs ensuring you are the first to know about new opportunities.',
  },

  {
    icon: (
      <MagnifyingGlassIcon className='size-20 text-rose-400 mb-5 mx-auto' />
    ),
    title: 'See Only Jobs That Match You',
    description:
      'Get jobs that align with your skills, and preferences, saving you time and helping you focus on the best matches.',
  },

  {
    icon: (
      <CursorArrowRippleIcon className='size-20 text-rose-400 mb-5 mx-auto' />
    ),
    title: 'Apply For a Job In One Click',
    description:
      'Save time by instantly applying to jobs with a single click, using your pre - uploaded documents and profile information. ',
  },
];

function Features() {
  return (
    <section className='mt-32'>
      <p className='text-center text-6xl font-extrabold text-cyan-700 tracking-wider'>
        Why Join Us?
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        Make your own decisions
      </p>

      <div className='grid grid-cols-1 gap-5 justify-items-center mt-12 max-w-[104rem] mx-auto xl:grid-cols-4 xl:px-0 lg:px-24 lg:grid-cols-2'>
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
