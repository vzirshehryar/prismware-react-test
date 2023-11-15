import React from "react";

import "./header.css";
const Header = () => {
  return (
    <div className="headers">
      <h1>
        Generate your ideas into <i>stunning</i> visuals
      </h1>
      <p className="descrption">
        Meet the new standard for modern software development. Streamline
        issues, sprints, and product roadmaps.
      </p>
      <input className="email" type="" placeholder="Enter your Email" />
      <button>Joint the waitlist</button>
    </div>
  );
};

export default Header;
