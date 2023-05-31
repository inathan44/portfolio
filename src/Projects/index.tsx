import Project from './Project';
import quickTypeImage from '../assets/typing-ss copy.png';
import plantsImage from '../assets/plants-combined copy.png';
import lunchImage from '../assets/lunchbuddy copy.png';

const Projects = () => {
  return (
    <div
      className='mx-4 flex flex-col gap-6 sm:mx-auto sm:max-w-md md:max-w-none md:px-8'
      id='projects'
    >
      <h4 className='mt-10 text-3xl font-semibold md:text-center md:text-4xl'>
        Projects
      </h4>
      <Project
        name='Quick Type'
        description='Typing site to improve speed, track progress over time, and climb leaderboards.'
        link='https://quick-type.netlify.app'
        repo='https://github.com/Andrew-org-TM/Quick-Type'
        image={quickTypeImage}
        color='#059669'
        buttonTextBlack={false}
      />
      <Project
        name='Plants&Co'
        description='E-commerce store with elegant design and Stripe integration (Demonstration only).'
        link='https://plants-and.co'
        repo='https://github.com/inathan44/plants-and-co'
        image={plantsImage}
        color='#14332D'
        buttonTextBlack={false}
      />
      <Project
        name='Lunch Buddy'
        description='A platform to foster new connections and empowering people to connect, network, and socialize.'
        link='https://lunch-buddy.netlify.app/'
        repo='https://github.com/inathan44/Lunch-Buddy'
        image={lunchImage}
        color='#F68080'
        buttonTextBlack={false}
      />
    </div>
  );
};

export default Projects;
