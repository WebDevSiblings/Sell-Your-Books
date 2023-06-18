import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary navbar-fixed-top ">
      <div className="colorControl container-fluid d-flex justify-content-between align-items-center ">
        <NavLink to="/login" className="navbar-brand">
          Log in
        </NavLink>
        <NavLink to="/signup" className="navbar-brand">
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
