const Hero = () => {
  return (
    <section>
      <div className='flex items-center py-8 pl-16'>
        <div className='flex w-1/3 flex-col gap-8'>
          <h1 className='text-5xl font-bold'>
            Hi, I'm <span className='text-mainBlue'>Ian.</span>
          </h1>
          <h2 className='text-2xl text-gray-700'>
            Full stack engineer building beautiful web apps that are easy to
            use.
          </h2>
          <button className='mr-auto inline-block rounded bg-mainBlue px-8 py-2 font-light text-white'>
            About me
          </button>
        </div>
        <div className='h-96 max-h-full min-h-full w-2/3'></div>
      </div>
    </section>
  );
};

export default Hero;
