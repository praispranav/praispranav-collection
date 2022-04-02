import React from "react";
import {} from "react-icons/io";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className="head-parent d-flex">
      <div className="d-flex be-div">
        <p className="be text-primary">Coding</p>
        <p className="theme-p">Resources</p>
      </div>
      <div className="d-flex second-head-div">
        <Link to={'/'}>
        <p className="second-div-p text-primary">Home</p>
        </Link>
        <div className="line"></div>
        <p className="second-div-p">Blog</p>
        <div className="line"></div>
        <p className="second-div-p">Portfolio</p>
        <div className="line"></div>
        <p className="second-div-p">About</p>
        <div className="line"></div>
        <p className="second-div-p">Contact</p>
        <div className="line"></div>
        <p
          className="second-div-p"
          data-bs-toggle="modal"
          data-bs-target="#logInModal"
        >
          Login
        </p>
        <div className="line"></div>
        <p
          className="second-div-p"
          data-bs-toggle="modal"
          data-bs-target="#SignInModal"
        >
          Sign Up
        </p>
      </div>

      <div className="third-div">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}
export default Head;
