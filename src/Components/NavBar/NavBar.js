import { Link, Nav, P } from "./NavBar.styled";

const NavBar = () => {
  const date = new Date();
  const normalDate = date.toLocaleDateString();

  return (
    <Nav>
      <Link to="/">base 33 </Link>
      <P>{normalDate}</P>
    </Nav>
  );
};

export default NavBar;
