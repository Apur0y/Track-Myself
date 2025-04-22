// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMySkills,
//   fetchSkills,
// } from "../../../feature/calculate/calculateSlice";


const Monthly = () => {
    // const dispatch = useDispatch();
    // const { eliteITTechnologies, status, error } = useSelector(
    //   (state) => state.calculate
    // );
    // const { mySkills } = useSelector((state) => state.calculate);

    // useEffect(() => {
    //   dispatch(fetchSkills());
    //   dispatch(fetchMySkills());
    // }, [dispatch]);

    // if (status === "loading") return <p>Loading...</p>;
    // if (status === "failed") return <p>Error: {error}</p>;

    // const alltecnologies = eliteITTechnologies[0]?.technologies?.length || 0;
    // const mineSkills = mySkills.length

    // const net = (1 / alltecnologies) * 100;
    // const percentage = parseInt(100 - net * mineSkills);
    // console.log(mineSkills);
    // console.log(mySkills);



  return (
    <div>
      <div className="text-center w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Overview</h2>

        <p className="text-gray-600">
          <span className="font-medium text-gray-700">All Stored Technologies:</span> {60}
        </p>

        <p className="text-gray-600">
          <span className="font-medium text-gray-700">My Gathering So Far:</span> 
        </p>

        <p className="text-white font-medium py-2 px-4 rounded-lg bg-green-500 mt-4 inline-block">
          Completion Percentage: {54}%
        </p>
      </div>
    </div>
  );
};

export default Monthly;
