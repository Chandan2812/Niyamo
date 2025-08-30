import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";

function Thamel() {
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white font-light">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/61/d1/cb/12-teremos-o-menu-a-la.jpg?w=1200&h=-1&s=1')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Thamel</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light">
            Restaurant & Cocktails in Porto, Portugal
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-11/12 md:w-10/12 mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-3/4 h-full z-10">
            <div className="absolute top-20 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
            <div className="absolute right-10 top-32 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  z-0"></div>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/02/b3/b1/o-verao-pede-uma-salada.jpg?w=1400&h=-1&s=1"
              alt="Dining"
              className="relative z-10  object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify">
              Thamel Restaurant & Cocktails in Porto, Portugal, offers a unique
              and diverse culinary experience. The restaurant's philosophy is to
              take its customers on a culinary journey through Nepal, Tibet,
              China, India, and even parts of the American Southwest.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify">
              The menu is a rich fusion of Asian cuisines, featuring traditional
              dishes like Nepalese momos (dumplings), Tibetan soups, and classic
              Chinese and Thai dishes such as Pad Thai and various curries. The{" "}
              <span className="font-semibold">Thamel Thali</span> is a popular
              Nepalese platter that allows you to sample a variety of curries.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify">
              The restaurant also has a strong focus on vegan and vegetarian
              options, with many dishes, including the Thali, available in a
              plant-based version. To complement the food, they offer a
              selection of{" "}
              <span className="font-semibold">signature cocktails</span> made
              with fresh fruits and spices.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify">
              With a cozy atmosphere, friendly staff, and a wide variety of
              flavorful dishes, Thamel is a great choice for those looking to
              explore a diverse range of Asian flavors in the heart of Porto.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Thamel;
