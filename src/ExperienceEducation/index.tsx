import BulletPoint from './BulletPoint';

const EducationExperience = () => {
  return (
    <section className=''>
      <div className='mx-6 mt-16'>
        <h4 className='my-8 text-3xl font-bold md:text-center'>
          Education & <span className='text-mainBlue'>Experience</span>
        </h4>
        <div className='flex justify-center'>
          <ol className='relative mx-auto border-l border-gray-200'>
            <BulletPoint
              date='2023'
              title='Fullstack Academy'
              description='Fullstack Web Development Bootcamp'
              color='#4791FF'
            />

            <BulletPoint
              date='2020 - Present'
              title='Excel Consultant'
              description='Spreadsheet Automation, VBA/Macro Scripts'
            />
            <BulletPoint
              date='2018 - Present'
              title='Starbucks'
              description='Supervisor, Trainer'
            />
            <BulletPoint
              date='2021'
              description='Bachelors Degree in Information Systems'
              title='University of Maryland'
            />
            <BulletPoint
              date='2019-2021'
              title='Square Poseidon'
              description='Owner, E-commerce Business'
            />
            <BulletPoint
              date='2019'
              title='DrinkMore Water'
              description='Intern'
            />
            <BulletPoint
              date='2019'
              title='Montgomery College'
              description='Associates Degree in Business Administration'
            />
          </ol>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
