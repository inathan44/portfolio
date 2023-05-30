import React from 'react';
import Skill from '../components/Skill';

const SKILLS = [
  'React',
  'JS',
  'Typescript',
  'HTML',
  'CSS',
  'Python',
  'Tailwind CSS',
  'Web Development',
  'Data Analytics',
];

const Skills = () => {
  return (
    <div className='mx-4 flex flex-col gap-5 bg-mainBlue px-8 py-14 text-white'>
      <h3 className='text-5xl'>Skills</h3>
      {SKILLS.map((skill: string, idx: number) => (
        <React.Fragment key={idx}>
          <Skill skill={skill} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Skills;
