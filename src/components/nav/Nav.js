import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const user = false;
  return (
    <nav className="Nav">
      {user ? (
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
