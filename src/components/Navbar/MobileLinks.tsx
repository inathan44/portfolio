import ContactButton from './ContactButton';
import NavLink from './NavLink';

type MobileLinksProps = {
  open: boolean;
};

const MobileLinks = (props: MobileLinksProps) => {
  return (
    <nav className='absolute w-full bg-white md:hidden'>
      <ul
        className={`flex ${
          props.open ? 'h-[calc(70vh)] pt-24' : 'h-0'
        } flex-col items-center gap-6 overflow-hidden font-semibold transition-all`}
      >
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>
          <ContactButton />
        </NavLink>
      </ul>
    </nav>
  );
};

export default MobileLinks;
