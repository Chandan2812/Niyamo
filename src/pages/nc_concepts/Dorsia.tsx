import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const Dorsia: React.FC = () => {
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white font-light">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/CqOMdh6OAvRBr5oT4vm8s2zp6Y.jpg?scale-down-to=1024')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dorsia</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A modern concierge redefining luxury dining through technology,
            exclusivity, and global reach.
          </p>
          <a
            href="https://www.dorsia.com/"
            className="mt-6 inline-block px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Dorsia ↗
          </a>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          A Modern Concierge for Luxury Dining
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-4">
          Dorsia is a members-only dining network offering guaranteed access to
          sought-after tables in the world’s most vibrant culinary destinations,
          with privileged entry to exclusive events, seasonal pop-ups, and a
          curated social diary.
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-10">
          By partnering directly with top-tier restaurants, Dorsia secures
          peak-time reservations with guaranteed minimum spends — ensuring
          exceptional experiences for diners and meaningful value for
          restaurants.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img
            src="https://framerusercontent.com/images/0GGQrhMI0xTOtf9XNoY5CPHHq8.jpg?scale-down-to=2048"
            alt="Dining 1"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
          <img
            src="https://framerusercontent.com/images/6sk3M25yiTD2BsaiWnnZAnqJM.jpg"
            alt="Dining 2"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
          <img
            src="https://framerusercontent.com/images/GfCCHBhlwBouXSNk534AYwiFbw.jpg"
            alt="Dining 3"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">
                Curated Access to High-Demand Tables
              </h3>
              <p className="text-sm leading-relaxed">
                Direct access to exclusive peak-time reservations, without
                resellers or mark-ups.
              </p>
            </div>
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">
                Tiered Membership Options
              </h3>
              <p className="text-sm leading-relaxed">
                From basic to premium tiers, with dining credits and exclusive
                perks.
              </p>
            </div>
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">
                Dynamic Pricing & Smart Booking
              </h3>
              <p className="text-sm leading-relaxed">
                Data-driven booking tools enhance availability and optimise
                spend.
              </p>
            </div>
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">
                Exclusive Benefits & VIP Experiences
              </h3>
              <p className="text-sm leading-relaxed">
                Privileged access to seasonal pop-ups, curated events, and VIP
                treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 w-11/12 md:w-5/6 mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Global Reach
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-10">
          Dorsia operates in cities such as Miami, Aspen, Cannes, and St Tropez,
          with strong investor backing and offices in Miami, London, LA, and
          NYC.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Miami", "Aspen", "Cannes", "St Tropez"].map((city, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:scale-105 transition"
            >
              <p className="font-medium text-lg">{city}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dorsia;
