import { signoutAction } from '@/actions/authActions';
import { IoMdLogOut } from 'react-icons/io';

function SignoutButton() {
  return (
    <form action={signoutAction}>
      <button className='py-2 px-4 rounded-md text-sm cursor-pointer text-red-600 hover:bg-red-50 transition-all flex gap-2 items-center w-full'>
        <IoMdLogOut className='text-lg text-red-600' />
        Sign Out
      </button>
    </form>
  );
}

export default SignoutButton;
