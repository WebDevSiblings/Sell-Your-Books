import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary navbar-fixed-top ">
      <div className="colorControl container-fluid d-flex justify-content-between align-items-center ">
        <h3 className="navbar-brand">Log in</h3>
        <h3 className="navbar-brand">Sign up</h3>
      </div>
    </nav>
  );
};

export default NavBar;
