import React from "react";

import "./AITools.css";

const AITools = () => {
  return (
    <div className="AITools">
      <h2>Explore Our AI tools</h2>
      <p>
        Meet the new standard for modern software development. Streamline
        issues, sprints, and product roadmaps.
      </p>
      <div className="images">
        <div>
          <img
            src="/div.elementor-background-slideshow__slide__image.png"
            alt="img"
          />
          <h5>Text to Image</h5>
          <p>Make amazing creations by only using text.</p>
        </div>
        <div>
          <img
            src="/div.elementor-background-slideshow__slide__image2.png"
            alt="img"
          />
          <h5>Text to Image</h5>
          <p>Make amazing creations by only using text.</p>
        </div>
        <div>
          <img
            src="/div.elementor-background-slideshow__slide__image2.png"
            alt="img"
          />
          <h5>Text to Image</h5>
          <p>Make amazing creations by only using text.</p>
        </div>
        {/* <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div> */}
      </div>
    </div>
  );
};

export default AITools;
