import CircleIcon from './circleIcon';
import arrow from '../assets/arrow.svg';

const ContactButton = () => {
  return (
    <div className='flex items-center justify-between gap-2 rounded-full bg-slate-100 py-1 pl-4 pr-1'>
      <p>Contact</p>
      <div className='relative'>
        <CircleIcon size={25} color='black' />
        <img
          src={arrow}
          alt='arrow icon'
          className='absolute left-1/2 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </div>
  );
};

export default ContactButton;
