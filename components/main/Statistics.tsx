import StatisticCard from './StatisticCard';

function Statistics() {
  return (
    <section className='mt-20'>
      <p className='text-center text-6xl font-extrabold text-cyan-700 tracking-widest'>
        Analytics Dashboard
      </p>
      <p className='text-center text-gray-400 uppercase mt-5 tracking-widest font-semibold'>
        All our statistics are on the surface
      </p>

      <StatisticCard />
    </section>
  );
}

export default Statistics;
