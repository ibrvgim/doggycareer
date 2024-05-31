import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/solid';

function StatisticCard() {
  return (
    <div className='border-[1.7px] rounded-2xl border-gray-300 h-60 mt-12 max-w-[104rem] mx-auto flex justify-evenly items-center'>
      <div className='flex flex-col items-center justify-center text-3xl gap-2 font-bold text-cyan-600'>
        <UserGroupIcon className='size-16 text-rose-400 mb-3' />
        <span className='tracking-wider'>567 059</span>
        <span className='uppercase text-xl font-extrabold tracking-wider'>
          users
        </span>
      </div>

      <div className='flex flex-col items-center justify-center border-r-2 border-l-2 px-[10%] border-gray-300 text-3xl gap-2 font-bold text-cyan-600'>
        <BriefcaseIcon className='size-16 text-rose-400 mb-3' />
        <span className='tracking-wider'>957 853</span>
        <span className='uppercase text-xl font-extrabold tracking-wider'>
          open jobs
        </span>
      </div>

      <div className='flex flex-col items-center justify-center text-3xl gap-2 font-bold text-cyan-600'>
        <ArrowTrendingUpIcon className='size-16 text-rose-400 mb-3' />
        <span className='tracking-wider'>up to 40 000</span>
        <span className='uppercase text-xl font-extrabold tracking-wider'>
          new jobs daily
        </span>
      </div>
    </div>
  );
}

export default StatisticCard;
