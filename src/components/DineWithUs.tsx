import React, { useEffect, useRef, useState } from "react";
import dinningImage from "../assets/hero2.svg";
import { ArrowRight } from "lucide-react";

const DiningExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [guests, setGuests] = useState(0);
  const [venues, setVenues] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue(setGuests, 346000, 1000);
          animateValue(setVenues, 26, 1000);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateValue = (
    setter: (value: number) => void,
    target: number,
    duration: number
  ) => {
    const start = 0;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter(Math.floor(current));
    }, stepTime);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin relative overflow-hidden"
    >
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-3 md:px-8 py-16">
        {/* Text Content */}
        <div className="z-10">
          <div className=" mb-2">
            <p className="uppercase tracking-widest font-semibold mt-2 text-xs text-gray-700 dark:text-gray-300">
              Dine With Us
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
            An elevated dining experience in each and every restaurant
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base mb-8 mt-4">
            With innovation and excellence at our core, we strive to exceed
            expectations with every guest. Our restaurant and nightlife venues
            are dynamic – where we understand every moving part of an
            unforgettable experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x border-t border-gray-300 mb-8">
            <div className="py-4 sm:pr-6">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">
                We Have
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-4xl font-sans font-semibold">
                {guests.toLocaleString()}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Guests dining with us every month.
              </p>
            </div>
            <div className="py-4 sm:pl-6">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">
                Choose From
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-4xl font-semibold font-sans">
                {venues}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Restaurants and nightlife venues around the world.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
            <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
              Make A Reservation <ArrowRight size={16} />
            </span>
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
              style={{ backgroundImage: "var(--bg-primary-gradient)" }}
            ></span>
          </button>
        </div>

        {/* Image with dotted background */}
        <div className="relative w-full h-full z-10">
          <div className="absolute top-10 right-6 w-full h-full bg-[radial-gradient(#ccc_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
          <div className="absolute right-10 top-44 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[#eaf3f7] dark:bg-gray-900 z-0"></div>
          <img
            src={dinningImage}
            alt="Dining"
            className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DiningExperienceSection;
