import { IoMdLogOut } from 'react-icons/io';

async function SignoutButton({ logout }: { logout: () => void }) {
  return (
    <button className='py-2 px-4 rounded-md text-sm cursor-pointer text-red-600 hover:bg-red-50 transition-all flex gap-2 items-center w-full'>
      <IoMdLogOut className='text-lg text-red-600' onClick={logout} />
      Sign Out
    </button>
  );
}

export default SignoutButton;
