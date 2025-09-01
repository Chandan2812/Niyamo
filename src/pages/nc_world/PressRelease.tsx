import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import uday from "../../assets/Fern Hospitality9098.jpg";
import akshat from "../../assets/Akshat.jpg";

const PressRelease = () => {
  return (
    <div className="bg-white dark:bg-black text-black ">
      <div className="mb-20">
        <Navbar />
      </div>
      <section className="w-11/12 md:w-5/6 mx-auto pt-10 pb-16 px-4 space-y-12 font-serif bg-[#f3e2d2] ">
        {/* Headline */}
        <div className="text-center border-b-4 border-black  pb-6">
          <h2 className="text-xl md:text-4xl  font-extrabold tracking-wide uppercase text-gray-900  mb-4">
            Dubai Based Fern Hospitality Ventures (FHV) Launches $100m Fund
          </h2>
          <p className="text-lg italic text-gray-700 ">
            Initial <span className="text-red-600 font-bold">$100m</span> to be
            invested in high-growth global hospitality sector
          </p>
        </div>

        {/* CEO Quote - Image Right */}
        <div className="grid md:grid-cols-3 gap-6 items-center border-gray-400 pt-8">
          <div className="md:col-span-2  p-6  order-2 md:order-1">
            <h3 className="text-xl font-bold text-black mb-3">CEO QUOTE</h3>
            <blockquote className="border-l-4 border-black pl-4">
              <p className="italic text-lg leading-relaxed text-gray-800">
                “This is a once in a generation moment for hospitality
                investment,” said <strong>Uday Singh</strong>, CEO of Fern
                Hospitality Ventures and the entrepreneur behind global
                successes like OPA and Bagatelle Dubai. “Demand is soaring while
                supply remains limited. Our fund provides early access to the
                next generation of premium leisure and lifestyle concepts as
                they scale across the global social calendar that is driving
                demand from Dubai to New York, and London to Bali.”
              </p>
            </blockquote>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={uday}
              alt="CEO Uday Singh"
              className="w-[240px] rounded shadow-md border border-gray-300"
            />
          </div>
        </div>

        {/* The Fund + Board in Newspaper Columns */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {/* The Fund */}
          <div className="md:col-span-2  p-6 ">
            <h3 className="text-xl font-bold text-black mb-4">THE FUND</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed">
              <li>
                Raised <strong>$15m</strong> in first 24 hours of launching the
                fund
              </li>
              <li>
                Leveraging Dubai’s hospitality success to scale brands worldwide
                as it becomes an exporter of global concepts
              </li>
              <li>
                Offers exposure to technology-led concepts, luxury experiential
                brands and emerging market operators
              </li>
              <li>
                First-of-its-kind fund in global luxury hospitality &amp;
                F&amp;B with a dual return model (cashflow + capital upside from
                real estate)
              </li>
              <li>
                Managed by Dalma Capital, FHV targets{" "}
                <strong>$100m fund size</strong> with projected{" "}
                <strong>20% net return</strong>
              </li>
            </ul>
          </div>

          {/* The Board */}
          <div className="md:col-span-2  p-6  text-black">
            <h3 className="text-xl font-bold text-black mb-4">THE BOARD</h3>
            <p className="mb-4 ">
              Comprising hospitality investment veterans and rising young talent
              in partnership with top global operators. Proven track record of
              successful, high-growth investments.
            </p>

            <div className="space-y-6">
              {/* Uday Singh */}
              <div>
                <h4 className="text-lg font-semibold">Uday Singh</h4>
                <p className="text-gray-700">
                  Hospitality successes include Bagatelle Dubai and a successful
                  exit in 2022, creating a new investor base.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>
                    Opa Dubai (2018) and Opa Mumbai (2022) with further
                    expansion
                  </li>
                  <li>Raised investment for La Nina Dubai in 2023</li>
                </ul>
              </div>

              {/* Akshat Tiberwala */}
              <div>
                <h4 className="text-lg font-semibold">
                  Akshat Tiberwala (Managing Director)
                </h4>
                <p className="text-gray-700">
                  In his early 20’s, Akshat brings a modern, GenZ-rooted
                  perspective and assets in the immediate portfolio.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>
                    Founded <strong>Niyamo Capital</strong> in 2024, deploying
                    capital in early-stage high-growth companies
                  </li>
                  <li>Currently managing assets worth $25m</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4">
          {/* Portfolio Section */}
          <div className="md:col-span-1  p-4 ">
            <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wide">
              Portfolio Post $15m Fund Raise
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-800 leading-relaxed">
              <li>
                <strong>Dorsia</strong> – a revolutionary tech-driven
                reservations platform
              </li>
              <li>
                <strong>16 Charles Street, Mayfair</strong> – Private members
                club combining high-end dining concepts including the famed
                Loulou of Paris
              </li>
              <li>
                <strong>Ramen Me</strong> – New wave consumer-led Disco-dining
                concept successfully launched in Portugal
              </li>
              <li>
                <strong>The Joyce</strong> – Miami-based American dining
              </li>
              <li>
                <strong>Opa, Bali</strong> – An experiential, Greek ‘Made in
                Dubai’ concept that’s become a crowd favourite
              </li>
            </ul>
          </div>

          {/* Rationale Section */}
          <div className="md:col-span-1  p-4 ">
            <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wide">
              Rationale
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed">
              <li>
                Global luxury hospitality industry changed dramatically over the
                last 5 years since Covid…
              </li>
              <li>
                Spending in luxury hospitality expected to grow to{" "}
                <strong>$391B</strong> by 2028 from <strong>$239B</strong> in
                2023
              </li>
              <li>
                Returns in this sector are currently outperforming all others,
                driven by dining being the No.1 consumer spend ahead of retail
                globally
              </li>
              <li>
                Fast-growing, ever-changing sector with new concepts,
                technologies, and destinations emerging every year
              </li>
            </ul>
          </div>

          <div className="md:col-span-1  p-4 ">
            <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wide">
              In Discussion With
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed">
              <li>
                A new ultra-luxury wellness project created by one of the
                industry’s most famous wellness entrepreneurs
              </li>
              <li>
                <strong>Baoli, Bali</strong> – Sunset-to-night luxury beach club
                experience
              </li>
              <li>
                <strong>Zumana, Bali</strong> – Prime beachfront culinary &amp;
                entertainment destination
              </li>
              <li>
                <strong>Bang Cookies</strong> – Social media &amp;
                influencer-led scalable brand
              </li>
              <li>
                <strong>Bagatelle</strong> – Openings in new emerging locations
              </li>
            </ul>
          </div>

          <div className="md:col-span-1  p-4 ">
            <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wide">
              Fund Strategy
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed">
              <li>
                Creating a diverse portfolio:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Backing early stage culturally relevant brands in food,
                    wellness, and experiential formats
                  </li>
                  <li>Investing in disruptive technology</li>
                  <li>
                    Investing in brands with high levels of social media
                    influence
                  </li>
                  <li>Scalable concepts that can be replicated globally</li>
                  <li>
                    Targeting brands with proven local traction for expansion
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Image with Caption */}
          <div className="flex flex-col items-center order-1">
            <img
              src={akshat}
              alt="Akshat Tiberwala"
              className="w-[340px] rounded-md shadow-lg"
            />
            <p className="mt-3 text-sm text-gray-700 italic text-center">
              Akshat Tiberwala, Managing Director, FHV
            </p>
          </div>

          {/* Quote Article */}
          <div className="md:col-span-2  p-8  order-2">
            <h2 className="text-2xl font-extrabold text-black mb-4 tracking-wide">
              MD Speaks
            </h2>

            <blockquote className="space-y-6 font-serif leading-relaxed text-gray-800">
              <p className="text-lg italic">
                “We invest where global lifestyle trends meet real estate
                investment opportunity,” said <strong>Akshat Tiberwala</strong>,
                Managing Director at FHV. “We back cash-flow-positive brands
                with expansion-ready models and layer in technology to create
                scalable, efficient platforms. Our investments are not only
                about great concepts, but about systems that can grow globally.”
              </p>

              <p className="text-lg italic">
                “Global Hospitality will increasingly be dominated by newer
                generations both as consumers and as operators through the rise
                of social media platforms. Brands are no longer growing linearly
                – they’re growing laterally with the introduction of social
                media to the mix. We can see this as 71% of young visitors use
                social media for restaurant updates and 73% visited restaurants
                in the last 3 months because of social media content.”
              </p>
            </blockquote>
          </div>
        </div>

        {/* Newspaper Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-justify text-gray-800 leading-relaxed px-6">
          {/* Column 1 */}
          <div className="space-y-5">
            <p>
              <strong>Dubai, UAE – Monday 25, 08, 2025 –</strong> Fern
              Hospitality Ventures (FHV), the Dubai-based investment platform
              focused on investing in world-renowned brands on a long-term basis
              while providing annual return and eventual exit, has launched a{" "}
              <strong>$100 million fund</strong> targeting high-yield
              opportunities in the fast-evolving luxury hospitality and
              experiential leisure sector.
            </p>

            <p>
              The fund’s line-up includes serial hospitality entrepreneur{" "}
              <strong>Uday Singh</strong>, who was behind the fundraising of
              award winning concepts like Opa, Bagatelle Dubai and La Nina, as
              well as <strong>Akshat Tiberwala</strong>, one of the youngest
              entrepreneurs rooted in GenZ and the Managing Director of private
              investment vehicle <strong>Niyamo Capital</strong>. The fund is
              managed by <strong>Dalma Capital</strong>, a leading
              DFSA-regulated investment firm.
            </p>

            <p>
              Dubai’s position as a global powerhouse in luxury dining and
              hospitality continues to accelerate, with homegrown concepts now
              setting the benchmark for success on the world stage. Led by
              dynamic entrepreneurs including Uday Singh, whose portfolio has
              shaped the city’s high-end dining landscape, ‘Made in Dubai’
              brands are not only dominating locally but also expanding into key
              international markets.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <p>
              This is the first of its kind investment fund that focuses on
              global luxury hospitality sectors while offering a{" "}
              <strong>dual return model</strong> that utilises cashflow from
              operations and value creation from global expansion – targeting
              iconic venues/locations, sector disruptors and technology-driven
              innovators. The team also has a track record of achieving returns
              in excess of 30%.
            </p>

            <div>
              <h3 className="text-lg font-bold uppercase mb-2 border-l-4 border-black pl-3">
                Investor Benefits
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>80% dividend distribution on operating income</li>
                <li>
                  Exposure to iconic global brands in early-stage expansion
                </li>
                <li>
                  Asset-backed investments with strong real estate fundamentals
                </li>
                <li>
                  Dual-layer return strategy via operating income and capital
                  appreciation on exit
                </li>
              </ul>
            </div>

            <p>
              There has never been a better time to set up a fund like this as
              fine dining guest demands surge together with the need for
              immersive experiences as well as trends such as{" "}
              <strong>‘Revenge Dining’</strong> becoming more popular. This has
              contributed to the growth of the fine dining market to{" "}
              <strong>$253B in 2025</strong> from <strong>$162B in 2020</strong>
              .
            </p>

            <p>
              Despite the great demand and growth in the luxury hospitality
              sector, technology is still in its early stages. With a dynamic
              strategy and an experienced team at the helm, the fund is built to
              capitalize on the next wave of growth in global lifestyle
              destinations.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold tracking-wide text-gray-900 px-6  mb-5 uppercase">
          Editor’s Note
        </h2>

        <div className="space-y-12 md:columns-2 lg:columns-3 gap-10 font-serif px-6 leading-relaxed text-gray-800 ">
          {/* 1. Clear Strategy */}
          <div className="break-inside-avoid mb-10">
            <h3 className="text-xl font-semibold border-b-2 border-black dark:border-black pb-1 mb-4">
              1. Clarity in a Changing Sector
            </h3>
            <p>
              Targeting global leisure hotspots, the fund’s thesis is driven by
              fine dining being the top spend category among affluent
              travellers. Anchored in scaling proven, high-margin concepts
              across hubs like Dubai, London, and Miami.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>World-famous hospitality brands entering new destinations</li>
              <li>Food, beach clubs, wellness & members-only experiences</li>
              <li>Tech-powered disruptors using AI for forecasting & yield</li>
            </ul>
            <p className="mt-4">
              FHV’s team unites operators, technologists & investors with proven
              growth strategies.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Dubai:</strong>{" "}
                <span className="text-[var(--secondary-color)] font-bold">
                  17.15M visitors (+19% YoY)
                </span>
              </li>
              <li>
                <strong>London:</strong> Luxury tier recovering strongly
              </li>
              <li>
                <strong>Bali:</strong> Surpassed pre-pandemic levels
              </li>
              <li>
                <strong>Miami:</strong> Above 2019 benchmarks
              </li>
            </ul>
          </div>

          {/* 2. GenZ */}
          <div className="break-inside-avoid mb-10">
            <h3 className="text-xl font-semibold border-b-2 border-[var(--secondary-color)] pb-1 mb-4">
              2. GenZ: The Future of Hospitality
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-bold text-black">79%</span> dine out 5+
                times a month
              </li>
              <li>
                <span className="font-bold text-black">88%</span> follow travel
                influencers
              </li>
              <li>
                <span className="font-bold text-black">73%</span> pay more for
                sustainable options
              </li>
            </ul>

            <div className="mt-6 border-l-4 border-[var(--secondary-color)] pl-4 italic text-gray-700 ">
              “Snackification” and TikTok-driven discovery are reshaping
              hospitality,{" "}
              <span className="font-semibold">
                74% of diners choose venues based on social media.
              </span>
            </div>
          </div>

          {/* 3. Growth Dynamics */}
          <div className="break-inside-avoid mb-10">
            <h3 className="text-xl font-semibold border-b-2 border-black pb-1 mb-4">
              3. Growth Dynamics
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Fine dining valued at{" "}
                <span className="font-bold text-black">€28B</span>
              </li>
              <li>
                Culinary tourism:{" "}
                <span className="font-bold text-black">$11B</span> (+20%
                annually)
              </li>
              <li>
                Luxury leisure spend to hit{" "}
                <span className="text-black font-bold">$391B</span> by 2028
              </li>
            </ul>

            <div className="mt-6   border border-gray-200 dark:border-gray-600 p-4 rounded">
              <h4 className="font-semibold mb-2">Bleisure & Digital Nomads</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold text-black">60%</span> extend trips
                  for leisure
                </li>
                <li>
                  Market hit <span className="font-bold text-black">$430B</span>{" "}
                  in 2024
                </li>
                <li>
                  Expected to reach{" "}
                  <span className="font-bold text-black">$731B</span> by 2032
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Fern Hospitality Ventures */}
          <div className=" p-6 rounded-xl shadow-md border dark:border-gray-800 border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-black ">
              About Fern Hospitality Ventures
            </h2>
            <p className="leading-relaxed text-gray-800 ">
              Fern Hospitality Ventures is an investment platform based in
              Dubai, targeting premium hospitality, wellness, experiential
              F&amp;B, and tech-driven lifestyle brands. Its focus is on scaling
              culturally relevant, real estate-backed assets in high-growth
              destinations across the globe.
            </p>
          </div>

          {/* Media Enquiries */}
          <div className=" p-6 rounded-xl shadow-md border dark:border-gray-800 border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-black ">
              Media Enquiries
            </h2>
            <p className="text-gray-800 ">
              James Henderson |{" "}
              <a
                href="tel:+971504714080"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                +971 50 471 4080
              </a>{" "}
              |{" "}
              <a
                href="mailto:james@JBH-PR.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                james@JBH-PR.com
              </a>
            </p>
            <p className="mt-2 text-gray-800 ">
              Mohammad Aldaejy |{" "}
              <a
                href="tel:+971585405177"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                +971 58 540 5177
              </a>{" "}
              |{" "}
              <a
                href="mailto:mohammed@JBH-PR.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                mohammed@JBH-PR.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressRelease;
