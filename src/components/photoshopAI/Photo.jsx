import React from "react";

const Photo = ({ h5, p }) => {
  return (
    <div className="photo">
      <img src="/Group 39592.svg" alt="imagephoto" />
      <h5>{h5} </h5>
      <p>{p} </p>
    </div>
  );
};

export default Photo;
