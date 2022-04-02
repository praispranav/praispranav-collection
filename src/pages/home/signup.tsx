import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Input({ placeholder, type }: any) {
    return <input type={type} className="auth-input form-control py-3" placeholder={placeholder} />;
  }


export default function SignInModal() {
    return (
        <>
        <div
          className="modal fade"
          id="SignInModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="d-flex justify-content-between me-3 cross">
                <h2 className="ms-4 mt-3">Sign In</h2>
                <div>
                  <AiOutlineClose />
                </div>
          
              </div>
              <p className="ms-4 text-secondary modal-p"> To request a quote or want to meet up for coffee, contact us
                directly or fill out the form and we will get back to you promptly</p>
              <div className="modal-body">
               
                <div className="mt-4">
                <h6 className="text-secondary ms-2">User Name</h6>
                    
                  <Input  type="email" />
                </div>
                <div className="mt-4">
                <h6 className="text-secondary ms-2">Email </h6>
                    
                  <Input  type="email" />
                </div>
                <div className="mt-4">
                <h6 className="text-secondary ms-2">Password </h6>
                    
                  <Input  type="password" />
                </div>
              </div>
              <div className="mx-2">
             
                <button type="button" className="btn form-control login-btn btn-primary">
                  Sign in
                </button>
              </div>
               
                <div className="d-flex justify-content-center aline-item-center">
                    <p className="text-primary my-2"> Login</p>
                    
                </div>
            </div>
          </div>
        </div>
      </>
    );
}