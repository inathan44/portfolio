import AboutSkills from './AboutSkills';
import './App.css';
import Contact from './Contact/index.tsx';
import EducationExperience from './ExperienceEducation.tsx';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import LogoBar from './components/LogoBar';
import Navbar from './components/Navbar/Index';

function App() {
  return (
    <div className='font-inter'>
      <Navbar />
      <Hero />
      <LogoBar />
      <AboutSkills />
      <Projects />
      <EducationExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
