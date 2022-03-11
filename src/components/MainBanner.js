import React from "react";
import dog from "../assets/dog.svg";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <div className="mainBanner">
      <div className="text">
        <div className="heading">
          <div className="big">
            Hey Hooman! Welcome to <span>DoggoPedia</span>
          </div>
          <div className="para">
            It’s just the most amazing thing to love a dog, isn’t it? So Let's
            explore the world of dogs together!
          </div>
        </div>
      </div>
      <img src={dog} className="dogImage" />
    </div>
  );
};

export default MainBanner;
