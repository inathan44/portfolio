import Project from './Project';

const Projects = () => {
  return (
    <div className='mx-4 flex flex-col gap-6'>
      <h4 className='mt-10 text-3xl font-semibold '>Projects</h4>
      <Project
        name='Quick Type'
        description='Typing site to improve speed, track progress over time, and climb leaderboards.'
        link='https://quick-type.netlify.app'
        repo='https://github.com/Andrew-org-TM/Quick-Type'
        image='src/assets/typing-ss copy.png'
        color='#059669'
        buttonTextBlack={false}
      />
      <Project
        name='Plants&Co'
        description='E-commerce store with elegant design and Stripe integration (Demonstration only).'
        link='https://plants-and.co'
        repo='https://github.com/inathan44/plants-and-co'
        image='src/assets/plants-combined copy.png'
        color='#14332D'
        buttonTextBlack={false}
      />
      <Project
        name='Lunch Buddy'
        description='E-commerce store with elegant design and Stripe integration (Demonstration only).'
        link='https://lunch-buddy.netlify.app/'
        repo='https://github.com/inathan44/Lunch-Buddy'
        image='src/assets/lunchbuddy copy.png'
        color='#F68080'
        buttonTextBlack={false}
      />
    </div>
  );
};

export default Projects;
