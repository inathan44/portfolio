import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type NavLinkProps = {
  children: React.ReactNode;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  elementId: string;
  active: string;
};

const NavLink = (props: NavLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onHomePage = location.pathname === '/';

  function handleClick(): void {
    navigate('/');

    if (props.setOpen) props.setOpen(false);

    const section = document.getElementById(props.elementId);

    const sectionCoordinates = section?.getBoundingClientRect();

    if (sectionCoordinates) {
      const sectionYPosition = sectionCoordinates.top + window.scrollY - 80;

      window.scrollTo({ top: sectionYPosition, behavior: 'smooth' });
    }
  }

  return (
    <li
      className='border-b-4 border-transparent transition-all ease-in-out hover:border-mainBlue'
      onClick={() => handleClick()}
      style={{
        borderColor:
          props.active === props.elementId && onHomePage
            ? '#4791FF'
            : 'transparent',
      }}
    >
      <button>{props.children}</button>
    </li>
  );
};

export default NavLink;
