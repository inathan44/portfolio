type NavLinkProps = {
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  elementId: string;
};

const NavLink = (props: NavLinkProps) => {
  function handleClick(): void {
    props.setOpen(false);

    const section = document.getElementById(props.elementId);

    const sectionCoordinates = section?.getBoundingClientRect();

    if (sectionCoordinates) {
      const sectionYPosition = sectionCoordinates.top + window.pageYOffset - 90;

      window.scrollTo({ behavior: 'smooth', top: sectionYPosition });
    }
  }

  return (
    <li
      className='border-b-4 border-transparent transition-all ease-in-out hover:border-mainBlue'
      onClick={() => handleClick()}
    >
      <button>{props.children}</button>
    </li>
  );
};

export default NavLink;
