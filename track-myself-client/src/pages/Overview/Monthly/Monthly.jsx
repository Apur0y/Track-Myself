import React from 'react';

const Monthly = () => {
    return (
        <div>
            <div className="text-center w-md bg-white p-6 rounded-lg shadow-md  ">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Overview</h2>

  <p className="text-gray-600">
    <span className="font-medium text-gray-700">All Stored Technologies:</span> {60}
  </p>

  <p className="text-gray-600">
    <span className="font-medium text-gray-700">My Gathering So Far:</span> {32}
  </p>

  <p className="text-white font-medium py-2 px-4 rounded-lg bg-green-500 mt-4 inline-block">
    Completation Percentage: {54}%
  </p>
</div>

        </div>
    );
};

export default Monthly;