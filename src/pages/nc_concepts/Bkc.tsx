import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const Bkc: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="px-4 md:px-12 lg:px-24  text-[#003D5B] py-28">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Biryani Kebab Chai
        </h1>

        {/* Concept Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Bringing authentic Awadhi delights to London
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed mb-4">
            At BKC -– Biryani Kebab Chai, our story is one of passion,
            exploration, and the desire to share the unparalleled tastes of
            Awadhi cuisine with London. Launched in Marble Arch in 2022; and in
            Soho in 2023, our mission remains the same: to celebrate the
            culinary wonders of Lucknow. BKC is on a journey to bring the
            essence of the Desi Delicacies and the legendary Degh to
            Dastarkhwan, evoking a feeling of joy and celebration to your plate.
          </p>
          <a
            href="https://bkclondon.uk/"
            className="text-blue-500 text-sm "
            target="_blank"
            rel="noopener noreferrer"
          >
            https://bkclondon.uk
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/Slider-1-1.png"
              alt="Cipriani concept 1"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/2-1.png"
              alt="Cipriani concept 2"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/3-1.png"
              alt="Cipriani concept 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://bkclondon.uk/wp-content/uploads/2023/08/DSC00189-2400x1600.jpg"
              alt="Cuisine 1"
              className="w-full h-full object-cover rounded"
            />
            {/* <img
              src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/e5a6a702-65fc-4e72-a12f-bd5d83429dbd/IMG_8063.JPG?format=1000w"
              alt="Cuisine 2"
              className="w-full h-full object-cover rounded"
            /> */}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              The dum pukht delight: Lucknowi Biryani at BKC
            </h2>
            <p className="text-sm leading-relaxed">
              At BKC the dishes are thoughtfully curated by our Head Chef – Arsh
              Thakur, following the age old Awadhi cooking techniques using the
              freshest British produce, sourced from the local farms and brought
              straight to your tables. You’l find the soul of Lucknow in our
              expertly prepared Lucknowi Biryani, succulent North Indian kebabs,
              and the comforting warmth of our aromatic chai. Whether you’re in
              search of the best Biryani near you or the best Kathi roll in
              London, BKC London is your gateway to the finest Indian cuisine,
              making it a standout Indian restaurant in Soho and Mayfair,
              London.
            </p>
          </div>
        </div>

        {/* Design Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Design</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-3xl">
            Charles Street has character and history, which we are keen to
            preserve and enhance. The building at 16 Charles Street is a Grade
            II* listed Georgian property, which dates back to 1753. The building
            has played a significant role in the social history of London and
            was the former home of the high society hostess Dame Margaret
            Greville. Here, Dame Margaret hosted society soirees where she
            entertained politicians, royalty and celebrities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/IMG2.jpg"
              alt="Design 1"
              className=" h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/Home-replace3-1.png"
              alt="Design 2"
              className=" h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/attachment-1.png"
              alt="Design 2"
              className=" h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="border rounded overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9659341051693!2d-0.16402052352963883!3d51.51384097181476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053ad1fce285%3A0x679683173f356f02!2sBKC%20-%20Biryani%20Kebab%20Chai%20-%20Marble%20Arch!5e0!3m2!1sen!2sin!4v1746705021018!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="16 Charles St, London W1J 5BH, UK"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Bkc;
