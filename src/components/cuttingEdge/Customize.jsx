import React from "react";

const Customize = () => {
  return (
    <div className="customize">
      <div className="left">
        <img src="/Group 39591.svg" alt="customize" width={130} height={130} />
        <h3>Fully Customizable</h3>
        <div className="icons">
          <img
            src="/63ed3d117aba43c88f21b001_high-quality-icon-generativeai-x-webflow-template.svg.svg"
            alt="icon"
            width={30}
            height={30}
          />
          <div>
            <h5>Generate high-quality images</h5>
            <p>
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </p>
          </div>
        </div>
        <div className="icons">
          <img
            src="/63ed3d11b9dd14f2c319a764_edit-icon-generativeai-x-webflow-template.svg.svg"
            alt="icon"
            width={30}
            height={30}
          />
          <div>
            <h5>Edit and upscale images</h5>
            <p>
              A good design is not only aesthetically pleasing, but also
              function al. It should be able to solve the problem{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="prompt">
          <div>
            <h5>Prompt</h5>
            <span className="vector">
              <img src="/Vector.svg" alt="vector" width={15} height={15} />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper consequat nunc
            molestie lacus pretium placerat
          </p>
        </div>
        <div className="kid">
          <img src="/kid1.svg" alt="kids" />
          <img src="/kid2.svg" alt="kids" className="lower" />
          <img src="/kid3.svg" alt="kids" />
        </div>
      </div>
    </div>
  );
};

export default Customize;
