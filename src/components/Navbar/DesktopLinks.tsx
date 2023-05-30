import { useState, useEffect } from 'react';
import NavLink from './NavLink';

const DesktopLinks = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  function handleScroll() {
    const windowPosition = window.scrollY;

    const aboutSection = document.getElementById('about');
    const projectSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    if (aboutSection && projectSection && contactSection) {
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
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <ul className='hidden items-center gap-10 md:flex'>
      <NavLink elementId='home' active={activeSection}>
        Home
      </NavLink>
      <NavLink elementId='about' active={activeSection}>
        About
      </NavLink>
      <NavLink elementId='projects' active={activeSection}>
        Projects
      </NavLink>
    </ul>
  );
};

export default DesktopLinks;
