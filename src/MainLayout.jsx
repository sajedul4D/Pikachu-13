import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div >

           

   <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;