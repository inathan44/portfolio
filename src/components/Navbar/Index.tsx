import CircleIcon from '../CircleIcon';
import DesktopLinks from './DesktopLinks';
import { useState } from 'react';
import MobileLinks from './MobileLinks';
import ContactButton from './ContactButton';
import MenuIcon from '../MenuIcon';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function handleClick(): void {
    if (showDropdown) setShowDropdown(false);

    const section = document.getElementById('contact');

    const sectionCoordinates = section?.getBoundingClientRect();

    if (sectionCoordinates) {
      const sectionYPosition = sectionCoordinates.top + window.scrollY - 80;

      window.scrollTo({ top: sectionYPosition, behavior: 'smooth' });
    }
  }

  return (
    <header className='sticky top-0 z-10 bg-white'>
      <nav className='flex h-16 items-center justify-between px-6'>
        <Link to={'/'}>
          <div className='flex w-28 items-center gap-1'>
            <CircleIcon color='#4791FF' size={20} />
            <h1
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className='text-2xl'
            >
              ian
            </h1>
          </div>
        </Link>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className='block md:hidden'
        >
          <MenuIcon />
        </button>
        <DesktopLinks />
        <button className='hidden md:block' onClick={handleClick}>
          <ContactButton />
        </button>
      </nav>
      <MobileLinks open={showDropdown} setOpen={setShowDropdown} />
    </header>
  );
};

export default Navbar;
