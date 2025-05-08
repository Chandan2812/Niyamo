import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const pressItems = [
  {
    title: "Scalini to open new, more casual restaurant in Dubai Mall",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/08/Scalini-to-open-new-more-casual-restaurant-in-Dubai-Mall.jpg",
    source: "Caterer",
  },
  {
    title: "The London location for Shanghai Me has been revealed",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/08/The-London-location-for-Shanghai-Me-has-been-revealed.jpg",
    source: "Fact",
  },
  {
    title:
      "New nightlife concept La Sombra is opening inside Maison de la Plage",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/08/New-nightlife-concept-La-Sombra-is-opening-inside-Maison-de-la-Plage.jpg",
    source: "Fact",
  },
  {
    title:
      "Going Greek: the hottest new joint in Marbella this spring is Gaia, arriving at the Puente Romano",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/03/Gaia-marbella_olive-press-1.jpg",
    source: "Olive Press",
  },
  {
    title:
      "Restaurateur Evgeny Kuzin says Saudi Arabia is ready for ‘Made in the GCC dining experiences’",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/08/Restaurateur-Evgeny-Kuzin-says-Saudi-Arabia-is-ready-for-%E2%80%98Made-in-the-GCC-dining-experiences-.jpg",
    source: "Arab News",
  },
  {
    title:
      "Restaurateur Evgeny Kuzin says Saudi Arabia is ready for ‘Made in the GCC dining experiences’",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/08/Restaurateur-Evgeny-Kuzin-says-Saudi-Arabia-is-ready-for-%E2%80%98Made-in-the-GCC-dining-experiences-.jpg",
    source: "Arab News",
  },
  {
    title:
      "Restaurateur Evgeny Kuzin says Saudi Arabia is ready for ‘Made in the GCC dining experiences’",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/08/Restaurateur-Evgeny-Kuzin-says-Saudi-Arabia-is-ready-for-%E2%80%98Made-in-the-GCC-dining-experiences-.jpg",
    source: "Arab News",
  },
  {
    title:
      "Restaurateur Evgeny Kuzin says Saudi Arabia is ready for ‘Made in the GCC dining experiences’",
    image:
      "https://fundamentalhospitality.com/wp-content/uploads/2024/08/Restaurateur-Evgeny-Kuzin-says-Saudi-Arabia-is-ready-for-%E2%80%98Made-in-the-GCC-dining-experiences-.jpg",
    source: "Arab News",
  },
  // Add more items as needed
];

const PressPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <Navbar />
      <section className="w-11/12 px-4 md:px-12 lg:px-20 mx-auto py-28">
        <h1 className="text-3xl font-semibold text-center mb-8 text-black dark:text-white">
          Press
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* First 3 medium cards */}
          {pressItems.slice(0, 3).map((item, index) => (
            <PressCard key={index} item={item} size="large" />
          ))}

          {/* Next 2 large cards */}
          {pressItems.length > 4 && (
            <>
              <div className="md:col-span-2">
                <PressCard item={pressItems[3]} size="large" />
              </div>
              <div>
                <PressCard item={pressItems[4]} size="large" />
              </div>
            </>
          )}

          {/* Remaining cards */}
          {pressItems.slice(5).map((item, index) => (
            <PressCard key={index + 5} item={item} size="large" />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

type PressCardProps = {
  item: { title: string; image: string; source: string };
  size: "medium" | "large";
};

const PressCard: React.FC<PressCardProps> = ({ item, size }) => {
  const heightClass = size === "large" ? "h-96" : "h-64";

  return (
    <div className="group relative overflow-hidden rounded shadow-md bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <img
        src={item.image}
        alt={item.title}
        className={`w-full ${heightClass} object-cover transition-transform duration-300 group-hover:scale-105`}
      />
      <div className="p-4">
        <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1">
          {item.source}
        </p>
        <h2 className="text-sm  leading-tight text-black dark:text-white">
          {item.title}
        </h2>
      </div>
    </div>
  );
};

export default PressPage;
