import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Charles: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);
  return (
    <div>
      <Navbar />
      <section
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/1bd01e_add9a31017b44a3ab08325667cf1864f~mv2.jpg/v1/fill/w_1751,h_1629,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1bd01e_add9a31017b44a3ab08325667cf1864f~mv2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            16 Charles Street
          </h1>
        </div>
      </section>
      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Concept Section */}
          <div className="mb-16">
            <p
              className=" text-gray-600 dark:text-gray-400 text-base text-justify font-serif"
              data-aos="fade-up"
            >
              During 2021, the team began developing its plans to restore{" "}
              <span className="font-semibold">16 Charles Street</span> to its
              former glory and bring it into public use for everyone to enjoy.
              The new restaurant will be a discreet fine-dining experience
              committed to exceptional quality and the highest standards of
              service. Last year, L16 CS Operations Limited, part of Loulou
              Groupe, successfully applied for a Certificate of Lawfulness for
              the use of the building as a restaurant (Use Class E) and a
              Premises Licence. With the planning use and premises licence now
              in place, the team has recently submitted another application to
              Westminster City Council for Planning and Listed Building
              Consents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div
                className="overflow-hidden rounded"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985977066-O9EM7EDKCSYWTU4WS1R0/Gilles+Malafosse%2C+Claire+Malafosse%2C+Benoit+Darge%CC%81re%2C+Alexandre+Rossoz+%C2%A9+Maxime+Lenik+1.jpg?format=750w"
                  alt="Concept 1"
                  className="w-full h-64 object-cover rounded transform transition duration-500 hover:scale-110 "
                />
              </div>

              <div
                className="overflow-hidden rounded"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985825825-W98KHLYXOIUMSPGZBGDW/DSC_3718.jpg?format=750w"
                  alt="Concept 2"
                  className="w-full h-64 object-cover rounded transform transition duration-500 hover:scale-110 "
                />
              </div>

              <div
                className="overflow-hidden rounded"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615855967211-8DIMWDY166LLLW1TGAPJ/image4.jpg?format=750w"
                  alt="Concept 3"
                  className="w-full h-64 object-cover rounded transform transition duration-500 hover:scale-110 "
                />
              </div>
            </div>
          </div>

          {/* Cuisine Section */}

          <div className="mb-20 grid md:grid-cols-2 gap-14 items-center  mx-auto">
            {/* Left Image */}
            <div
              className="relative w-full h-full z-10"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="absolute top-16 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
              <div className="absolute right-10 top-32 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  z-0"></div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1616079667915-Z9ECTJF2V83YIHPHM13T/thumbnail_IMG_8335.jpeg?format=750w"
                alt="The Charles Street"
                className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                Cuisine
              </h2>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 text-justify font-serif leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="font-semibold">16 Charles Street</span> is
                located in the heart of
                <span className="font-semibold"> Mayfair </span> on the north
                side of Charles Street opposite the junction with Queen Square.
                The area is well-served by a wide range of local businesses and
                is within easy walking distance of Green Park underground
                station. The building is located in the{" "}
                <span className="font-semibold">Mayfair Conservation Area</span>{" "}
                and{" "}
                <span className="font-semibold">
                  The Core Central Activities Zone.
                </span>
              </p>

              {/* CTA Button (optional) */}
              <a href="/contact">
                <button
                  className="relative group flex items-center gap-2 text-[var(--primary-color)] dark:text-white border border-[var(--primary-color)]  text-[12px] px-6 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <span className="z-10 relative flex items-center gap-2 dark:text-[var(--primary-color)] group-hover:text-white transition-colors duration-300 font-light">
                    Contact Us →
                  </span>
                  <span
                    className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                    style={{ backgroundImage: "var(--bg-primary-gradient)" }}
                  ></span>
                </button>
              </a>
            </div>
          </div>

          {/* Design Section */}
          <div className="mb-16">
            <p
              className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Charles Street has character and history, which we are keen to
              preserve and enhance. The building at 16 Charles Street is a Grade
              II listed Georgian property, which dates back to 1753. The
              building has played a significant role in the social history of
              London and was the former home of the high society hostess Dame
              Margaret Greville. Here, Dame Margaret hosted society soirees
              where she entertained politicians, royalty, and celebrities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1616080990956-0M829GKJ9EMO15XEX7JR/LE+FLANDRIN+Terrasse+sans+parasol+%C2%A9AngiaVaudron+1+P7120028.JPG?format=1500w"
                  alt="Design 1"
                  className="w-full h-full object-cover rounded hover:scale-105"
                />
              </div>
              <div
                className="overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986468626-8HLYKDENGO4NG54PYAF8/Le+Flandrin.jpg?format=1500w"
                  alt="Design 2"
                  className="w-full h-full object-cover rounded hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Location
            </h2>
            <div className="border rounded overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.287462186603!2d-0.15003102353006034!3d51.50794197181337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052ec604636f%3A0x64c5b544ed94bc89!2s16%20Charles%20St%2C%20London%20W1J%205BH%2C%20UK!5e0!3m2!1sen!2sin!4v1746703605522!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="16 Charles St, London W1J 5BH, UK"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default Charles;
