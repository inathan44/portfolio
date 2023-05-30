import ContactButton from './ContactButton';
import NavLink from './NavLink';

type MobileLinksProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileLinks = (props: MobileLinksProps) => {
  return (
    <nav className='absolute z-50 w-full bg-white md:hidden'>
      <ul
        className={`flex ${
          props.open ? 'h-[calc(70vh)] pt-24' : 'h-0'
        } flex-col items-center gap-6 overflow-hidden font-semibold transition-all`}
      >
        <NavLink setOpen={props.setOpen} elementId='home'>
          Home
        </NavLink>
        <NavLink setOpen={props.setOpen} elementId='about'>
          About
        </NavLink>
        <NavLink setOpen={props.setOpen} elementId='projects'>
          Projects
        </NavLink>
        <NavLink setOpen={props.setOpen} elementId='contact'>
          <ContactButton />
        </NavLink>
      </ul>
    </nav>
  );
};

export default MobileLinks;
