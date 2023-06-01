import AboutSkills from './AboutSkills';
import './App.css';
import Contact from './Contact/index.tsx';
import EducationExperience from './ExperienceEducation/index.tsx';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import LogoBar from './components/LogoBar';
import Navbar from './components/Navbar/Index';
import ProjectDetails from './Projects/Details/ProjectDetails.tsx';
import { Route, Routes } from 'react-router-dom';
// import ScrollArrows from './components/ScrollArrows.tsx';

function App() {
  return (
    <div className='font-inter'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <LogoBar />
              <div className='mx-auto max-w-sm sm:max-w-lg md:max-w-none'>
                <AboutSkills />
                <Projects />
                <EducationExperience />
              </div>
              <Contact />
            </>
          }
        />
        <Route path='/projects/:projectName' element={<ProjectDetails />} />
      </Routes>
      <Footer />
      {/* <ScrollArrows /> */}
    </div>
  );
}

export default App;
