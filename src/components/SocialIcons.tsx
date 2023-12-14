import DownloadIcon from './DownloadIcon';
import linkedInLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';
import resume from '../assets/Ian_Nathan_Resume_December.pdf';

const SocialIcons = () => {
  function openResume() {
    window.open(resume, '_blank');
  }
  return (
    <div className='flex items-center gap-4'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/ianmnathan/'
      >
        <img src={linkedInLogo} alt='LinkedIn Logo' className='h-10 w-10' />
      </a>
      <a
        href='https://github.com/inathan44'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={githubLogo} alt='LinkedIn Logo' className='h-10 w-10' />
      </a>
      <button
        onClick={openResume}
        className='my-6 flex items-center gap-3 self-start rounded-full bg-[#333] px-4 py-2 text-lg text-white'
      >
        <div>
          <p className='text-sm'> Resume</p>
        </div>
        <div className='relative'>
          <DownloadIcon />
        </div>
      </button>
    </div>
  );
};

export default SocialIcons;
