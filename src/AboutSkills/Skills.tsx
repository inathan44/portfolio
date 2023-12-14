import React from 'react';
import Skill from './Skill';

const SKILLS = [
  'React',
  'JS',
  'Typescript',
  'SQL',
  'AWS',
  'Node',
  'HTML',
  'CSS',
  'Python',
  'Tailwind CSS',
  'Web Development',
  'Express',
];

const Skills = () => {
  return (
    <div className='mx-4 flex flex-col gap-5 bg-mainBlue px-8 py-14 text-white'>
      <h3 className='text-5xl'>Skills</h3>
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
        {SKILLS.map((skill: string, idx: number) => (
          <React.Fragment key={idx}>
            <Skill skill={skill} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skills;
