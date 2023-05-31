import React from 'react';

const logos: string[] = [
  'src/assets/react-logo.png',
  'src/assets/typescript-logo.png',
  'src/assets/JavaScript-logo.png',
  'src/assets/tailwind-logo.png',
  'src/assets/python-logo.png',
  'src/assets/firebase-logo.png',
  'src/assets/css-logo.png',
  'src/assets/html-logo.png',
  'src/assets/postgres.png',
  'src/assets/supabase-logo.png',
  'src/assets/redux-logo.png',
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
            <img className='w-4' src={'src/assets/star.png'} alt='star icon' />
          </React.Fragment>
        ))}
        {logos.map((logo, idx) => (
          <React.Fragment key={idx}>
            <img className='w-8' src={logo} alt={`${logo}`} />
            <img className='w-4' src={'src/assets/star.png'} alt='star icon' />
          </React.Fragment>
        ))}
        {logos.map((logo, idx) => (
          <React.Fragment key={idx}>
            <img className='w-8' src={logo} alt={`${logo}`} />
            <img className='w-4' src={'src/assets/star.png'} alt='star icon' />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
