import ContactButton from '../components/Navbar/ContactButton';
import heroImage from '../assets/hero-image.png';
import nameImage from '../assets/title-underlined.png';

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
      <div className='mx-auto flex max-w-md flex-col items-center px-4 py-8 md:max-w-2xl md:flex-row md:justify-center md:gap-12'>
        <div className='flex flex-col gap-2 md:w-1/2'>
          {/* Below img holds squiggly and title text */}
          <img className='mx-auto' src={nameImage} alt='Squiggly underline' />
          <h2 className='text-center text-lg text-offBlack'>
            Full stack software engineer
          </h2>
        </div>

        <div className='md:w-1/2'>
          <img
            src={heroImage}
            alt='Code snippet with coding language logos'
            className='mx-auto ml-auto w-5/6 md:w-full'
          />
        </div>
      </div>
      <div className='flex w-full justify-center gap-8 py-4'>
        <button
          className='w-28 rounded-full border border-black bg-mainBlue transition-all hover:brightness-90'
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
