import React from "react";
import AllSkills from "../WorkEntry/AllSkills/AllSkils";
import { FaChartLine } from "react-icons/fa6";
import MonthlyTarget from "./Monthly/MonthTarget/MonthlyTarget";

const Overview = () => {
  return (
    <div className="pt-12 flex  lg:bg-blue-800">
      <div className="lg:w-64 hidden lg:inline-block ">
        <div>
          <div className="bg-gradient-to-r from-blue-800 via-blue-800 to-green-50 ml-6 mt-5 relative">
            <h1 className="bg-blue-800 h-5  rounded-br-2xl"> </h1>
          </div>
          <h1 className="bg-green-50 px-3 py-2  ml-4 rounded-l-2xl flex">
            {" "}
            <FaChartLine />
            Dashboard :
          </h1>
          <div className="bg-gradient-to-r from-blue-800 via-blue-800 to-white ml-6 relative">
            <h1 className="bg-blue-800  h-5  rounded-tr-2xl"> </h1>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-blue-800 via-blue-800 to-green-50 ml-6 mt-5 relative">
            <h1 className="bg-blue-800 h-5  rounded-br-2xl"> </h1>
          </div>
          <h1 className="bg-green-50 px-3 py-2  ml-4 rounded-l-2xl flex">
            {" "}
            <FaChartLine />
            Monthly
          </h1>
          <div className="bg-gradient-to-r from-blue-800 via-blue-800 to-white ml-6 relative">
            <h1 className="bg-blue-800  h-5  rounded-tr-2xl"> </h1>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-blue-800 via-blue-800 to-green-50 ml-6 mt-5 relative">
            <h1 className="bg-blue-800 h-5  rounded-br-2xl"> </h1>
          </div>
          <h1 className="bg-green-50 px-3 py-2  ml-4 rounded-l-2xl flex">
            {" "}
            <FaChartLine />
            Weekly
          </h1>
          <div className="bg-gradient-to-r from-blue-800 via-blue-800 to-white ml-6 relative">
            <h1 className="bg-blue-800  h-5  rounded-tr-2xl"> </h1>
          </div>
        </div>
      </div>

     

      <div className="lg:flex-1 bg-green-50 p-5 rounded-lg mr-5">
        <AllSkills></AllSkills>
        <MonthlyTarget></MonthlyTarget>
      </div>
    </div>
  );
};

export default Overview;
