import React, { useEffect } from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Garden: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);

  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white  font-light ">
      <Navbar />

      <section
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/4f44f19f4a1bb2cf.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            24 & 30 Sussex Gardens
          </h1>
          <a
            href="https://www.oyorooms.com/GB/39338/?utm_source=GMB_GB&utm_medium=Organic&utm_campaign=EN_LDN002&latitude=51.5177018416648&longitude=-0.168721675872803&locale=en"
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

      <section className="w-11/12 mx-auto py-12 px-4 md:px-8">
        {/* Concept Section */}
        <div className="mb-16">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            OYO Townhouse 30 Sussex – Stay in London Paddington
          </h2>
          <p
            className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Situated in the heart of London’s lively{" "}
            <span className="font-semibold">Paddington district</span>, OYO
            Townhouse 30 Sussex combines{" "}
            <span className="italic">modern comfort</span>,
            <span className="italic"> convenience</span>, and{" "}
            <span className="italic">great value</span>. Just a short walk from{" "}
            <span className="font-semibold">Hyde Park</span> and the iconic
            <span className="font-semibold"> Paddington Station</span>, our
            welcoming 3-star hotel is perfectly placed for both{" "}
            <span className="italic">business trips</span> and
            <span className="italic"> leisure getaways</span>, offering easy
            access to London’s most celebrated attractions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/2d813aefe1471af8.jpeg"
                alt="BKC concept 1"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/9dd1532a6eaa5415.jpeg"
                alt="BKC concept 2"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/45a32831799c6e7a.jpeg"
                alt="BKC concept 3"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-24 grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <div
            className="relative w-full h-full z-10"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <div className="absolute top-16 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
            <div className="absolute right-10 top-32 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  z-0"></div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/4c618879fe13a5be.jpg"
              alt="24 & 30 Sussex Gardens"
              className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              OYO Townhouse 30 Sussex Hotel, London Paddington
            </h2>
            <p
              className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Nestled in the lively heart of Paddington, OYO Townhouse 30 Sussex
              Hotel combines modern comfort with timeless charm. Just steps away
              from Hyde Park and Paddington Station, our stylish 3-star retreat
              offers smart amenities, warm hospitality, and unbeatable
              convenience, making it the perfect stay for both business trips
              and London getaways.
            </p>
            {/* Explore Button */}
            <a href="/contact">
              <button
                className="relative group flex items-center gap-2 text-white dark:text-[var(--primary-color)] dark:text-white border border-[var(--primary-color)]  text-[12px] px-6 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="z-10 relative flex items-center gap-2 text-[var(--primary-color)] group-hover:text-white transition-colors duration-300 font-light">
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
            The hotel features 13 thoughtfully designed rooms, each equipped
            with modern comforts including air conditioning, flat-screen TVs,
            complimentary Wi-Fi, and private bathrooms stocked with free
            toiletries, ensuring a relaxing and convenient stay.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/b1518190f2c6e81c.JPG"
                alt="Design 1"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/3bfcad8f96411022.jpg"
                alt="Design 2"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/764bca50f0a4820d.jpg"
                alt="Design 3"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Location</h2>
          <div className="border rounded overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7550433944866!2d-0.1713803235294214!3d51.517709871815676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab45bec61cd%3A0xd6330ee7af126678!2sOYO%20Townhouse%2030%20Sussex%20Hotel%2C%20London%20Paddington!5e0!3m2!1sen!2sin!4v1746708465018!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="30 Sussex Gardens, Tyburnia, London W2 1UL, United Kingdom"
            ></iframe>
          </div>
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default Garden;
