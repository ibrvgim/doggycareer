import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/solid';

function StatisticCard() {
  return (
    <div className='border-2 rounded-2xl border-gray-300 h-60 mt-12 max-w-[104rem] mx-auto flex justify-evenly items-center'>
      <div className='flex-1 flex flex-col items-center justify-center text-2xl gap-2 font-extrabold text-cyan-700 lg:text-3xl'>
        <UserGroupIcon className='size-16 text-rose-400 mb-3' />
        <span className='tracking-wider'>567 059</span>
        <span className='uppercase text-lg font-extrabold tracking-wider lg:text-xl'>
          users
        </span>
      </div>

      <div className='flex-1 flex flex-col items-center justify-center border-r-2 border-l-2 border-gray-300 text-2xl gap-2 font-extrabold text-cyan-700 lg:text-3xl'>
        <BriefcaseIcon className='size-16 text-rose-400 mb-3' />
        <span className='tracking-wider'>957 853</span>
        <span className='uppercase text-lg font-extrabold tracking-wider lg:text-xl'>
          open jobs
        </span>
      </div>

      <div className='flex-1 flex flex-col items-center justify-center text-2xl gap-2 font-extrabold text-cyan-700 lg:text-3xl'>
        <ArrowTrendingUpIcon className='size-16 text-rose-400 mb-3' />
        <span className='tracking-wider'>40 000</span>
        <span className='uppercase text-lg font-extrabold tracking-wider lg:text-xl'>
          new jobs daily
        </span>
      </div>
    </div>
  );
}

export default StatisticCard;
