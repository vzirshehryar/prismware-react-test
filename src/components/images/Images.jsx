import React from "react";

import "./images.css";
import Image from "./Image";

const up = [
  "image0.png",
  "image1.png",
  "image2.png",
  "image0.png",
  "image3.png",
];
const down = [
  "image3.png",
  "image0.png",
  "image2.png",
  "image2.png",
  "image1.png",
  "image0.png",
];

const Images = () => {
  return (
    <div className="images">
      <div>
        {up.map((image) => {
          return <Image src={image} />;
        })}
      </div>
      <div>
        {down.map((image) => {
          return <Image src={image} />;
        })}
      </div>
    </div>
  );
};

export default Images;
