import React, { useState } from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const images = [
  "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985825825-W98KHLYXOIUMSPGZBGDW/DSC_3718.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986468626-8HLYKDENGO4NG54PYAF8/Le+Flandrin.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986536297-645FO9JDEB6V0U9DIDCW/GIRAFE_CREDIT+ADRIEN+DIRAND.jpg?format=1500w",
  // Add your own images here
];

const GroupDining: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-raleway">
      <Navbar />
      <section className="w-11/12 mx-auto py-20 mt-10 md:mt-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Group Dining</h1>
          <p className="text-lg font-medium">
            Reserve an exclusive dining experience for ten or more guests at any
            of our distinguished venues.
          </p>
          <p className="text-sm leading-relaxed">
            Our team works closely with you and our chefs to create bespoke
            menus and elegant setups for every occasion – from birthday
            celebrations to corporate gatherings. Whether it’s an intimate
            private room or a lavish beachfront setup, we craft unforgettable
            dining moments for your group.
          </p>

          <div className="space-y-3">
            <div className="flex items-center border border-[var(--primary-color)] rounded overflow-hidden w-fit">
              <a
                href="mailto:admin@commcommuk.com"
                className="bg-[var(--primary-color)] text-white px-4 py-2 text-sm inline-block"
              >
                admin@commcommuk.com
              </a>

              <button className="bg-white dark:bg-black px-3">
                <ChevronRight className="text-[var(--primary-color)]" />
              </button>
            </div>
            <div className="flex items-center border border-[var(--primary-color)] rounded overflow-hidden w-fit">
              <a
                href="tel:02071250421"
                className="bg-[var(--primary-color)] text-white px-4 py-2 text-sm font-sans inline-block"
              >
                020 7125 0421
              </a>

              <button className="bg-white dark:bg-black px-3">
                <ChevronRight className="text-[var(--primary-color)]" />
              </button>
            </div>
            <a
              href="https://wa.me/020 7125 0421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <FaWhatsapp
                size={48}
                className="bg-[var(--primary-color)] p-2 rounded"
              />
            </a>
          </div>
        </div>

        {/* Right Image Carousel */}
        <div className="relative">
          <img
            src={images[currentImage]}
            alt="Dining experience"
            className="rounded-lg w-full h-[400px] object-cover"
          />
          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-black p-2 rounded-full shadow"
          >
            <ChevronLeft className="text-[var(--primary-color)]" />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-black p-2 rounded-full shadow"
          >
            <ChevronRight className="text-[var(--primary-color)]" />
          </button>
          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImage
                    ? "bg-[var(--primary-color)]"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GroupDining;
