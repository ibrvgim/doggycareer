import { IoSettingsSharp } from 'react-icons/io5';
import { FaPenToSquare } from 'react-icons/fa6';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import SignoutButton from '../authentication/SignoutButton';
import NavTab from './NavTab';

function ProfileNavigationMenu() {
  return (
    <div className='border-[1.7px] border-gray-300 px-5 min-w-72 pt-5 pb-3 rounded-xl'>
      <div className='flex flex-col gap-2 tracking-[0.07rem] font-medium text-gray-700'>
        <p className='pb-3 px-2 mb-2 border-b-2 border-b-gray-200 font-semibold text-gray-600'>
          My Account
        </p>

        <NavTab
          href='/account/profile'
          icon={<FaRegUserCircle className='text-[16px] text-gray-600' />}
        >
          Profile
        </NavTab>

        <NavTab
          href='/account/post-job'
          icon={<FaPenToSquare className='text-[16px] text-gray-600' />}
        >
          Post a Job
        </NavTab>

        <NavTab
          href='/account/messages'
          icon={
            <BiSolidMessageSquareDetail className='text-[16px] text-gray-600' />
          }
        >
          Messages
        </NavTab>

        <NavTab
          href='/account/settings'
          icon={<IoSettingsSharp className='text-lg text-gray-600' />}
        >
          Settings
        </NavTab>

        <div className='pt-2 mt-2 border-t-2 border-t-gray-200'>
          <SignoutButton />
        </div>
      </div>
    </div>
  );
}

export default ProfileNavigationMenu;
