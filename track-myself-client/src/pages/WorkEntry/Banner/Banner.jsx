import React from 'react';

const Banner = () => {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center text-white px-4"
            style={{
                backgroundImage: "url('/banne')", // Replace with your preferred image
            }}
        >
               <h1 className="text-4xl font-bold mb-4">
                    "Push yourself, because no one else is going to do it for you."
                </h1>
             
            <div className=" bg-opacity-60 p-8 rounded-xl text-center max-w-xl">

                <h1 className="text-4xl font-bold mb-4">
                    "Push yourself, because no one else is going to do it for you."
                </h1>
                
                <p className="text-lg mb-6">
                    "Discipline is the bridge between goals and accomplishment."
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                        Add
                    </button>
                    <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                        ToDo
                    </button>
                    <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                        Done
                    </button>
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
                    "Push yourself, because no one else is going to do it for you."
                </h1>
            
        </div>
    );
};

export default Banner;
