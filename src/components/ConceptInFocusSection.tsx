import gaiaImage from "../Assets/recepnist.png"; // replace with your actual image path

const ConceptInFocusSection = () => {
  return (
    <section className="relative px-4 md:px-16 py-16 bg-white overflow-hidden">
      {/* Heading */}
      <div className="mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 tracking-widest font-medium uppercase mb-2">
            Concept in focus
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#003b5c] leading-tight">
            Lifestyle concepts, reimagined
          </h2>
        </div>
        <p className="text-gray-700 max-w-xl md:mt-2">
          Our creative, yet intricate approach leads to elevated experiences. We
          develop premium dining concepts that showcase the quality and
          progressive nature of the region.
        </p>
      </div>

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
        <div className="md:w-1/2 w-full bg-[#eaf3f7] p-6 md:p-12 flex flex-col justify-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#003b5c] mb-4">
            GAIA
          </h3>
          <p className="text-gray-700 mb-4">
            With the flagship restaurant opening in Dubai in 2018, GAIA has
            since become an internationally renowned hospitality brand name with
            a distinctly loyal following.
          </p>
          <p className="text-gray-700">
            Expanding into Europe, GAIA Monaco fast became the most popular
            restaurant in the city. With the successful opening of Doha, the
            GAIA team are preparing for the next international expansions –
            London and Miami.
          </p>
        </div>
      </div>
      {/* Dotted pattern (bottom right) */}

      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[radial-gradient(#ccc_2.5px,transparent_2.5px)] bg-[length:28px_28px] opacity-80 pointer-events-none z-0" />
    </section>
  );
};

export default ConceptInFocusSection;
