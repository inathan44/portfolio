import React from 'react';

import reactLogo from '../../assets/react-logo.png';
import typescriptLogo from '../../assets/typescript-logo.png';
import javascriptLogo from '../../assets/javascript-logo.png';
import cssLogo from '../../assets/css-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import htmlLogo from '../../assets/html-logo.png';
import firebaseLogo from '../../assets/firebase-logo.png';
import supabaseLogo from '../../assets/supabase-logo.png';
import postgresLogo from '../../assets/postgres.png';
import reduxLogo from '../../assets/redux-logo.png';
import tailwindLogo from '../../assets/tailwind-logo.png';
import starIcon from '../../assets/star.png';

// import '../../App.css';

const logos: string[] = [
  reactLogo,
  typescriptLogo,
  javascriptLogo,
  tailwindLogo,
  pythonLogo,
  firebaseLogo,
  cssLogo,
  htmlLogo,
  postgresLogo,
  supabaseLogo,
  reduxLogo,
];

// const LOGOWIDTH = 32;
// const GAP = 24;
// const STARWIDTH = 16;
// const containerWidth =
// logos.length * LOGOWIDTH + logos.length * STARWIDTH + logos.length * 2 * GAP;

const LogoBar = () => {
  return (
    <div className='logo-slider flex gap-4 bg-black'>
      <div className='logo-container  items-center justify-between gap-6 py-4'>
        {logos.map((logo, idx) => (
          <React.Fragment key={idx}>
            <img className='w-8' src={logo} alt={`${logo}`} />
            <img className='w-4' src={starIcon} alt='star icon' />
          </React.Fragment>
        ))}
        {logos.map((logo, idx) => (
          <React.Fragment key={idx}>
            <img className='w-8' src={logo} alt={`${logo}`} />
            <img className='w-4' src={starIcon} alt='star icon' />
          </React.Fragment>
        ))}
        {logos.map((logo, idx) => (
          <React.Fragment key={idx}>
            <img className='w-8' src={logo} alt={`${logo}`} />
            <img className='w-4' src={starIcon} alt='star icon' />
          </React.Fragment>
        ))}
      </div>
      {/* <div className='logo-container w-full items-center justify-between py-4'>
        {logos.map((logo, idx) => (
          <>
            <img className='h-8' src={logo} alt={`${logo}`} />
            <img className='h-4' src={starIcon} alt='star icon' />
          </>
        ))}
      </div> */}
    </div>
  );
};

export default LogoBar;
