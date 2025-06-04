import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
  const [page, setPage] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/overview")) {
      setPage(false);
    } else {
      setPage(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="navbar backdrop-blur-2xl text-white bg-gray-800/20 shadow-sm fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
           
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">My Task</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex flex-col">
            <Link to="/">
              <button
                className={`bg-teal-600/50 ${
                  page ? "hidden" : ""
                } hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex`}
              >
                <MdKeyboardDoubleArrowRight className="my-auto size-6" />{" "}
                Workflow
              </button>
            </Link>

            <Link to="/overview/dashboard">
              <button
                className={`bg-teal-500 ${
                  page ? "" : "hidden"
                } hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex`}
              >
                <MdKeyboardDoubleArrowRight className="my-auto size-6" />
                Overview
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
