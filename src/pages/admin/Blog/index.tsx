import React from 'react';
import Footer from '../../../components/common/footer';
import Head from '../../../components/common/Header';
import TopNav from '../../../components/common/TopNav';
import ManageBlog from './manageBlog';

export default function Blog(){
    return(
        <>
            <TopNav />
            <Head />
            <ManageBlog />
            <Footer />
        </>
    )
}