import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink to="/">
        <img
          src="/src/images/logo.png"
          width="90"
          height="90"
          className="d-inline-block align-top ms-3"
          alt="Logo"
        />
      </NavLink>
      <NavLink to="/login" className="navbar-brand">
        Log in
      </NavLink>
      <NavLink to="/signup" className="navbar-brand ml-3">
        Sign up
      </NavLink>
    </nav>
  );
};

export default NavBar;
