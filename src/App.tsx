import './App.css';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Navbar from './components/Navbar/Index';

function App() {
  return (
    <div className='font-inter'>
      <Navbar />
      <Hero />
      <LogoBar />
    </div>
  );
}

export default App;
