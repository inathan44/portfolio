import SocialIcons from '../components/SocialIcons';

const Footer = () => {
  return (
    <footer className=' bg-neutralpt-12'>
      <div className='px-6'>
        <div className='flex items-center gap-4'>
          <img
            src='src/assets/headshot.JPG'
            alt='Photo of Ian'
            className='mt-8 aspect-square w-28 rounded-full object-cover'
          />
          <div>
            <p className='text-xl font-bold'>Ian Nathan</p>
            <p className='font-medium'>Full stack engineer</p>
          </div>
        </div>
        <p className='my-8 text-2xl font-bold'>Get in touch</p>
        <p className='text-sm'>Email me</p>
        <p className='inline-block border-b border-black'>
          inathan44@yahoo.com
        </p>
        <SocialIcons />
      </div>
      <div className='border-t-4 border-slate-800 py-4 text-center text-xs'>
        <p>&copy; {new Date().getFullYear()} Ian Nathan</p>
      </div>
    </footer>
  );
};

export default Footer;
