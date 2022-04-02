import React from "react";

function ImageGallery(){
  return(
    <div></div>
  )
}

function FourthD() {
    const { noOfResources=0, noOfIllustration=0,noOfThemes=0,noOfHappyClients=0 } = {}
  return (
    <div className="fourthD-div">
      <div className="container">
        <p className="fourthD-first-p">Resources Which are hard to find.</p>
        <div className="d-flex justify-content-around">
          <div className="number-div">
            <h1 className="text-primary six">{noOfResources}+</h1>
            <p className="pre-build-website">Resources</p>
            <div className="sm-line"></div>
          </div>
          <div className="number-di">
            <h1 className="text-primary six">{noOfIllustration}+</h1>
            <p className="pre-build-website">Illustration</p>
            <div className="sm-line"></div>
          </div>
          <div className="number-di">
            <h1 className="text-primary six">{noOfThemes}+</h1>
            <p className="pre-build-website">Themes</p>
            <div className="sm-line"></div>
          </div>
          <div className="number-di">
            <h1 className="text-primary six">{noOfHappyClients}+</h1>

            <p className="pre-build-website">Happy clients</p>
            <div className="sm-line"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default FourthD;
