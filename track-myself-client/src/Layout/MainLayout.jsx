import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='bg-green-50'>
            <Navbar></Navbar>
            <div className='pt-10'>
            <Outlet></Outlet>
            </div>
            


            <ToastContainer />
        </div>
    );
};

export default MainLayout;