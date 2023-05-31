import ContactButton from '../components/Navbar/ContactButton';

const Hero = () => {
  function handleClick(elementId: string): void {
    const section = document.getElementById(elementId);

    const sectionCoordinates = section?.getBoundingClientRect();

    if (sectionCoordinates) {
      const sectionYPosition = sectionCoordinates.top + window.scrollY - 90;

      window.scrollTo({ behavior: 'smooth', top: sectionYPosition });
    }
  }

  return (
    <section className='bg-neutral' id='home'>
      <div className='mx-auto flex max-w-md flex-col items-center px-4 py-8 md:max-w-2xl md:flex-row'>
        <div className='flex flex-col gap-2 md:w-1/2'>
          {/* Below img holds squiggly and title text */}
          <img
            className='w-84 mx-auto'
            src={'src/assets/title-underlined.png'}
            alt='Squiggly underline'
          />
          <h2 className='text-lg text-offBlack'>
            Full stack engineer building beautiful web apps that are easy to
            use.
          </h2>
        </div>

        <img
          src={'src/assets/hero-image.png'}
          alt='Code snippet with coding language logos'
          className='mx-auto ml-auto w-5/6 md:w-1/2'
        />
      </div>
      <div className='flex w-full justify-center gap-8 py-4'>
        <button
          className='w-28 rounded-full border border-black bg-mainBlue'
          onClick={() => handleClick('about')}
        >
          About me
        </button>
        <div onClick={() => handleClick('contact')}>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
