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
    title: 'Build a Solid Resume',
    description:
      'By following the tips and lessons from our resume writing experts, you can learn the best ways to represent yourself.',
  },

  {
    icon: <AtSymbolIcon className='size-20 text-rose-400 mb-5 mx-auto' />,
    title: 'Get Notifications About New Jobs',
    description:
      'Subscribe to email notifications and stay updated on the latest jobs ensuring you are the first to know about new opportunities.',
  },

  {
    icon: (
      <MagnifyingGlassIcon className='size-20 text-rose-400 mb-5 mx-auto' />
    ),
    title: 'See Only Jobs That Match You',
    description:
      'Get jobs that align with your skills, experience, and preferences, saving you time and helping you focus on the best matches.',
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
    <div>
      <p className='text-center text-6xl font-extrabold text-blue-900 tracking-wider mt-32'>
        Why Join Us?
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        Make your own decisions
      </p>

      <div className='flex gap-5 justify-center mt-12'>
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
