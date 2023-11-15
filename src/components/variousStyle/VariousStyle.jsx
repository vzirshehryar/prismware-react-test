import React from "react";

import "./variousStyle.css";

const VariousStyle = () => {
  return (
    <div className="variousStyle">
      <h2>AI Images in Various Style</h2>
      <div className="bar">
        <p>Photo</p>
        <div>
          <p>Realistic</p>
        </div>
        <p>Anime</p>
        <p>Cartoon</p>
        <p>Artistic</p>
      </div>
      <div className="images">
        <img src="/various1.png" alt="various" />
        <img src="/various2.png" alt="various" />
        <img src="/various3.png" alt="various" />
      </div>
    </div>
  );
};

export default VariousStyle;
