import Image from 'next/image';
import MessageImage from '@/public/general/messages.svg';

function MessagesPage() {
  return (
    <div className='w-full px-5 pt-5 pb-3 min-h-[28rem] flex flex-col items-center justify-center text-center'>
      <Image
        src={MessageImage}
        alt='bookmark image'
        width={250}
        className='mb-14'
        draggable={false}
      />

      <p className='text-5xl font-extrabold text-gray-500 tracking-widest mb-3'>
        No Messages Yet
      </p>

      <p className='text-lg text-gray-400 tracking-wide mb-10'>
        All your chats with other users will be displayed here.
      </p>
    </div>
  );
}

export default MessagesPage;
