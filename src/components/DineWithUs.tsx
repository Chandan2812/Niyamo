import React from "react";
import diningImage from "../Assets/hero2.svg"; // Replace with your actual image import

const DiningExperienceSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="z-10">
          <div className="border-t-2 border-gray-300 w-max mb-2">
            <p className="uppercase text-xs tracking-widest font-semibold mt-2 text-gray-700">
              Dine With Us
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl text-[#1A365D] font-semibold leading-snug mb-6">
            An elevated dining experience in each and every restaurant
          </h2>
          <p className="text-gray-700 text-base mb-8">
            With innovation and excellence at our core, we strive to exceed
            expectations with every guest. Our restaurant and nightlife venues
            are dynamic – where we understand every moving part of an
            unforgettable experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x border-t border-gray-300 mb-8">
            <div className="py-4 sm:pr-6">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                We Have
              </p>
              <p className="text-[#1A365D] text-4xl font-semibold">346,000</p>
              <p className="text-gray-700 text-sm">
                Guests dining with us every month.
              </p>
            </div>
            <div className="py-4 sm:pl-6">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                Choose From
              </p>
              <p className="text-[#1A365D] text-4xl font-semibold">26</p>
              <p className="text-gray-700 text-sm">
                Restaurants and nightlife venues around the world.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#0071CE] text-white text-xs uppercase font-semibold tracking-widest px-6 py-3 flex items-center group hover:bg-[#005fa3] transition-all">
            Make a Reservation
            <span className="ml-3 bg-white text-[#0071CE] p-1 border border-[#0071CE]">
              →
            </span>
          </button>
        </div>

        {/* Image with dotted background */}
        <div className="relative w-full h-full z-10">
          {/* Dotted pattern */}
          <div className="absolute top-10 right-6 w-full h-full bg-[radial-gradient(#ccc_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />

          {/* Light blue block behind image */}
          <div className="absolute right-10 top-44 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[#eaf3f7] z-0"></div>

          {/* Actual image */}
          <img
            src={diningImage}
            alt="Dining"
            className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DiningExperienceSection;
