import React, { useEffect } from 'react';
import img1 from '../assets/bannarphoto/safety-4905023_640.jpg'
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyWeBest = () => {
      useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in milliseconds
              offset: 50,     // Offset (in px) from the original trigger point
              easing: "ease-in-out", // Animation easing function
              once: false,     // Whether animation should happen only once
            });
          }, []);
  return (
    <div className="container mx-auto my-10 px-4">
      <h3 className="text-sm text-gray-500 uppercase mb-2">Why Choose Us</h3>
      <h2 className="text-3xl font-bold mb-8">
        Because we care about your safety..
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg text-center">
            <div className="text-pink-500 text-4xl mb-2">
              <i className="fas fa-mask"></i> {/* Example icon */}
            </div>
            <h3 className="font-bold text-lg flex justify-center items-center"> <FcHighPriority className='text-green-600 text-3xl' /> Ensuring Priority</h3>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg text-center">
            <div className="text-pink-500 text-4xl mb-2">
              <i className="fas fa-phone-alt"></i> {/* Example icon */}
            </div>
            <h3 className="font-bold text-lg">24/7 Support</h3>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg text-center">
            <div className="text-pink-500 text-4xl mb-2">
              <i className="fas fa-pump-soap"></i> {/* Example icon */}
            </div>
            <h3 className="font-bold text-lg">
            Deep solving
            </h3>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg text-center">
            <div className="text-pink-500 text-4xl mb-2">
              <i className="fas fa-hand-paper"></i> {/* Example icon */}
            </div>
            <h3 className="font-bold text-lg flex justify-center items-center "> <MdOutlineHealthAndSafety className='text-green-600 text-3xl' /> Safety</h3>
          </div>
        </div>

        {/* Right Section */}
        <div data-aos="fade-left" className="rounded-lg overflow-hidden">
          <img
            src={img1}
            alt="Safety Ensured"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWeBest;
