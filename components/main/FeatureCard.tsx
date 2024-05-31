function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className='border-[1.7px] rounded-2xl border-gray-300 px-7 py-10 max-w-[25rem] flex flex-col flex-1'>
      <div className='flex-grow'>
        {icon}
        <p className='text-center mb-6 text-cyan-600 font-bold text-2xl tracking-wider'>
          {title}
        </p>
      </div>
      <p className='text-gray-500 text-center'>{description}</p>
    </div>
  );
}

export default FeatureCard;
