import CircleIcon from '../CircleIcon';
import DesktopLinks from './DesktopLinks';
import { useState } from 'react';
import MobileLinks from './MobileLinks';
import ContactButton from './ContactButton';
import MenuIcon from '../MenuIcon';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <header className='sticky top-0 z-10 bg-white'>
      <nav className='flex h-16 items-center justify-between px-6'>
        <div className='flex w-28 items-center gap-1'>
          <CircleIcon color='#4791FF' size={20} />
          <h1 className='text-2xl'>ian</h1>
        </div>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className='block md:hidden'
        >
          <MenuIcon />
        </button>
        <DesktopLinks />
        <div className='hidden md:block'>
          <ContactButton />
        </div>
      </nav>
      <MobileLinks open={showDropdown} setOpen={setShowDropdown} />
    </header>
  );
};

export default Navbar;
