import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary navbar-fixed-top ">
      <div className="colorControl container-fluid d-flex justify-content-between align-items-center ">
        {/* <a
          className="navbar-brand"
          href="https://github.com/WebDevSiblings/Sell-Your-Books"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/images/logo.png"
            alt="Logo"
            width="240"
            height="192"
            className="d-inline-block align-text-top"
          />
        </a> */}

        <h3 className="navbar-brand">Log in</h3>
        <h3 className="navbar-brand">Sign up</h3>
      </div>
    </nav>
  );
};

export default NavBar;
