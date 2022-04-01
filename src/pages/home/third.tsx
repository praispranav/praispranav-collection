import React from "react";
import img from "../../assets/images/logo.png";
import img2 from "../../assets/images/logo2.png";
import img3 from "../../assets/images/logo3.png";

function ThirdD() {
  return (
    <div className="container third-div-m ">
      
      <div className=" third-first-div d-flex">
          <div>
        <img src={img} className="ms-5 ps-4"/>
        <p className="purpose ms-5 ps-5">Multi-Purpose</p>
        <p>Lorem ipsum dolor sit amet eleifend tincidunt </p>
       
        <p className="ms-4 ps-4">fringilla neque ut quam quis.</p>
        </div>
        <div className="big-line"></div>
        <div>
        <img src={img2} className="ms-5 ps-4"/>
        <p className="purpose ms-5 ps-5">Multi-Purpose</p>
        <p>Lorem ipsum dolor sit amet eleifend tincidunt </p>
       
        <p className="ms-4 ps-4">fringilla neque ut quam quis.</p>
        </div>
        <div className="big-line"></div>
        <div>
        <img src={img3} className="ms-5 ps-4"/>
        <p className="purpose ms-5 ps-5">Multi-Purpose</p>
        <p>Lorem ipsum dolor sit amet eleifend tincidunt </p>
       
        <p className="ms-4 ps-4">fringilla neque ut quam quis.</p>
        </div>
      </div>
    </div>
  );
}
export default ThirdD;
