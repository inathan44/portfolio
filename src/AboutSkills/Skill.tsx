import YellowBar from '../components/YellowBar';

type SkillProps = { skill: string; image?: string };

const Skill = ({ skill, image }: SkillProps) => {
  return (
    <div className='flex'>
      <div className='flex grow flex-col gap-1'>
        <p className='text'>{skill}</p>
        {<YellowBar />}
      </div>
      {image && <img className='w-1/2' src={image} alt='technology logo' />}
    </div>
  );
};

export default Skill;
