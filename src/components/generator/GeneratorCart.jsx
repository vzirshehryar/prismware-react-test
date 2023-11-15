import React from "react";

const GeneratorCart = ({ cart }) => {
  return (
    <div className="generatorCart">
      <img src="/Group 39592.svg" alt="icon" width={110} height={110} />
      <h5>{cart.h5}</h5>
      <p>{cart.p}</p>
    </div>
  );
};

export default GeneratorCart;
