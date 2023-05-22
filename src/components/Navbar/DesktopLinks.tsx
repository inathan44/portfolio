import ContactButton from './ContactButton';

const DesktopLinks = () => {
  return (
    <ul className='hidden items-center gap-10 md:flex'>
      <li className='border-b-4 border-transparent hover:border-mainBlue'>
        <button>Home</button>
      </li>
      <li className='border-b-4 border-transparent hover:border-mainBlue'>
        <button>About</button>
      </li>
      <li className='border-b-4 border-transparent hover:border-mainBlue'>
        <button>Projects</button>
      </li>
      <li className='border-b-4 border-transparent'>
        <ContactButton />
      </li>
    </ul>
  );
};

export default DesktopLinks;
