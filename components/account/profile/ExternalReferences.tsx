import Link from 'next/link';
import { HiMiniPencilSquare } from 'react-icons/hi2';

function ExternalReferences({
  references,
}: {
  references: { linkedin: string; github: string };
}) {
  return (
    <div>
      <p className='text-2xl font-bold text-gray-400 tracking-widest flex items-center gap-3'>
        External References
        <Link
          href='/account/settings'
          className='hover:text-cyan-700 transition-all'
        >
          <HiMiniPencilSquare />
        </Link>
      </p>

      {references?.github || references?.linkedin ? (
        <div className='flex flex-col gap-2 mt-4 text-gray-400 font-semibold tracking-wider'>
          {references?.github && (
            <p>
              <span className='text-rose-400'>GutHub:</span>{' '}
              <Link
                href={references?.github}
                className='text-blue-500 font-normal hover:text-blue-800 transition-all'
                target='_blank'
              >
                {references?.github}
              </Link>
            </p>
          )}

          {references?.linkedin && (
            <p>
              <span className='text-rose-400'>LinkedIn:</span>{' '}
              <Link
                href={references?.linkedin}
                className='text-blue-500 font-normal hover:text-blue-800 transition-all'
                target='_blank'
              >
                {references?.linkedin}
              </Link>
            </p>
          )}
        </div>
      ) : (
        <EmptyCard />
      )}
    </div>
  );
}

function EmptyCard() {
  return (
    <div className='mt-4'>
      <p className='text-base font-semibold text-gray-400 tracking-wider'>
        No links connected to the account. Go to the{' '}
        <Link
          href='/account/settings'
          className='text-cyan-600 hover:text-cyan-800 transition-colors'
        >
          Settings
        </Link>{' '}
        and update links.
      </p>
    </div>
  );
}

export default ExternalReferences;
