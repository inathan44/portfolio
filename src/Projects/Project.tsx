import { Link } from 'react-router-dom';

type ProjectProps = {
  name: string;
  description: string;
  link: string;
  learnMore: string;
  image: string;
  color: string;
  buttonTextBlack: boolean;
};

const Project = (props: ProjectProps) => {
  return (
    <div className='flex flex-col gap-5 rounded-3xl border bg-slate-200 pb-4 md:mx-auto md:max-w-4xl md:flex-row md:items-center md:pb-0'>
      <img
        src={props.image}
        alt={`screenshot mockups of ${props.name}`}
        className=' md:w-1/2 md:rounded'
      />
      <div className='mx-4 flex flex-col gap-2'>
        <h5 className='text-4xl font-semibold '>{props.name}</h5>
        <p className='mt-4 text-slate-800'>{props.description}</p>
        <div className='my-4 flex justify-center gap-8 text-lg'>
          <a
            className='w-32 rounded-full bg-mainBlue py-2 text-center transition-all hover:brightness-90'
            href={props.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            Site
          </a>
          <Link
            className='w-32 rounded-full bg-black py-2 text-center text-white transition-all hover:bg-slate-800'
            to={`/projects/${props.learnMore}`}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
