import React from "react";
import TopNav from "../../components/common/TopNav";
import Head from "../../components/common/Header";
import MidCon from "./wall";
import ThirdD from "./third";
import FourthD from "./fourth";
import Footer from "./footer";




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
      <Footer />
    </>
  );
}
