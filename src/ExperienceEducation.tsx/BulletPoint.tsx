import CalendarIcon from './CalendarIcon';

type BulletPointProps = {
  date: string;
  title: string;
  description: string;
  color?: string;
};

const BulletPoint = ({ date, title, description, color }: BulletPointProps) => {
  return (
    <li className='mb-10 ml-4'>
      <div
        className='absolute -left-2 mt-1.5 h-4 w-4 rounded-full border border-white bg-gray-200'
        style={{
          backgroundColor: color,
        }}
      ></div>
      <div className='flex items-center gap-2'>
        <CalendarIcon />
        <time className='text-sm font-normal leading-none text-mainBlue'>
          {date}
        </time>
      </div>
      <h3 className='text-lg font-semibold text-gray-900 '>{title}</h3>
      <p className='mb-4 text-sm font-normal text-gray-500'>{description}</p>
    </li>
  );
};

export default BulletPoint;
