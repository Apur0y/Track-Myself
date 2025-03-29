import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-10'>
            <Outlet></Outlet>
            </div>
            


            <ToastContainer />
        </div>
    );
};

export default MainLayout;