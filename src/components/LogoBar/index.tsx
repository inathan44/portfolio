import React from 'react';

import reactLogo from '../../assets/react-logo.png';
import typescriptLogo from '../../assets/typescript-logo.png';
import javascriptLogo from '../../assets/JavaScript-logo.png';
import cssLogo from '../../assets/css-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import htmlLogo from '../../assets/html-logo.png';
import firebaseLogo from '../../assets/firebase-logo.png';
import supabaseLogo from '../../assets/supabase-logo.png';
import postgresLogo from '../../assets/postgres.png';
import reduxLogo from '../../assets/redux-logo.png';
import tailwindLogo from '../../assets/tailwind-logo.png';
import starIcon from '../../assets/star.png';
import aws from '../../assets/aws.png';
import csharp from '../../assets/csharp.png';
import { cn } from '../../lib/utils';

// import '../../App.css';

const logos: { logo: string; className: string }[] = [
  { logo: reactLogo, className: 'w-8' },
  { logo: typescriptLogo, className: 'w-8' },
  { logo: javascriptLogo, className: 'w-8' },
  { logo: tailwindLogo, className: 'w-8' },
  { logo: pythonLogo, className: 'w-8' },
  { logo: firebaseLogo, className: 'w-8' },
  { logo: cssLogo, className: 'w-8' },
  { logo: htmlLogo, className: 'w-8' },
  { logo: postgresLogo, className: 'w-8' },
  { logo: supabaseLogo, className: 'w-8' },
  { logo: reduxLogo, className: 'w-8' },
  { logo: aws, className: 'w-10' },
  { logo: csharp, className: 'w-8' },
];

// const LOGOWIDTH = 32;
// const GAP = 24;
// const STARWIDTH = 16;
// const containerWidth =
// logos.length * LOGOWIDTH + logos.length * STARWIDTH + logos.length * 2 * GAP;

const LogoBar = () => {
  return (
    <div className='logo-slider flex gap-4 border-y border-[#DDDDDD] bg-white'>
      <div className='logo-container items-center justify-between gap-6 py-4'>
        {Array.from({ length: 3 }, () => logos)
          .flat()
          .map((logo, idx) => (
            <React.Fragment key={idx}>
              <img
                className={cn('w-8', logo.className)}
                src={logo.logo}
                alt={`${logo.logo}`}
              />
              <img className='w-4' src={starIcon} alt='star icon' />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default LogoBar;
