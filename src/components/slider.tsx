import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from "lucide-react";
import Box_img1 from "../Assets/slider Img/09092021_Izu-Burger-9554-copy.jpg";
import Box_img2 from "../Assets/slider Img/BUND-CONCEPT-1.jpg";
import Box_img3 from "../Assets/slider Img/GAIA-CONCEPT-1_1.jpg";
import Box_img4 from "../Assets/slider Img/GAIA_BeARTpro_167_06.07.21.jpg";
import Box_img5 from "../Assets/slider Img/LA-MAISON-ANI-CONCEPT-1.jpg";
import Box_img6 from "../Assets/slider Img/LyLa.jpg";
import Box_img7 from "../Assets/slider Img/PAGE-5-ALAYA-_.jpg";
import Box_img8 from "../Assets/slider Img/SHANGHAI-ME-CONCEPT-1_.jpg";
import Box_img9 from "../Assets/slider Img/la-petite-ani-600x600-1.jpg";
import Box_img10 from "../Assets/slider Img/maison-de-la-plage-600x600-1.jpg";
import logo1 from "../Assets/logos/Alaya.svg";
import logo2 from "../Assets/logos/Bund.svg";
import logo3 from "../Assets/logos/Gaia.svg";
import logo4 from "../Assets/logos/IZU.svg";
import logo5 from "../Assets/logos/La-petite-ani-logo.png";
import logo6 from "../Assets/logos/Lamaison-ani.svg";
import logo7 from "../Assets/logos/Ly-La.svg";
import logo8 from "../Assets/logos/NYX.svg";
import logo9 from "../Assets/logos/Piatti (1).svg";
import logo10 from "../Assets/logos/Shm.svg";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
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

  return (
    <div className="bg-white py-10 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
            Dubai
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0C3C5C] mt-2">
            Fundamental Hospitality Concepts
          </h2>
        </div>
        <button className="hidden md:flex items-center gap-2 bg-[#0070C0] text-white px-4 py-2 text-sm font-semibold">
          SEE ALL CONCEPTS <ArrowRight size={16} />
        </button>
      </div>

      <Slider {...settings}>
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
    </div>
  );
};

export default HospitalityConcepts;
