import { useEffect, useState } from 'react';

import CircleIcon from './CircleIcon';

const ScrollArrows = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [sectionCoordinates, setSectionCoordinates] = useState<number[]>([]);

  useEffect(() => {
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

      setSectionCoordinates([
        0,
        aboutSectionPosition,
        projectSectionPosition,
        contactSectionPosition,
      ]);
    }
  }, []);

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

      //   setSectionCoordinates([
      //     0,
      //     aboutSectionPosition,
      //     projectSectionPosition,
      //     contactSectionPosition,
      //   ]);

      if (windowPosition > contactSectionPosition) {
        setActiveSection(3);
      } else if (windowPosition > projectSectionPosition) {
        setActiveSection(2);
      } else if (windowPosition > aboutSectionPosition) {
        setActiveSection(1);
      } else {
        setActiveSection(0);
      }
    }
  }

  function handleScrollUp() {
    setActiveSection((prev) => {
      console.log(Math.max(prev - 1, 0));
      return Math.max(prev - 1, 0);
    });
    console.log('scrollUp');
  }

  function handleScrollDown() {
    setActiveSection((prev) => {
      console.log(
        'scroll min:',
        Math.min(prev + 1, sectionCoordinates.length - 1)
      );
      return Math.min(prev + 1, sectionCoordinates.length - 1);
    });
    console.log('scrollDown');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log('activeSection', activeSection);

    window.scrollTo({
      behavior: 'smooth',
      top: sectionCoordinates[activeSection],
    });
  }, [activeSection, sectionCoordinates]);

  return (
    <div className='fixed bottom-0 right-0 flex flex-col gap-4 text-red-300'>
      <div onClick={handleScrollUp}>
        <CircleIcon size={30} color='red' />
      </div>
      <div onClick={handleScrollDown}>
        <CircleIcon size={30} color='red' />
      </div>
    </div>
  );
};

export default ScrollArrows;
