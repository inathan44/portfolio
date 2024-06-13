import BulletPoint from './BulletPoint';

const EducationExperience = () => {
  return (
    <section className='' id='experience'>
      <div className='mx-6 mt-16'>
        <h4 className='my-8 text-3xl font-bold md:text-center'>
          Education & <span className='text-mainBlue'>Experience</span>
        </h4>
        <div className='flex justify-center'>
          <ol className='relative mx-auto border-l border-gray-200'>
            <BulletPoint
              date='May - Jun 2024'
              description='Frontend Developer (Contract)'
              color='#4791FF'
              title='Attend ai'
              href='https://www.useattend.ai/'
            />
            <BulletPoint
              date='2023'
              description='AWS Certified Cloud Practitioner'
              title='Amazon Web Services (AWS)'
            />
            <BulletPoint
              date='2023 - Present'
              description='Technical Services'
              title='Regent Education'
              href='https://www.regenteducation.com/'
            />
            <BulletPoint
              date='2023 - Present'
              description='Software Developer'
              title='Grizz'
              href='https://www.getgrizz.com/'
            />
            <BulletPoint
              date='2023'
              title='Fullstack Academy'
              description='Fullstack Web Development Bootcamp'
            />

            <BulletPoint
              date='2018 - 2023'
              title='Starbucks'
              description='Supervisor, Trainer'
            />
            <BulletPoint
              date='2020 - 2023'
              title='Excel Consultant'
              description='Spreadsheet Automation, VBA/Macro Scripts'
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
