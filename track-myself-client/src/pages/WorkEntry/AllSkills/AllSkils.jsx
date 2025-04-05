import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMySkills,
  fetchSkills,
} from "../../../feature/calculate/calculateSlice";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import Monthly from "../../Overview/Monthly/Monthly";

// Register Chart.js components
ChartJS.register(...registerables);

const AllSkills = () => {
  const dispatch = useDispatch();
  const { eliteITTechnologies, status, error } = useSelector(
    (state) => state.calculate
  );
  const { mySkills } = useSelector((state) => state.calculate);

  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchMySkills());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const alltecnologies = eliteITTechnologies[0]?.technologies?.length || 0;
  const mineSkills = mySkills[0]?.MySkills.length || 0;

  const net = (1 / alltecnologies) * 100;
  const percentage = parseInt(100 - net * mineSkills);

  // Bar Chart Configuration
  const barChartData = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Works",
        data: [100, 200, 300],
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 0, 0, 0.6)",
          "rgba(255, 0, 0, 0.8)",
        ],
        borderRadius: 5,
      },
    ],
  };

  // Doughnut Chart Configuration
  const doughnutChartData = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Works",
        data: [alltecnologies, mineSkills, percentage],
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgb(54,203,0)",
          "rgba(255, 0, 0, 0.8)",
        ],
        borderRadius: 1,
      },
    ],
  };

  // Chart options to prevent canvas reuse issues
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Skills Distribution",
      },
    },
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%", height: "300px" }}>
          <Bar
            data={barChartData}
            options={chartOptions}
            key="bar-chart" // Unique key to force re-render
          />
        </div>

        <div style={{ width: "45%", height: "300px" }}>
          <Doughnut
            data={doughnutChartData}
            options={chartOptions}
            key="doughnut-chart" // Unique key to force re-render
          />
        </div>
      </div>

      <div className="flex my-14 justify-center items-center gap-5">
        <Monthly></Monthly> 
        <div className="text-center bg-white p-6 w-md rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Skills Overview
          </h2>

          <p className="text-gray-600">
            <span className="font-medium text-gray-700">
              All Stored Technologies:
            </span>{" "}
            {alltecnologies}
          </p>

          <p className="text-gray-600">
            <span className="font-medium text-gray-700">
              My Gathering So Far:
            </span>{" "}
            {mineSkills}
          </p>

          <p className="text-white font-medium py-2 px-4 rounded-lg bg-green-500 mt-4 inline-block">
            Top Percentage: {percentage}%
          </p>
        </div>
      </div>
      <div className="flex my-14 justify-center items-center gap-5">
        <Monthly></Monthly> 
        <div className="text-center bg-white p-6 w-md rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Skills Overview
          </h2>

          <p className="text-gray-600">
            <span className="font-medium text-gray-700">
              All Stored Technologies:
            </span>{" "}
            {alltecnologies}
          </p>

          <p className="text-gray-600">
            <span className="font-medium text-gray-700">
              My Gathering So Far:
            </span>{" "}
            {mineSkills}
          </p>

          <p className="text-white font-medium py-2 px-4 rounded-lg bg-green-500 mt-4 inline-block">
            Top Percentage: {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
