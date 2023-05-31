import AboutSkills from './AboutSkills';
import './App.css';
import Contact from './Contact/index.tsx';
import EducationExperience from './ExperienceEducation/index.tsx';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import LogoBar from './components/LogoBar';
import Navbar from './components/Navbar/Index';
// import ScrollArrows from './components/ScrollArrows.tsx';

function App() {
  return (
    <div className='font-inter'>
      <Navbar />
      <Hero />
      <LogoBar />
      <div className='mx-auto max-w-sm sm:max-w-lg md:max-w-none'>
        <AboutSkills />
        <Projects />
        <EducationExperience />
      </div>
      <Contact />
      <Footer />
      {/* <ScrollArrows /> */}
    </div>
  );
}

export default App;
