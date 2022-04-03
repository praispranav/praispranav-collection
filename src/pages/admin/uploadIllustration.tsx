import React from "react"
import Head from "../../components/common/Header";
import TopNav from "../../components/common/TopNav";
import img from "../../assets/images/themelogo.jpg";

function Input({ placeholder, type, value, onChange }: any) {
  return (
    <input
      type={type}
      className="them-p-div form-control py-3"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default function UploadIllustrator() {
  return (
    <>
      <TopNav />
      <Head />

      <div className="d-flex">
        <div>
          <img src={img} className="themelogo" />
        </div>
        <div className="d-flex justify-content-center align-item-center mt-5 py-5 ms-5 form-div">
          <div className="">
              <h1 className="d-flex justify-content-center align-item-center mt-0"> Illustration Form</h1>
            <div className="ms-3 me-3">
              <h5 className="text-secondary">Title</h5>
              <Input type="text" />
            </div>

            <div className="mt-4 ms-3 me-3">
              <h5 className="text-secondary">Descripition</h5>
              <Input type="text" />
            </div>
            <div className="mt-4 ms-3 me-3">
              <h5 className="text-secondary">Tag</h5>
              <Input type="text" />
            </div>
            <div className="mt-4 ms-3 me-3">
              <h5 className="text-secondary">Image</h5>
              <Input type="file" />
            </div>
          
          
<div className="d-flex justify-content-center align-item-center">
            <button className="btn btn-primary form-control me-3 ms-3 mt-5">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
