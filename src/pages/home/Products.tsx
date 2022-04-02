import React from "react";
import { RiFileWord2Line } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import {GiForwardField} from "react-icons/gi"
import {BiMessageRounded} from "react-icons/bi"
import {BsGridFill} from "react-icons/bs"
import {BsImages} from "react-icons/bs"

import {HiOutlineUsers} from "react-icons/hi"


export default function Products() {
  return (
    <div className="bg-gradient-radial ">
      <div className="container">
        <div className="text-center pt-5">
          <p className="text-dark all pt-5 ">THAT'S NOT ALL</p>
        </div>
        <div className="text-center">
          <h1 className="text-light product-h1">Learn more about BeTheme</h1>
        </div>
        <div className="divider"></div>
        <div className="row mt-5 parent-product-div ms-5">
          <div className="col-3 text-light  colFirst">
            <div className="d-flex hove-p hove ">
              <div className="icon-font ">
                <RiFileWord2Line />
              </div>
              <p className="text-light ms-3 mt-4 ">Pre-build website</p>
            </div>

            <div className="d-flex mt-3 hove-p hove ">
              <div className="icon-font">
                <FaRegLightbulb />
              </div>
              <p className="text-light ms-3 mt-4">Care features </p>
            </div>

            <div className="d-flex mt-3 hove  hove-p ">
              <div className="icon-font ">
                <BsQuestionLg />
              </div>
              <p className="text-light ms-3  mt-4 ">Tutorial and support </p>
            </div>
          </div>
          <div className="col-3 ms-5 colFirst">
            <div className="d-flex hove hove-p ">
              <div className="icon-font ">
                <IoSettingsOutline />
              </div>
              <p className="text-light ms-3 mt-3 ">Mufin builder</p>
            </div>

            <div className="d-flex mt-3 hove-p hove ">
              <div className="icon-font">
                <GiForwardField />
              </div>
              <p className="text-light ms-3 mt-4">Item & shortcode</p>
            </div>

            <div className="d-flex mt-3 hove hove-p ">
              <div className="icon-font ">
                <BiMessageRounded />
              </div>
              <p className="text-light ms-3 mt-4 ">Testimonial</p>
            </div>
          </div>
          <div className="col-3 ms-5 colFirst">
            <div className="d-flex hove hove-p ">
              <div className="icon-font ">
                <BsGridFill />
              </div>
              <p className="text-light ms-3 mt-4 ">The grid</p>
            </div>

            <div className="d-flex mt-3 hove-p hove ">
              <div className="icon-font">
                <BsImages />
              </div>
              <p className="text-light ms-3 mt-4">Blog </p>
            </div>

            <div className="d-flex mt-3 hove hove-p ">
              <div className="icon-font ">
                <HiOutlineUsers />
              </div>
              <p className="text-light ms-3 mt-4 ">User guide</p>
            </div>
          </div>
         
        </div>
      </div>
      <div className="d-flex justify-content-center aline-item-centre mt-5 pb-5">
          <button className="btn btn-success">
View Documentation
      </button>
      </div>
    </div>
  );
}
