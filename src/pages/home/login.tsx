import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Input({ placeholder, type, value, onChange }: any) {
  return (
    <input
      type={type}
      className="auth-input form-control  py-3"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [arr, setArr] = useState([]);

  const onChange1 = (event: any) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChange2 = (event: any) => {
    const value = event.target.value;
    setPassword(value);
  };

  function submit() {
    const a = [...arr];
    console.log({ email: email, password: password });
    setArr(a);
    setEmail("");
    setPassword("");
  }

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
            <p className="ms-4 text-secondary modal-p">
              {" "}
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you promptly
            </p>
            <div className="modal-body">
              <div className="mt-4">
                <h6 className="text-secondary ms-2">Email</h6>

                <Input onChange={onChange1} value={email} type="email" />
              </div>
              <div className="mt-4">
                <h6 className="text-secondary ms-2 ">Password </h6>

                <Input type="password" onChange={onChange2} value={password} />
              </div>
            </div>
            <div className="mx-2">
              <button
                type="button"
                onClick={submit}
                className="btn form-control login-btn btn-primary"
              >
                Login
              </button>
            </div>
            <div className="d-flex justify-content-center aline-item-center mt-2">
              <p>Forgot Password ?</p>
            </div>
            <div className="d-flex justify-content-center aline-item-center">
              <p className="text-primary mb-2">Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
