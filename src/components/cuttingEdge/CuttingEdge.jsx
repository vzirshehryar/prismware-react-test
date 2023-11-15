import React from "react";

import "./cuttingEdge.css";
import Customize from "./Customize";

const CuttingEdge = () => {
  return (
    <div className="cuttingEdge">
      <h2>Our Cutting-edge features Revolutionize AI Experience</h2>
      <video src="/video.mp4"></video>
      <Customize />
      <div className="sideImages">
        <div>
          <img src="Group 39591.svg" alt="image" width={150} />
          <p>Lightning Fast. Just start with an idea and see how it evolves </p>
        </div>
        <div>
          <img src="Group 39591.svg" alt="image" width={150} />
          <p>Lightning Fast. Just start with an idea and see how it evolves </p>
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
