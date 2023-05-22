type NavLinkProps = {
  children: React.ReactNode;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <li className='border-b-4 border-transparent transition-all ease-in-out hover:border-mainBlue'>
      <button>{props.children}</button>
    </li>
  );
};

export default NavLink;
