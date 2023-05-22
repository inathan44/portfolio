import ContactButton from './ContactButton';
import CircleIcon from './circleIcon';

const Navbar = () => {
  return (
    <header>
      <nav className='flex h-16 items-center justify-between px-12'>
        <div className='flex items-center gap-1'>
          <CircleIcon color='#4791FF' size={20} />
          <h1 className='text-2xl'>ian</h1>
        </div>
        <ul className='flex items-center gap-10'>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <ContactButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
