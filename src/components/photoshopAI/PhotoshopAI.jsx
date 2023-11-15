import React from "react";

import "./photoshopAI.css";
import Photo from "./photo";

const photos = [
  {
    h5: "Free to use",
    p: "Try out a free AI art generator today.",
  },
  {
    h5: "Fully Customizable",
    p: "Try experimenting with different artistic styles.",
  },
  {
    h5: "Fully Customizable",
    p: "High-quality images that can be used freely on various resolutions. ",
  },
];

const PhotoshopAI = () => {
  return (
    <div className="photoshopAI">
      <div className="top">
        <h2>Why Photosoft AI</h2>
        <p>
          Meet the new standard for modern software development. Streamline
          issues, sprints, and product roadmaps.
        </p>
      </div>
      <div>
        {photos.map((photo) => {
          return <Photo p={photo.p} h5={photo.h5} />;
        })}
      </div>
    </div>
  );
};

export default PhotoshopAI;
