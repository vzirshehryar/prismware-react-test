import React from "react";

import "./generator.css";
import GeneratorCart from "./GeneratorCart";

const carts = [
  {
    h5: "Content Creator",
    p: "Create striking visual content quickly by generating images from the text at your fingertips.",
  },
  {
    h5: "Business",
    p: "Differentiate yourself from competitors by using unique, heartfelt imagery to enhance marketing materials. ",
  },
  {
    h5: "Artists and Designers",
    p: "Inspire creativity and jumpstart your ideas with AI-generated images",
  },
];

const Generator = () => {
  return (
    <div className="generator">
      <h2>Our AI Image Generator is for Everyone</h2>
      <p>
        A picture is worth a thousand words; with AI-generated images, that
        value is multiplied by a million. Whether writing an article, building a
        webpage, or running an ad campaign, you can instantly create a library
        of creative resources to express yourself fully. With this technology,
        you can unlock the power of visual communication and enhance the impact
        of your content. 
      </p>
      <div className="Gcarts">
        {carts.map((cart) => (
          <GeneratorCart cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default Generator;
