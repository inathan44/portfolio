import quickTypeImage from '../../assets/typing-ss copy.png';
import plantsImage from '../../assets/plants-combined copy.png';
import lunchImage from '../../assets/lunchbuddy copy.png';
import reactLogo from '../../assets/react-logo.png';
import nivoLogo from '../../assets/nivo-logo.png';
import reduxLogo from '../../assets/redux-logo.png';
import tailwindLogo from '../../assets/tailwind-logo.png';
import supabaseLogo from '../../assets/supabase-logo.png';
import nodeLogo from '../../assets/node-logo.png';
import expressLogo from '../../assets/express-logo.png';
import stripeLogo from '../../assets/stripe-logo.png';
import sequelizeLogo from '../../assets/sequelize-logo.png';
import postgresLogo from '../../assets/postgres.png';
import mapsLogo from '../../assets/maps-logo.png';
import yelpLogo from '../../assets/yelp-logo.png';

import { ProjectInfo } from '../../types';

export const projectInfo: ProjectInfo = {
  quicktype: {
    image: quickTypeImage,
    about: `
    Quick Type is a website designed to enhance typing skills and increase typing speeds. This project stemmed from my love for doing typing tests on other websites, which motivated me to create my own platform. With a minimalist design, Quick Type offers a user-friendly interface equipped with leaderboards, test charts, and access to previous scores for signed-in users. Working on this project introduced me to Supabase, a backend-as-a-service tool, as well as Nivo Charts, a charting tool. While learning Supabase presented its challenges, it quickly became one of my favorite platforms to use due to its utilization of a SQL database (unlike my initial intention of using Firebase) and its seamless authentication capabilities without the need for complex backend code. I am immensely proud of this project, and it has become a part of my daily routine (earning me the top spot on the leaderboards!).`,
    links: {
      site: 'https://quick-type.netlify.app',
      repo: 'https://github.com/Andrew-org-TM/Quick-Type',
    },
    technologies: [
      { name: 'React', image: reactLogo },
      { name: 'Supabase', image: supabaseLogo },
      { name: 'Redux', image: reduxLogo },
      { name: 'Tailwind CSS', image: tailwindLogo },
      { name: 'Nivo Charts', image: nivoLogo },
    ],
    name: 'Quick Type',
  },
  plantsco: {
    image: plantsImage,
    about: `Plants & Co is a plant e-commerce site crafted by a dedicated team of four. As our very first collaborative project, it was an exciting adventure for all of us, especially given its scale and complexity. After weeks of work, we were able to unveil a project that was beautifully designed. The site comes equipped with stripe integration for checkout (demonstration only) as well as login functionality to personalize the experience. This was the first project in which I made it responsive for all screen sizes which was a fun challenge to overcome. Learning to handle git with a team and building a backend from scratch made this project invaluable experience for our team!`,
    links: {
      site: 'https://plants-and.co',
      repo: 'https://github.com/inathan44/plants-and-co',
    },
    technologies: [
      { name: 'React', image: reactLogo },
      { name: 'Express', image: expressLogo },
      { name: 'Node', image: nodeLogo },
      { name: 'Redux', image: reduxLogo },
      { name: 'Tailwind CSS', image: tailwindLogo },
      { name: 'Stripe', image: stripeLogo },
      { name: 'Sequelize', image: sequelizeLogo },
      { name: 'postgres SQL', image: postgresLogo },
    ],
    name: 'Plants & Co',
  },
  lunchbuddy: {
    image: lunchImage,
    about: `
    Lunch Buddy is a group project aimed at connecting individuals for socializing and networking over lunch. The site allows you to find people in your area, discover restaurants based on preferences, and chat through the platform. Integrating the Google Maps and Yelp Fusion API was new for us, but provided a great opportunity to work with a new, powerful API that we hadn't done in the past. Working with 3rd party APIs proved to be challenging but unlocks so many possibilites to add to a project. This fullstack project experience taught us so much about mixing 1st and 3rd party APIs, keeping location data safe, and building a platform from the ground up!`,
    links: {
      site: 'https://lunch-buddy.netlify.app',
      repo: 'https://github.com/inathan44/Lunch-Buddy',
    },
    technologies: [
      { name: 'React', image: reactLogo },
      { name: 'Express', image: expressLogo },
      { name: 'Node', image: nodeLogo },
      { name: 'Redux', image: reduxLogo },
      { name: 'Tailwind CSS', image: tailwindLogo },
      { name: 'Maps API', image: mapsLogo },
      { name: 'Yelp API', image: yelpLogo },
      { name: 'Sequelize', image: sequelizeLogo },
      { name: 'postgres SQL', image: postgresLogo },
    ],
    name: 'Lunch Buddy',
  },
};
