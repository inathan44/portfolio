import Project from './Project';
import quickTypeImage from '../assets/typing-ss copy.png';
import plantsImage from '../assets/plants-combined copy.png';
import grizzImage from '../assets/DashboardScreenshot.png';

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
        name='Grizz'
        description='Lead generation SaaS platform to expedite sales prospecting through refined job listing searches, cutting prospecting process by over 90%'
        link='https://getgrizz.com/'
        image={grizzImage}
        color='#F68080'
        buttonTextBlack={false}
      />
      <Project
        name='Quick Type'
        description='Typing site to improve speed, track progress over time, and climb leaderboards.'
        link='https://quick-type.netlify.app'
        learnMore='quicktype'
        image={quickTypeImage}
        color='#059669'
        buttonTextBlack={false}
      />
      <Project
        name='Plants&Co'
        description='E-commerce store with elegant design and Stripe integration (Demonstration only).'
        link='https://plants-and.co'
        learnMore='plantsco'
        image={plantsImage}
        color='#14332D'
        buttonTextBlack={false}
      />
    </div>
  );
};

export default Projects;
