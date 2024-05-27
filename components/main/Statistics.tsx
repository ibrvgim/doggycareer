import StatisticCard from './StatisticCard';

function Statistics() {
  return (
    <div>
      <p className='text-center text-6xl font-extrabold text-blue-900 tracking-widest mt-32'>
        Analytics Dashboard
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        Statistics data enabling users to track performance
      </p>

      <StatisticCard />
    </div>
  );
}

export default Statistics;
