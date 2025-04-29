import React, { useState } from "react";
import { FaChartLine, FaCheck } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [input, setInput] = useState(true);
  const navigate = useNavigate();
  const allOptions = [
    { id: "dashboard", label: "Dashboard", route: "dashboard" },
    { id: "monthly", label: "Monthly", route: "monthly" },
    { id: "finished", label: "Finished", route: "finished" },
    { id: "home", label: "Home", route: "finished" },
    { id: "newMe", label: "New Me", route: "finished" },
    { id: "targetDir", label: "Target dir", route: "finished" },
  ];

  const handleTabClick = (id, route) => {
    setActiveTab(id);
    navigate(route);
  };

  return (
    <div className="pt-12 flex bg-[#00AB96] transition-all duration-700 min-h-screen">
      <div className="lg:w-64 hidden md:inline-block">
        {allOptions.map((tab) => (
          <div key={tab.id}>
            <div
              className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
                activeTab === tab.id ? "to-green-50" : ""
              } ml-6 mt-5 relative`}
            >
              <h1 className="bg-[#00AB96] h-5 rounded-br-2xl"> </h1>
            </div>

            <h1
              className={`${
                activeTab === tab.id ? "bg-green-50" : ""
              } px-3 py-2 ml-4 rounded-l-2xl flex`}
            >
              <button
                className="flex gap-2 cursor-pointer"
                onClick={() => handleTabClick(tab.id, tab.route)}
              >
                <FaChartLine className="my-auto" />
                {tab.label}
              </button>
            </h1>

            <div
              className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
                activeTab === tab.id ? "to-green-50" : ""
              } ml-6 relative`}
            >
              <h1 className="bg-[#00AB96] h-5 rounded-tr-2xl"> </h1>
            </div>
          </div>
        ))}
        <div className={`${input ? "hidden" : "flex"}`}>
          <input
            name="topic"
            type="text"
            placeholder="Enter Title"
            className="w-10/12 mx-auto px-2 py-1 ml-4 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-teal-500"
          />
          <FaCheck className="my-auto cursor-pointer  mr-1 text-white" />
        </div>
        <div className="divider"></div>

        <h1 onClick={() => setInput(!input)} className="flex justify-center ">
          <IoMdAddCircle className="size-7 cursor-pointer hover:scale-110 transition-all duration-300  rounded-full" />
        </h1>
      </div>

 

      <div className="lg:flex-1 bg-green-50 p-5 rounded-lg mr-5">
        <Outlet />
      </div>


      <div className="flex md:hidden flex-col gap-2 fixed z-30 bg-teal-700">
        {
          allOptions.map(option=>(
            <Link to={`/overview/${option.route}`} key={option.id} className={`flex items-center gap-2 p-2 rounded-lg hover:bg-teal-600 transition-all duration-300 ${activeTab === option.id ? "bg-teal-600" : ""}`} onClick={() => handleTabClick(option.id, option.route)}>
            <div className="">{option.label}</div> 
            </Link>
           
          ))
        }
      </div>
    </div>
  );
};

export default Overview;
