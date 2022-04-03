import React, { useEffect } from "react";
import Head from "../../components/common/Header";
import TopNav from "../../components/common/TopNav";
import Footer from "../../components/common/footer";

export default function IllustratorList() {
  useEffect(() => {
    window.document.title = "Illustration Gallery";
  }, []);
  return (
    <>
      <TopNav />
      <Head />
      <div></div>
      <Footer />
    </>
  );
}
