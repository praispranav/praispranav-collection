import React from "react";
import TopNav from "../../components/common/TopNav";
import Head from "../../components/common/Header";
import Footer from "../../components/common/footer";
import BlogScreen from "./Blog";

export default function Page(){
    return(
        <>
            <TopNav />
            <Head />
            <BlogScreen />
            <Footer />
        </>
    )
}