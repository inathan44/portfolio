import Skill from '../components/Skill';
import YellowBar from '../components/YellowBar';

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
      {SKILLS.map((skill: string) => (
        <>
          <Skill skill={skill} />
        </>
      ))}
    </div>
  );
};

export default Skills;
