import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";

const Charles: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/1bd01e_add9a31017b44a3ab08325667cf1864f~mv2.jpg/v1/fill/w_1751,h_1629,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1bd01e_add9a31017b44a3ab08325667cf1864f~mv2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            16 Charles Street
          </h1>
        </div>
      </section>
      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Concept Section */}
          <div className="mb-16">
            <p className=" text-md leading-relaxed mb-4 text-justify">
              During 2021, the team began developing its plans to restore 16
              Charles Street to its former glory and bring it into public use
              for everyone to enjoy. The new restaurant will be a discreet
              fine-dining experience committed to exceptional quality and the
              highest standards of service. Last year, L16 CS Operations
              Limited, part of Loulou Groupe, successfully applied for a
              Certificate of Lawfulness for the use of the building as a
              restaurant (Use Class E) and a Premises Licence. With the planning
              use and premises licence now in place, the team has recently
              submitted another application to Westminster City Council for
              Planning and Listed Building Consents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985977066-O9EM7EDKCSYWTU4WS1R0/Gilles+Malafosse%2C+Claire+Malafosse%2C+Benoit+Darge%CC%81re%2C+Alexandre+Rossoz+%C2%A9+Maxime+Lenik+1.jpg?format=750w"
                alt="Concept 1"
                className="w-full h-64 object-cover rounded"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985825825-W98KHLYXOIUMSPGZBGDW/DSC_3718.jpg?format=750w"
                alt="Concept 2"
                className="w-full h-64 object-cover rounded"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615855967211-8DIMWDY166LLLW1TGAPJ/image4.jpg?format=750w"
                alt="Concept 3"
                className="w-full h-64 object-cover rounded"
              />
            </div>
          </div>

          {/* Cuisine Section */}
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-start">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1616079667915-Z9ECTJF2V83YIHPHM13T/thumbnail_IMG_8335.jpeg?format=750w"
                alt="Cuisine 1"
                className="w-full h-full object-cover rounded"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/e5a6a702-65fc-4e72-a12f-bd5d83429dbd/IMG_8063.JPG?format=1000w"
                alt="Cuisine 2"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Cuisine</h2>
              <p className="text-md leading-relaxed text-justify">
                16 Charles Street is located in the heart of Mayfair on the
                north side of Charles Street opposite the junction with Queen
                Square. The area is well-served by a wide range of local
                businesses and is within easy walking distance to Green Park
                underground station. The building is located in the Mayfair
                Conservation Area and the Core Central Activities Zone.
              </p>
            </div>
          </div>

          {/* Design Section */}
          <div className="mb-16">
            <p className="text-md leading-relaxed mb-6 text-justify">
              Charles Street has character and history, which we are keen to
              preserve and enhance. The building at 16 Charles Street is a Grade
              II* listed Georgian property, which dates back to 1753. The
              building has played a significant role in the social history of
              London and was the former home of the high society hostess Dame
              Margaret Greville. Here, Dame Margaret hosted society soirees
              where she entertained politicians, royalty and celebrities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1616080990956-0M829GKJ9EMO15XEX7JR/LE+FLANDRIN+Terrasse+sans+parasol+%C2%A9AngiaVaudron+1+P7120028.JPG?format=1500w"
                alt="Design 1"
                className="w-full h-full object-cover rounded"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986468626-8HLYKDENGO4NG54PYAF8/Le+Flandrin.jpg?format=1500w"
                alt="Design 2"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
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
