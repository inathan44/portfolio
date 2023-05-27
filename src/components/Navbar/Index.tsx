import CircleIcon from '../CircleIcon';
import DesktopLinks from './DesktopLinks';
import menuIcon from '../../assets/menu.svg';
import { useState } from 'react';
import MobileLinks from './MobileLinks';
import ContactButton from './ContactButton';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <header>
      <nav className='flex h-16 items-center justify-between px-6'>
        <div className='flex w-28 items-center gap-1'>
          <CircleIcon color='#4791FF' size={20} />
          <h1 className='text-2xl'>ian</h1>
        </div>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className='block md:hidden'
        >
          <img className='w-8' src={menuIcon} alt='Three bar menu icon' />
        </button>
        <DesktopLinks />
        <div className='hidden md:block'>
          <ContactButton />
        </div>
      </nav>
      <MobileLinks open={showDropdown} />
    </header>
  );
};

export default Navbar;
