import ContactButton from './ContactButton';

const MobileLinks = () => {
  return (
    <nav className='md:hidden'>
      <ul className='flex h-[calc(70vh)] flex-col items-center justify-center gap-6 font-semibold'>
        <li className='border-b-4 border-transparent hover:border-mainBlue'>
          <button>Home</button>
        </li>
        <li className='border-b-4 border-transparent hover:border-mainBlue'>
          <button>About</button>
        </li>
        <li className='border-b-4 border-transparent hover:border-mainBlue'>
          <button>Projects</button>
        </li>
        <li className='border-b-4 border-transparent font-normal'>
          <ContactButton />
        </li>
      </ul>
    </nav>
  );
};

export default MobileLinks;
