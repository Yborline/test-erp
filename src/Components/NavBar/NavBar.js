import dateNow from "../../helpers/dateNow";
import { Link, Nav, P } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">base 33 </Link>
      <P>{dateNow()}</P>
    </Nav>
  );
};

export default NavBar;
