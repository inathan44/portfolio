import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Details, Technologies } from '../../types';
import { projectInfo } from './information';
import { ProjectInfo } from '../../types';

const ProjectDetails = () => {
  const { projectName } = useParams();
  const currentProject: Details = projectInfo[projectName as keyof ProjectInfo];

  const [expandAbout, setExpandAbout] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className=' mx-auto max-w-xl md:mx-0 md:mx-12 md:max-w-none'>
      <h1 className='my-6 text-center text-3xl font-bold underline'>
        {currentProject.name}
      </h1>
      <div className='mx-4 flex flex-col items-center gap-6 md:mx-auto md:w-full md:flex-row md:items-start md:justify-center'>
        <div className='max-w-sm md:w-full md:max-w-none'>
          <img
            className='max-w-sm md:mx-auto'
            src={currentProject.image}
            alt={`picture of ${projectName} website`}
          />
          <div className=''>
            <div className='my-4 flex justify-center gap-8 text-lg'>
              <a
                className='w-32 rounded-full bg-mainBlue py-2 text-center transition-all hover:brightness-90'
                href={currentProject.links.site}
                target='_blank'
                rel='noopener noreferrer'
              >
                Site
              </a>
              <a
                className='w-32 rounded-full bg-black py-2 text-center text-white transition-all hover:bg-slate-800'
                href={currentProject.links.repo}
                target='_blank'
                rel='noopener noreferrer'
              >
                Repo
              </a>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <h2 className='text-center text-2xl font-semibold md:mt-0'>
            About Project
          </h2>
          <p className='md:hidden'>
            {expandAbout
              ? currentProject.about
              : currentProject.about.slice(0, 200) + '...'}
            {` `}
            <button
              onClick={() => setExpandAbout((prev) => !prev)}
              className='text-mainBlue underline'
            >
              {expandAbout ? 'Show less' : 'Read More'}
            </button>
          </p>
          <p className='hidden md:block'>{currentProject.about}</p>
        </div>
      </div>
      <div>
        <h3 className='text-center text-2xl md:mt-10'>Tech Stack</h3>
        <div className='mx-4 mb-8 flex flex-col gap-5 px-8 py-6'>
          <div className='mx-auto grid grid-cols-2 gap-4 md:grid md:grid-cols-2 md:grid-cols-4 lg:grid-cols-3'>
            {currentProject.technologies.map(
              (tech: Technologies, idx: number) => (
                <React.Fragment key={idx}>
                  <div className='flex h-24 w-24 flex-col items-center justify-center gap-3 rounded-xl border shadow-sm md:h-32 md:w-32'>
                    <p className='text-center font-bold'>{tech.name}</p>
                    <img className='w-12' src={tech.image} alt='' />
                  </div>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
