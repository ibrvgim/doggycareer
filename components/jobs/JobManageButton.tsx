function JobManageButton({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <button
      className={`border-2 rounded-full text-blue-900 tracking-wider min-w-72 py-[2px] px-4 font-bold ${style} transition-all`}
    >
      {children}
    </button>
  );
}

export default JobManageButton;
