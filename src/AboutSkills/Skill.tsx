import YellowBar from '../components/YellowBar';

type SkillProps = { skill: string };

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className='flex flex-col gap-1 '>
      <p className='text'>{skill}</p>
      <YellowBar />
    </div>
  );
};

export default Skill;
