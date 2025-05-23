import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const Dorsia: React.FC = () => {
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white  font-light dark:font-thin">
      <Navbar />
      <section className="w-11/12 mx-auto py-28 px-4 md:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Dorsia
        </h1>

        {/* Concept Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome To The Dorsia{" "}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed mb-4">
            Perfection in detail: We place great emphasis on ensuring that your
            visit becomes a culinary experience.
          </p>
          <a
            href="https://www.dorsia.com/"
            className="text-[var(--primary-color)] text-sm font-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.dorsia.com/
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/26189TheJoyce_122024_1338_1.jpg"
              alt="BKC concept 1"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/55839TheJoyce_122024_6266.jpg"
              alt="BKC concept 2"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/38694TheJoyce_122024_6462.jpg"
              alt="BKC concept 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/62526TheJoyce_1120244082.jpg"
                alt="Cuisine 1"
                className="w-full h-[400px] object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Text */}
            <div className="md:w-2/3 w-full space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                James Taylor The Chef
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Chef James Taylor has enchanted culinary enthusiasts and food
                critics across the U.S. for over a decade. After training at Le
                Cordon Bleu Chicago, he honed his epicurean skills at Bavette’s
                Bar and Boeuf Steakhouse (Hogsalt Hospitality), followed by
                leadership roles at Michelin-starred Roister (★) and Alinea
                (★★★). Since 2021, James has captivated the discerning palates
                of esteemed private clients, who encouraged him to share his
                talents with the world.
              </p>
            </div>
          </div>
        </div>

        {/* Design Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Design</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-3xl">
            Charles Street has character and history, which we are keen to
            preserve and enhance...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/TV8njQqwQPCOIZlaOWvR_TheJoyce_112024_3876.jpg"
              alt="Design 1"
              className="h-full object-cover rounded"
            />
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/dZCWFGjwT0ehKAEc9h4e_TheJoyce_112024_4005.jpg"
              alt="Design 2"
              className="h-full object-cover rounded"
            />
            <img
              src="https://joyce-restaurant.at/wp-content/uploads/2023/07/img-3-1152x1536-optimized.jpg"
              alt="Design 3"
              className="h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Location Section */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="border rounded overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2766072631443!2d-73.99464552415483!3d40.755940571386994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259240efe06dd%3A0xf66b7cd95f214890!2sThe%20Joyce%20Public%20House!5e0!3m2!1sen!2sin!4v1746710964256!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="315 W 39th St, New York, NY 10018, United States"
            ></iframe>
          </div>
        </div> */}
      </section>
      <Footer />
    </div>
  );
};

export default Dorsia;
