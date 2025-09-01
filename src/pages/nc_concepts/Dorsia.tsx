import React, { useEffect } from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Dorsia: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white font-light">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/BtXXWI5hmEcY9EeE8WyRVGu8.jpg')",
        }}
      >
        <div className="absolute inset-0 dark:bg-black/50 bg-black/10"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dorsia
          </h1>
          {/* <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A modern concierge redefining luxury dining through technology,
            exclusivity, and global reach.
          </p> */}
          <a
            href="https://www.dorsia.com/"
            className="mt-6 inline-block px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Explore
          </a>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A Modern Concierge for Luxury Dining
        </h2>
        <p
          className="text-gray-600 dark:text-gray-400 text-base mb-2  text-justify font-serif"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span className="font-semibold">Dorsia</span> is a members-only dining
          network offering guaranteed access to sought-after tables in the
          world’s most vibrant culinary destinations, with privileged entry to
          exclusive events, seasonal pop-ups, and a curated social diary.
        </p>
        <p
          className="text-gray-600 dark:text-gray-400 text-base mb-6 text-justify font-serif"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          By partnering directly with top-tier restaurants, Dorsia secures
          peak-time reservations with guaranteed minimum spends, ensuring
          exceptional experiences for diners and meaningful value for
          restaurants.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img
            src="https://framerusercontent.com/images/0GGQrhMI0xTOtf9XNoY5CPHHq8.jpg?scale-down-to=2048"
            alt="Dining 1"
            className="w-full h-64 object-cover rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <img
            src="https://framerusercontent.com/images/6sk3M25yiTD2BsaiWnnZAnqJM.jpg"
            alt="Dining 2"
            className="w-full h-64 object-cover rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <img
            src="https://framerusercontent.com/images/GfCCHBhlwBouXSNk534AYwiFbw.jpg"
            alt="Dining 3"
            className="w-full h-64 object-cover rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay="800"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className=" py-12">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div
              className="bg-gray-50 text-gray-800 dark:text-white dark:bg-[var(--secondary-color)] rounded-xl py-8 px-4 shadow-lg"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <h3 className="font-semibold text-xl mb-3">
                Curated Access to High-Demand Tables
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif">
                Direct access to exclusive peak-time reservations, without
                resellers or mark-ups.
              </p>
            </div>
            <div
              className="bg-gray-50 text-gray-800 dark:text-white dark:bg-[var(--secondary-color)] rounded-xl p-8 shadow-lg"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <h3 className="font-semibold text-xl mb-3">
                Tiered Membership Options
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif">
                From basic to premium tiers, with dining credits and exclusive
                perks.
              </p>
            </div>
            <div
              className="bg-gray-50 text-gray-800 dark:text-white dark:bg-[var(--secondary-color)] rounded-xl p-8 shadow-lg"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <h3 className="font-semibold text-xl mb-3">
                Dynamic Pricing & Smart Booking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif">
                Data-driven booking tools enhance availability and optimise
                spend.
              </p>
            </div>
            <div
              className="bg-gray-50 text-gray-800 dark:text-white dark:bg-[var(--secondary-color)] rounded-xl p-8 shadow-lg"
              data-aos="flip-left"
              data-aos-delay="800"
            >
              <h3 className="font-semibold text-xl mb-3">
                Exclusive Benefits & VIP Experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif">
                Privileged access to seasonal pop-ups, curated events, and VIP
                treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 w-11/12 md:w-5/6 mx-auto text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Global Reach
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif">
          <span className="font-semibold">Dorsia</span> operates in cities such
          as{" "}
          <span className="font-semibold">
            Miami, Aspen, Cannes, and St Tropez,
          </span>{" "}
          with strong investor backing and offices in{" "}
          <span className="font-semibold">Miami, London, LA, and NYC</span>.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Miami", "Aspen", "Cannes", "St Tropez"].map((city, i) => (
            <div
              key={i}
              className="bg-gray-50 text-gray-800 dark:text-white dark:bg-[var(--secondary-color)] rounded-xl p-6 shadow-md hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay={`${i * 200}`}
            >
              <p className="font-medium text-lg">{city}</p>
            </div>
          ))}
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default Dorsia;
