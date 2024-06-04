export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className='border-[1px] border-cyan-600 bg-cyan-600 text-white px-6 py-2 rounded-md 
      hover:bg-cyan-700 hover:border-cyan-700 transition-all tracking-wide text-sm font-semibold'
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type='reset'
      className='border-[1px] border-cyan-600 text-cyan-600 bg-transparent px-6 py-2 rounded-md 
    hover:text-cyan-700 hover:border-cyan-700 transition-all tracking-wide text-sm font-semibold'
    >
      {children}
    </button>
  );
}
