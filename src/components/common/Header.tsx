import React from "react";
import {} from "react-icons/io";

function Head() {
  return (
    <div className="head-parent d-flex">
      <div className="d-flex be-div">
        <p className="be text-primary">Be</p>
        <p className="theme-p">theme</p>
      </div>
      <div className="d-flex second-head-div">
        <p className="second-div-p text-primary">Home</p>
        <div className="line"></div>
        <p className="second-div-p">Blog</p>
        <div className="line"></div>
        <p className="second-div-p">Portfolio</p>
        <div className="line"></div>
        <p className="second-div-p">About</p>
        <div className="line"></div>
        <p className="second-div-p">Contact</p>
      </div>

      <div className="third-div">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}
export default Head;
