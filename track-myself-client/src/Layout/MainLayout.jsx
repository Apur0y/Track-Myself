import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TopNavbar from "../Navbar/TopNavbar";

const MainLayout = () => {
  const [page,setPage]=useState(true)

  const location  = useLocation();
  
  useEffect(() => {
    if (location.pathname.includes("/overview")) {
      setPage(false);
    } else {
      setPage(true);
    }
  }, [location.pathname]);

  return (
    <div className="bg-[#2c3837]">
      <TopNavbar></TopNavbar>
      <div className="">
        <Outlet></Outlet>
      </div>

      <div className="fixed top-0 right-0 flex flex-col p-4 gap-4">
        <Link to='/'>
        <button className={`bg-teal-600/50 ${page? "hidden" :""} hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex`}>
        <MdKeyboardDoubleArrowRight className="my-auto size-6"/> Workflow
        </button>
        </Link>
    

        <Link to='/overview/dashboard'>
        <button className={`bg-teal-600/20 ${page? "" :"hidden"} hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex`}>
        <MdKeyboardDoubleArrowRight className="my-auto size-6" />Overview
        </button>
          </Link>
        
      </div>

      <ToastContainer />
    </div>
  );
};

export default MainLayout;
