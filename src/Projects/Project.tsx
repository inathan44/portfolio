type ProjectProps = {
  name: string;
  description: string;
  link: string;
  repo: string;
  image: string;
  color: string;
  buttonTextBlack: boolean;
};

const Project = (props: ProjectProps) => {
  return (
    <div className='flex flex-col gap-5 rounded-3xl border bg-slate-200 pb-4'>
      <img src={props.image} alt={`screenshot mockups of ${props.name}`} />
      <div className='mx-4 flex flex-col gap-2'>
        <h5 className='text-4xl font-semibold '>{props.name}</h5>
        <p className='mt-4 text-slate-800'>{props.description}</p>
        <div className='my-4 flex justify-center gap-8 text-lg'>
          <a
            className='w-32 rounded-full bg-mainBlue py-2 text-center'
            href={props.link}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              backgroundColor: props.color,
              color: props.buttonTextBlack ? 'black' : 'white',
            }}
          >
            Site
          </a>
          <a
            className='w-32 rounded-full bg-black py-2 text-center text-white'
            href={props.repo}
            target='_blank'
            rel='noopener noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
