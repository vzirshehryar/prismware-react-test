import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="/Logo.png" alt="logo" />
      </div>
      <div className="links">
        <a href="">Features</a>
        <a href="">Community</a>
        <a href="">Affiliate</a>
        <a href="">API</a>
        <a href="">About</a>
      </div>
      <div>
        <button>Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
