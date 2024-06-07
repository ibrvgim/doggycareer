'use client';

function SaveButton({
  children,
  style,
  handleSaveJob,
}: {
  children: React.ReactNode;
  style?: string;
  handleSaveJob: () => void;
}) {
  return (
    <button
      className={`border-[1.5px] rounded-full text-blue-900 tracking-wider min-w-72 py-1 px-4 font-bold ${style} transition-all`}
      onClick={handleSaveJob}
    >
      {children}
    </button>
  );
}

export default SaveButton;
