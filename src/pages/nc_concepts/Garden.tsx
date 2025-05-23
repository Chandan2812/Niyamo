import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const Garden: React.FC = () => {
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white  font-light dark:font-thin">
      <Navbar />
      <section className="w-11/12 mx-auto py-28 px-4 md:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          24 & 30 Sussex Gardens
        </h1>

        {/* Concept Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            OYO Townhouse 30 Sussex Hotel, London Paddington{" "}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed mb-4">
            Located in the heart of London's vibrant Paddington district, OYO
            Townhouse 30 Sussex Hotel offers a perfect blend of comfort,
            convenience, and affordability. Just a short stroll from Hyde Park
            and the iconic Paddington Station, this 3-star hotel is an ideal
            choice for both business and leisure travelers seeking easy access
            to London's top attractions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/2d813aefe1471af8.jpeg"
              alt="BKC concept 1"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/9dd1532a6eaa5415.jpeg"
              alt="BKC concept 2"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/45a32831799c6e7a.jpeg"
              alt="BKC concept 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/4c618879fe13a5be.jpg"
              alt="Cuisine 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              OYO Townhouse 30 Sussex Hotel, London Paddington
            </h2>
            <p className="text-sm leading-relaxed">
              Experience the charm of London while enjoying the comfort and
              convenience of OYO Townhouse 30 Sussex Hotel. With its prime
              location, modern amenities, and exceptional service, it's the
              perfect base for exploring the city's rich history and vibrant
              culture.
            </p>
          </div>
        </div>

        {/* Design Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Design</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-3xl">
            The hotel boasts 13 well-appointed rooms, each featuring air
            conditioning, flat-screen TVs, free Wi-Fi, and private bathrooms
            with complimentary toiletries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/b1518190f2c6e81c.JPG"
              alt="Design 1"
              className="h-full object-cover rounded"
            />
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/3bfcad8f96411022.jpg"
              alt="Design 2"
              className="h-full object-cover rounded"
            />
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/764bca50f0a4820d.jpg"
              alt="Design 3"
              className="h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
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
      <Footer />
    </div>
  );
};

export default Garden;
