type NavLinkProps = {
  children: React.ReactNode;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  elementId: string;
  active: string;
};

const NavLink = (props: NavLinkProps) => {
  function handleClick(): void {
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
          props.active === props.elementId ? '#4791FF' : 'transparent',
      }}
    >
      <button>{props.children}</button>
    </li>
  );
};

export default NavLink;
