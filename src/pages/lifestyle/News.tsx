import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const newsData = [
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615857862058-BSQJWNSWK8TOUPOQQW1D/Team.jpg?format=750w",
    text: "Niyamo Capital unveils plans for a luxury hospitality venture in Dubai, blending investment innovation with lifestyle excellence.",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/75dac2d4-52e0-4632-90f3-fca7f18222a9/16CS+Event+photos+-+blurred+300322.jpg?format=1500w",
    text: "Niyamo-backed venues receive acclaim, joining the ranks of Dubai's elite dining destinations endorsed by top leadership.",
  },
  {
    image:
      "https://framerusercontent.com/images/rj1r36AyQ0OXSJtnrx5fCCiwM2c.webp?scale-down-to=512",
    text: "Niyamo Capital announces global expansion—over 100 venues in development across key international markets.",
  },
];

const News: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-raleway">
      <Navbar />
      <section className="w-11/12 mx-auto py-20 px-4 md:px-8 mt-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          News
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="relative h-72 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={`News ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                <p className="text-white text-sm font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;
