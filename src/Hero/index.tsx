import heroImage from '../assets/hero-image.png';
import ContactButton from '../components/Navbar/ContactButton';

const Hero = () => {
  return (
    <section className='bg-neutral' id='home'>
      <div className='flex flex-col items-center px-4 py-8 md:px-24 md:py-8'>
        <div className='flex flex-col gap-2 md:w-1/3 md:gap-8'>
          {/* Below img holds squiggly and title text */}
          <img
            className='mx-auto w-72'
            src={'src/assets/title-underlined.png'}
            alt='Squiggly underline'
          />
          <h2 className='text-lg text-offBlack'>
            Full stack engineer building beautiful web apps that are easy to
            use.
          </h2>
          <button className='mr-auto hidden rounded bg-mainBlue px-8 py-2 font-light text-white md:inline-block'>
            About me
          </button>
        </div>
        <div className='flex max-h-full min-h-full items-center md:h-96 md:w-2/3'>
          <img
            src={heroImage}
            alt='Code snippet with coding language logos'
            className='mx-auto ml-auto w-5/6 md:w-2/3'
          />
        </div>
        <div className='my-4 flex w-full justify-center gap-8'>
          <button className='w-28 rounded-full border border-black bg-mainBlue'>
            About me
          </button>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
