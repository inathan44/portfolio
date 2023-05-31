import { useState, useEffect } from 'react';
import ContactButton from './ContactButton';
import NavLink from './NavLink';

type MobileLinksProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const projectSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');

const MobileLinks = (props: MobileLinksProps) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleScroll = () => {
    const windowPosition = window.scrollY;

    if (homeSection && aboutSection && projectSection && contactSection) {
      const aboutSectionPosition =
        aboutSection?.getBoundingClientRect().top + windowPosition - 90;

      const projectSectionPosition =
        projectSection?.getBoundingClientRect().top + windowPosition - 90;

      const contactSectionPosition =
        contactSection?.getBoundingClientRect().top + windowPosition - 90;

      if (windowPosition > contactSectionPosition) {
        setActiveSection('contact');
      } else if (windowPosition > projectSectionPosition) {
        setActiveSection('projects');
      } else if (windowPosition > aboutSectionPosition) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='absolute z-50 w-full bg-white md:hidden'>
      <ul
        className={`flex ${
          props.open ? 'h-[calc(70vh)] pt-24' : 'h-0'
        } flex-col items-center gap-6 overflow-hidden font-semibold transition-all`}
      >
        <NavLink
          setOpen={props.setOpen}
          elementId='home'
          active={activeSection}
        >
          Home
        </NavLink>
        <NavLink
          setOpen={props.setOpen}
          elementId='about'
          active={activeSection}
        >
          About
        </NavLink>
        <NavLink
          setOpen={props.setOpen}
          elementId='projects'
          active={activeSection}
        >
          Projects
        </NavLink>
        <NavLink
          setOpen={props.setOpen}
          elementId='contact'
          active={activeSection}
        >
          <ContactButton />
        </NavLink>
      </ul>
    </nav>
  );
};

export default MobileLinks;
