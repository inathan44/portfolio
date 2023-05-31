import About from './About';
import Skills from './Skills';

const AboutSkills = () => {
  return (
    <div className='my-8 max-w-6xl lg:mx-auto' id='about'>
      <About />
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default AboutSkills;
