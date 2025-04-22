import React, { useState } from "react";
import AllSkills from "../WorkEntry/AllSkills/AllSkils";
import { FaChartLine } from "react-icons/fa6";
import MonthlyTarget from "./Monthly/MonthTarget/MonthlyTarget";
import { Outlet, useNavigate } from "react-router-dom";

const Overview = () => {
  const [month, setMonth] = useState("");
  const [weekly, setWeek] = useState("");
  const [dash, setDash] = useState("bg-green-50 ");
  const navigate = useNavigate();
  const handleActive = (btn) => {
   
    if (btn == "monthly") {
      setMonth("bg-green-50");
      setWeek("");
      setDash("");
      navigate('monthly')
    }
    if (btn == "finished") {
      setMonth("");
      setWeek("bg-green-50");
      setDash("");
      navigate("finished")
    }
    if (btn == "dash") {
      setMonth("");
      setWeek("");
      setDash("bg-green-50");
      navigate("dashboard")
    }
  };

  return (
    <div className="pt-12 flex transition-all duration-700 min-h-screen">
      <div className="lg:w-64 hidden lg:inline-block ">



        
        <div>
          <div
            className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
              dash ? "to-green-50" : ""
            } ml-6 mt-5 relative`}
          >
            <h1 className="bg-[#00AB96] h-5  rounded-br-2xl"> </h1>
          </div>

          <h1 className={`${dash}   px-3 py-2  ml-4 rounded-l-2xl flex`}>
            <button className="flex gap-2 cursor-pointer " onClick={() => handleActive("dash")}>
              <FaChartLine className="my-auto" />
              Dashboard
            </button>
          </h1>
          <div
            className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
              dash ? "to-green-50" : ""
            }  ml-6 relative`}
          >
            <h1 className="bg-[#00AB96]  h-5  rounded-tr-2xl"> </h1>
          </div>
        </div>





        <div>
          <div
            className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
              month ? "to-green-50" : ""
            } ml-6 mt-5 relative`}
          >
            <h1 className="bg-[#00AB96] h-5  rounded-br-2xl"> </h1>
          </div>

          <h1 className={`${month}   px-3 py-2  ml-4 rounded-l-2xl flex`}>
            <button
              className="flex gap-2 cursor-pointer"
              onClick={() => handleActive("monthly")}
            >
              <FaChartLine className="my-auto" />
              Monthly
            </button>
          </h1>
          <div
            className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
              month ? "to-green-50" : ""
            }  ml-6 relative`}
          >
            <h1 className="bg-[#00AB96]  h-5  rounded-tr-2xl"> </h1>
          </div>
        </div>




        <div>
          <div
            className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
              weekly ? "to-green-50" : ""
            } ml-6 mt-5 relative`}
          >
            <h1 className="bg-[#00AB96] h-5  rounded-br-2xl"> </h1>
          </div>

          <h1 className={`${weekly}   px-3 py-2  ml-4 rounded-l-2xl flex`}>
            <button
              className="flex gap-2 cursor-pointer"
              onClick={() => handleActive("finished")}
            >
              <FaChartLine className="my-auto" />
              Finished
            </button>
          </h1>
          <div
            className={`bg-gradient-to-r from-[#00AB96] via-[#00AB96] ${
              weekly ? "to-green-50" : ""
            }  ml-6 relative`}
          >
            <h1 className="bg-[#00AB96]  h-5  rounded-tr-2xl"> </h1>
          </div>
        </div>
      </div>

      <div className="lg:flex-1 bg-green-50 p-5 rounded-lg mr-5">
        <Outlet></Outlet>
   
      </div>
    </div>
  );
};

export default Overview;
