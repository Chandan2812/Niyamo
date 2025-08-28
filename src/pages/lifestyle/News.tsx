import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import image1 from "../../assets/news/2.jpg";
import image2 from "../../assets/news/4.jpg";
import image3 from "../../assets/news/6.jpg";

const newsData = [
  {
    image: image1,
    text: "Premium F&B Is Booming",
  },
  {
    image: image2,
    text: "$1.4T Travel Market Rebound",
  },
  {
    image: image3,
    text: "Growth in High-End Hospitality Spend",
  },
];

const News: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white ">
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
                <p className="text-white text-lg">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default News;
