import React from "react";
import TopNav from "../../components/common/TopNav";
import Head from "../../components/common/Header";
import MidCon from "./wall";
import ThirdD from "./third";
import FourthD from "./fourth";
import Footer from "../../components/common/footer";
import Products from "./Products";
import LoginModal from "./login";
import SignInModal from "./signup";


function Ribbon(){
  const imgUrls = [
    'https://images.unsplash.com/photo-1648781329667-56ee9f8cf180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    'https://images.unsplash.com/photo-1648781329667-56ee9f8cf180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    'https://images.unsplash.com/photo-1648781329667-56ee9f8cf180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
  ];
  return(
    <>
    <div className="bg-primary py-5 text-center text-white">
      <p className="f-s-28 f-w-600">One of Best</p>
    </div>
    <div className="d-flex ">

      {
        imgUrls.map((item)=>(
          <div className="hover-scale-image-container">
            <img src={item} className="hover-scale-image" />

            </div>
        ))
      }
    </div>
    </>
  )
}

function BottomRibbon(){
  return(
    <div className="bg-whitesmoke py-5 d-flex justify-content-around">
      <div className="d-flex">
      <p className="f-s-24 f-w-600">Interested in Themes? Don’t wait and get it now!</p>
      </div>
      <button className="btn btn-primary">Buy Theme Now</button>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <div className="fiexd ">
        <button className="btn btn-success">Buy</button>
      </div>
      <TopNav />
      <Head />
      <MidCon />
      <ThirdD />
      <FourthD />
      <Ribbon />
      <BottomRibbon />
      <Products />
      <Footer />
      <LoginModal />
      <SignInModal />
    </>
  );
}
