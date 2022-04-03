import React, { useState,useEffect } from "react";

export default function ManageBlog() {
  const [state, setState] = useState([]);

  const onChange = (event: any, index: number) => {
    const value = event.target.value;
    const arr: any = [...state];
    arr[index] = value;
    setState(arr);
  };
  const addField = () => {
    const arr: any = [...state];
    arr.push("");
    setState(arr);
  };

  useEffect(()=>{
    addField();
  },[])

  return (
    <div>
      <h3 className="d-flex justify-content-center align-item-center manage-blog-h1">
        Add Blog
      </h3>
      <div className="d-flex flex-column container">
        <div className="d-flex justify-content-end">
          <button
            onClick={() => console.log(state)}
            className="btn btn-primary submit-mange-blog mt-3"
          >
            Submit
          </button>
        </div>
       
        {state.map((item, index: number) => (
          <div className=" d-flex justify-content-center align-item-center">
            <textarea
              value={item}
              onChange={(e) => onChange(e, index)}
              className="manage-blog-inuputField "
            ></textarea>
          </div>
        ))}
        <div className="d-flex justify-content-center align-item-center mt-3">
          <button
            onClick={addField}
            className="btn btn-primary add-mange-blog  "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
