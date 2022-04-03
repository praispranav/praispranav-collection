import React from "react";
import img1 from "../../assets/images/back.jpg";

export default function BlogScreen() {
  return (
    <div>
      <div className="s2">
        <h1 className="s1">Blog </h1>
        <div className="s3">
          <p className="s4"> Home </p>
          <i className="bi bi-chevron-right s4"></i>
          <p className="s4"> Blog</p>
        </div>
      </div>
      <div className="s5">
        <p className="s6"> Filter By </p>
        <i className="bi bi-file-earmark s8"> </i>
        <p className="s7">Categories</p>
        <i className="bi bi-caret-down-fill s7"></i>
        <i className="bi bi-bookmark-fill s8"></i>
        <p className="s7">Tags</p>
        <i className="bi bi-caret-down-fill  s7"></i>
        <i className="bi bi-person-fill s8 "></i>
        <p className="s7"> Author</p>
        <i className="bi bi-caret-down-fill s7"></i>
        <div className="s9">
          <i className="bi bi-x"></i>
          <p>show all</p>
        </div>
      </div>

      <div className="container s13">
        <img src={img1} className="s10" />
        <img src={img1} className="s11" />
        <img src={img1} className="s12" />
      </div>
      <div className="s16">
        <div className="s14">
          <i className="bi bi-person-fill  "></i>
          <p> Muffin Group on</p>
          <i className="bi bi-clock s15"></i>
          <p>October 15, 2020</p>
        </div>

        <div className="s14">
          <i className="bi bi-person-fill  "></i>
          <p> Muffin Group on</p>
          <i className="bi bi-clock s15"></i>
          <p>October 15, 2020</p>
        </div>
        <div>
          <div className="s14">
            <i className="bi bi-person-fill  "></i>
            <p> Muffin Group on</p>
            <i className="bi bi-clock s15"></i>
            <p>October 15, 2020</p>
          </div>
        </div>
      </div>
      <div className="s17">
        <p>Standard post</p>
        <p> Post with right sidebar</p>
        <p> post with left sidebar</p>
      </div>
    </div>
  );
}
