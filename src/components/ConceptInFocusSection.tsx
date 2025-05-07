import gaiaImage from "../assets/recepnist.png"; // replace with your actual image path

const ConceptInFocusSection = () => {
  return (
    <section className="relative bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin overflow-hidden">
      <div className="w-11/12 mx-auto  px-3 md:px-8 py-10 ">
        {/* Heading */}
        <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <p className="uppercase tracking-widest font-semibold mt-2 text-xs text-gray-700 dark:text-gray-300">
              Concept in focus
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
              Lifestyle concepts, reimagined
            </h2>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mb-6">
          Our creative, yet intricate approach leads to elevated experiences. We
          develop premium dining concepts that showcase the quality and
          progressive nature of the region.
        </p>

        {/* Image and Text Block */}
        <div className="relative flex flex-col md:flex-row bg-white">
          {/* Image Section */}
          <div className="relative md:w-1/2 w-full z-10">
            <img
              src={gaiaImage}
              alt="GAIA"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full bg-[#eaf3f7] dark:bg-gray-900 p-6 md:p-12 flex flex-col justify-center  z-10">
            <h3 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mb-4 relative">
              GAIA
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With the flagship restaurant opening in Dubai in 2018, GAIA has
              since become an internationally renowned hospitality brand name
              with a distinctly loyal following.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Expanding into Europe, GAIA Monaco fast became the most popular
              restaurant in the city. With the successful opening of Doha, the
              GAIA team are preparing for the next international expansions –
              London and Miami.
            </p>
          </div>
        </div>
        {/* Dotted pattern (bottom right) */}

        <div className="hidden md:block absolute -bottom-12 right-9 w-52 h-52 bg-[radial-gradient(#ccc_2.5px,transparent_2.5px)] bg-[length:28px_28px] opacity-80 pointer-events-none z-0" />
      </div>
    </section>
  );
};

export default ConceptInFocusSection;
