import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const Coupette: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="px-4 md:px-12 lg:px-24  text-[#003D5B] py-28">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Coupette Bethnal Green
        </h1>

        {/* Concept Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            One of the best Cocktail Bars in Central London{" "}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed mb-4">
            Coupette, a French-inspired cocktail bar in Bethnal Green, shines as
            one of London's best cocktail bars in East London since its 2017
            opening. Coupettes intimate, soft lighting that dances upon the
            walls, casts shadows that whisper secrets of French romance and
            intrigue. With every step, you're enveloped in an atmosphere of
            allure at this standout cocktail bar and restaurant in London.
            Vintage coins adorning the bar top evoke a sense of nostalgia, while
            modern artwork infuses the space with a playful sophistication. This
            acclaimed spot not only captivates with its setting but also with
            its innovative cocktails, making it a must-visit in London.
          </p>
          <a
            href="https://www.coupette.co.uk/"
            className="text-blue-500 text-sm "
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.coupette.co.uk
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <img
              src="https://static.wixstatic.com/media/fe41f9_702649e8b6aa4d1e82fe470192aef364~mv2.jpg"
              alt="Cipriani concept 1"
              className="w-full h-96 object-cover rounded"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_6900c9bc00ac4705b096d1859135c7bb~mv2.jpg"
              alt="Cipriani concept 2"
              className="w-full h-96 object-cover rounded"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_a864ac7097194e67bfe124dc1f68e424~mv2.jpg/v1/fill/w_800,h_554,q_90,enc_avif,quality_auto/fe41f9_a864ac7097194e67bfe124dc1f68e424~mv2.jpg"
              alt="Cipriani concept 3"
              className="w-full h-96 object-cover rounded"
            />
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://static.wixstatic.com/media/1d4581_b98fcf51e6344e628b653e11da24eac9~mv2.png/v1/fill/w_669,h_469,fp_0.49_0.22,lg_1,q_85,enc_avif,quality_auto/our-cocktail-bars.png"
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
              Discover Our Cocktail Bars and Restaurants in London
            </h2>
            <p className="text-sm leading-relaxed">
              Welcome to Coupette, a beacon of French sophistication and
              culinary heritage. Named after the elegant Coupe glass, a symbol
              of French finesse, Coupette has risen to prominence since its
              opening in summer 2017 in Bethnal Green, securing a spot as one of
              the best cocktail bars in London and ranking number 23 in The
              World’s 50 Best Bars.
            </p>
          </div>
        </div>

        {/* Design Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Cocktail bar and Restaurant, Soho.
          </h2>
          <p className="text-sm leading-relaxed mb-6 max-w-3xl">
            Experience Coupette's sophisticated yet sustainable cocktails. Our
            expert bartenders craft drinks using locally sourced ingredients,
            presenting intricate stories and rich flavours. Immerse yourself in
            French cocktail artistry while championing environmental stewardship
            for an unparalleled drinking experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="https://static.wixstatic.com/media/1d4581_f5fe5812b8b0490f8fa3650912b2ea37~mv2.png/v1/fill/w_457,h_623,al_c,lg_1,q_85,enc_avif,quality_auto/sustainability-coupette.png"
              alt="Design 1"
              className=" h-full object-cover rounded"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_1b5419bb954a4b0283823e65061f871c~mv2.jpg/v1/fill/w_581,h_811,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Calvados%201.jpg"
              alt="Design 2"
              className=" h-full object-cover rounded"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_25b64aa40c07494d813849bc492e5bb4~mv2.jpg/v1/fill/w_500,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC01801_edited.jpg"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2378937973726!2d-0.06170442352879775!3d51.52719637181788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cc5314cf5d1%3A0x86778d55de5a820c!2sCoupette!5e0!3m2!1sen!2sin!4v1746706756972!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="423 Bethnal Grn Rd, London E2 0AN, United Kingdom"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Coupette;
