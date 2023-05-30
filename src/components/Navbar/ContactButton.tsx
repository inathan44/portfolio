import CircleIcon from '../CircleIcon';
import RightArrowIcon from './RightArrowIcon';

const ContactButton = () => {
  return (
    <div className='flex items-center justify-between gap-2 rounded-full border border-offBlack bg-slate-100 py-1 pl-4 pr-1'>
      <p>Contact</p>
      <div className='relative'>
        <CircleIcon size={25} color='black' />
        <RightArrowIcon />
      </div>
    </div>
  );
};

export default ContactButton;
