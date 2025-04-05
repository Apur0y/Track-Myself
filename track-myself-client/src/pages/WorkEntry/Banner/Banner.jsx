import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // ✅ Added Autoplay
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Optional, for clarity

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full"
   
    >
      <div className=" h-full w-full flex items-center justify-center">
        <Swiper
          
       
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Autoplay enabled
          modules={[Pagination,  Autoplay]}
          className="w-full max-w-4xl px-6"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="text-white text-center p-8">
              <h1 className="text-4xl font-bold mb-4">
                "Push yourself, because no one else is going to do it for you."
              </h1>
              <p className="text-lg mb-6">
                "Discipline is the bridge between goals and accomplishment."
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="text-white  p-8 rounded-xl text-center max-w-xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">
                "Push yourself, because no one else is going to do it for you."
              </h1>
              <p className="text-lg mb-6">
                "Discipline is the bridge between goals and accomplishment."
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                  Be yourself
                </button>
                <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                  ToDo
                </button>
                <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                  Done
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="text-white  p-8 rounded-xl text-center max-w-xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">
                "If you want to be unique, then develop yourself as unique."
              </h1>
              <p className="text-lg mb-6">"Mark my word."</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                  Be yourself
                </button>
                <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                  ToDo
                </button>
                <button className="bg-[#e9372a] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                  Done
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
