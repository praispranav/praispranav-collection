import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Input({ placeholder, type }: any) {
  return <input type={type} className="auth-input form-control py-3" placeholder={placeholder} />;
}

export default function LoginModal() {
  return (
    <>
      <div
        className="modal fade"
        id="logInModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex justify-content-between me-3 cross">
              <h2 className="ms-4 mt-3">Login</h2>
              <div>
                <AiOutlineClose />
              </div>
        
            </div>
            <p className="ms-4 text-secondary modal-p"> To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you promptly</p>
            <div className="modal-body">
             
              <div className="mt-4">
              <h6 className="text-secondary ms-2">Email</h6>
                  
                <Input  type="email" />
              </div>
              <div className="mt-4">
              <h6 className="text-secondary ms-2">Password </h6>
                  
                <Input  type="password" />
              </div>
            </div>
            <div className="modal-footer">
           
              <button type="button" className="btn form-control login-btn btn-primary">
                Login
              </button>
            </div>
              <div className="d-flex justify-content-center aline-item-center">
                  <p>Forgot Password ?</p>

              </div>
              <div className="d-flex justify-content-center aline-item-center">
                  <p className="text-primary">Sign up</p>
                  
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
