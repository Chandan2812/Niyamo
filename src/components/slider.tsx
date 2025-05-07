import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from "lucide-react";
import Box_img1 from "../assets/slider Img/09092021_Izu-Burger-9554-copy.jpg";
import Box_img2 from "../assets/slider Img/BUND-CONCEPT-1.jpg";
import Box_img3 from "../assets/slider Img/GAIA-CONCEPT-1_1.jpg";
import Box_img4 from "../assets/slider Img/GAIA_BeARTpro_167_06.07.21.jpg";
import Box_img5 from "../assets/slider Img/LA-MAISON-ANI-CONCEPT-1.jpg";
import Box_img6 from "../assets/slider Img/LyLa.jpg";
import Box_img7 from "../assets/slider Img/PAGE-5-ALAYA-_.jpg";
import Box_img8 from "../assets/slider Img/SHANGHAI-ME-CONCEPT-1_.jpg";
import Box_img9 from "../assets/slider Img/la-petite-ani-600x600-1.jpg";
import Box_img10 from "../assets/slider Img/maison-de-la-plage-600x600-1.jpg";
import logo1 from "../assets/logos/Alaya.svg";
import logo2 from "../assets/logos/Bund.svg";
import logo3 from "../assets/logos/Gaia.svg";
import logo4 from "../assets/logos/IZU.svg";
import logo5 from "../assets/logos/La-petite-ani-logo.png";
import logo6 from "../assets/logos/Lamaison-ani.svg";
import logo7 from "../assets/logos/Ly-La.svg";
import logo8 from "../assets/logos/NYX.svg";
import logo9 from "../assets/logos/Piatti (1).svg";
import logo10 from "../assets/logos/Shm.svg";
import "../App.css";

const concepts = [
  {
    title: "", // No title needed, just the logo
    image: Box_img1, // Replace with actual path
    logo: logo1,
  },
  {
    title: "LY-LA",
    image: Box_img2,
    logo: logo2, // Text only
  },
  {
    title: "BUND",
    image: Box_img3,
    logo: logo3,
  },
  {
    title: "Example 4",
    image: Box_img4,
    logo: logo4, // Text only
  },
  {
    title: "Example 5",
    image: Box_img5,
    logo: logo5, // Text only
  },
  {
    title: "Example 5",
    image: Box_img6,
    logo: logo6, // Text only
  },
  {
    title: "Example ",
    image: Box_img7,
    logo: logo7, // Text only
  },
  {
    title: "Example 5",
    image: Box_img8,
    logo: logo8, // Text only
  },
  {
    title: "Example 5",
    image: Box_img9,
    logo: logo9, // Text only
  },
  {
    title: "Example 5",
    image: Box_img10,
    logo: logo10, // Text only
  },
];

const HospitalityConcepts: React.FC = () => {
  const sliderRef = useRef<Slider>(null); // Ref to control the slider programmatically
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (_current: number, next: number) => {
      setCurrentSlide(next); // Update the active slide
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to handle dot click and move to the clicked slide
  const handleDotClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Navigate to the clicked slide
    }
    setCurrentSlide(index); // Update the active slide state
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="w-11/12 mx-auto py-10 md:px-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 px-3">
          <div>
            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold uppercase tracking-widest">
              Dubai
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#0C3C5C] dark:text-white mt-2">
              NC Concepts
            </h2>
          </div>

          {/* Button with border and fill-on-hover */}
          <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden w-fit">
            <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
              SEE ALL CONCEPTS <ArrowRight size={16} />
            </span>
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
              style={{ backgroundImage: "var(--bg-primary-gradient)" }}
            ></span>
          </button>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="px-4 focus:outline-none focus:ring-0 focus:border-0 outline-none"
            >
              <img
                src={concept.image}
                alt={concept.title}
                className="w-full h-[450px] object-cover rounded-md shadow-lg"
              />
              <div className="flex justify-center items-center mt-4">
                {concept.logo ? (
                  <img
                    src={concept.logo}
                    alt={concept.title}
                    className="h-8 object-contain"
                  />
                ) : (
                  <p className="text-lg font-semibold tracking-wide">
                    {concept.title}
                  </p>
                )}
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom navigation indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {concepts.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)} // Use the click handler to navigate
              className={`w-4 h-1 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[var(--primary-color)]" // Active dot color
                  : "bg-gray-400 dark:bg-gray-600" // Inactive dot color
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalityConcepts;
