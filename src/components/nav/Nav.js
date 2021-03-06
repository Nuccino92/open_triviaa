import "./Nav.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/open-trivia-logo.png";

const Nav = ({ setLogin, setRegister }) => {
  const user = true;
  return (
    <nav className="Nav-component">
      {user ? (
        <>
          <Link to="/">
            <img src={logo} alt="Open Trivia Logo home button" />
          </Link>
          <ul>
            <li>
              <Link role="contentinfo" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/leaderboards">Leaderboards</Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <Link to="/">
            <img src={logo} alt="Open Trivia Logo home button" />
          </Link>
          <ul>
            <li role="contentinfo" onClick={setLogin}>
              Log in
            </li>
            <li onClick={setRegister}>Register</li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Nav;
