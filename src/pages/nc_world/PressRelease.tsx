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
          <h2 className="text-xl   font-extrabold  uppercase text-gray-900  mb-4">
            FERN HOSPITALITY VENTURES, MANAGED OUT OF THE DUBAI INTERNATIONAL
            FINANCIAL CENTRE (DIFC), PREPARES TO RAISE AN INITIAL $100 MILLION
            TO INVEST IN THE HIGH-GROWTH GLOBAL HOSPITALITY SECTOR
          </h2>
          {/* <p className="text-lg italic text-gray-700 ">
            Initial <span className="text-red-600 font-bold">$100m</span> to be
            invested in high-growth global hospitality sector
          </p> */}
        </div>

        {/* CEO Quote - Image Right */}
        <div className="grid md:grid-cols-3 gap-6 items-center border-gray-400 pt-8">
          <div className="md:col-span-2  p-6  order-2 md:order-1">
            <h3 className="text-xl font-bold text-black mb-3">CEO QUOTE</h3>
            <blockquote className="border-l-4 border-black pl-4">
              <p className="italic text-lg leading-relaxed text-gray-800">
                “This is a once in a generation moment for hospitality
                investment,” said <strong>Uday Singh</strong>, Director of Fern
                Hospitality Ventures (The Fund) and the entrepreneur behind
                global successes like OPA and Bagatelle Dubai. “Demand is
                soaring while supply remains limited. Our fund provides early
                access to the next generation of premium leisure and lifestyle
                concepts as they scale across the global social calendar driving
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
                The Fund, a closed-ended investment vehicle targetting $100
                million in commitments and net returns of approximately 20%, is
                managed by Dalma Capital Management Limited, a DFSA-regulated
                fund manager based in the Dubai International Financial Centre
                (DIFC). Ahead of its launch, the Fund has already secured $15
                million in investor commitments.
              </li>
              <li>
                The Fund leverages Dubai’s hospitality success to scale brands
                worldwide, as Dubai increasingly becomes an exporter of globally
                renowned brands.
              </li>
              <li>
                The Fund is being created to provide investors with exposure to
                a globally diverse range of hospitality growth prospects,
                spanning all areas of the hospitality sector including
                technology -led new concepts, luxury experiential brands and
                established players entering new emerging destinations.
              </li>
              <li>
                This is a first -of -its -kind investment fund focused on global
                luxury hospitality and F&B sectors, offering a dual return model
                that utilises cashflow from operations alongside capital upside
                from real estate – targeting iconic venues/locations, sector
                disruptors, and technology -driven innovators.
              </li>
            </ul>
          </div>

          {/* The Board */}
          <div className="md:col-span-2  p-6  text-black">
            <h3 className="text-xl font-bold text-black mb-4 uppercase">
              Leadership
            </h3>
            <p className="mb-4 ">
              The Fund will be guided by an experienced leadership team that
              combines proven hospitality investors with fresh, forward-looking
              perspectives.
            </p>

            <div className="space-y-6">
              {/* Uday Singh */}
              <div>
                <h4 className="text-lg font-semibold">Uday Singh</h4>

                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>
                    Hospitality sector success includes Bagatelle Dubai with a
                    successful exit in 2022 and created subsequent new investor
                    base.
                  </li>
                  <li>
                    Opa Dubai in 2018 and Opa, Mumbai in 2022, with further
                    growth plans underway.
                  </li>
                  <li>
                    Raised investment for the opening of La Niña Dubai in 2023.{" "}
                  </li>
                </ul>
              </div>

              {/* Akshat Tiberwala */}
              <div>
                <h4 className="text-lg font-semibold">Akshat Tiberwala</h4>

                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>
                    Brings a young, modern perspective and portfolio assets that
                    are expected to be included in the Fund.
                  </li>
                  <li>
                    Set up private investment company Niyamo Capital in 2024,
                    deploying capital into early-stage , high-growth companies.
                  </li>
                  <li>
                    Currently managing assets under management of 25 million.{" "}
                  </li>
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
                Loulou Paris
              </li>
              <li>
                <strong>Ramen Me</strong> – new wave consumer-led disco-dining
                concept successfully launched in Portugal
              </li>
              <li>
                <strong>The Joyce</strong> – Miami-based American dining
              </li>
              <li>
                <strong>Opa, Bali</strong> – an experiential, Greek ‘Made in
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
                The global luxury hospitality industry has changed dramatically
                over the last five years since Covid and is expected to continue
                evolving, driven by the next generation, emerging destinations
                and the dominance of dining in travel and tourism activities.
              </li>
              <li>
                Spending in luxury hospitality expected to grow to{" "}
                <strong>391 billion </strong> by 2028 from{" "}
                <strong>239 billion</strong> in 2023
              </li>
              <li>
                Returns in this sector are currently outperforming other
                industries and are expected to continue to be driven by dining,
                which has become the No.1 category of consumer spend globally,
                ahead of. This is a fast -growing and constantly evolving
                sector, with new concepts, technologies and tourist destinations
                every year.
              </li>
            </ul>
          </div>

          <div className="md:col-span-1  p-4 ">
            <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wide">
              Investment in the Pipeline
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
                    o Targeting brands with proven local traction and ability
                    to expand into emerging hubs
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
                investment opportunity,” said <strong>Akshat Tiberwala</strong>.
                “We back cash-flow-positive brands with expansion-ready models
                and layer in technology to create scalable, efficient platforms.
                Our investments are not only about great concepts, but about
                systems that can grow globally.”
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
              <strong>Dubai, UAE – Thursday 28, 08, 2025 –</strong> Fern
              Hospitality Ventures (the “Fund”), is a DIFC managed, Cayman
              Islands -based, investment fund is preparing to launch a $100
              million fund targeting high-yield opportunities in the
              fast-evolving luxury hospitality and experiential leisure sector.
              The fund will focus on investing in world-renowned brands with
              long-term growth potential, while offering investors exposure to
              annual operating returns and eventual exit opportunities.
            </p>

            <p>
              The Fund’s strategy is spearheaded by serial hospitality
              entrepreneur Uday Singh, who was behind the fundraising of award
              -winning concepts such as Opa, Bagatelle Dubai, and La Niña, as
              well as Akshat Tibrewala, a young entrepreneur representing Gen Z,
              who brings portfolio assets and experience from his private
              investment firm, Niyamo Capital. The Fund will be managed by Dalma
              Capital Management Limited, a DFSA-regulated fund manager.
            </p>

            <p>
              Dubai’s position as a global powerhouse in luxury dining and
              hospitality continues to accelerate, with homegrown concepts now
              setting the benchmark for success on the world stage. Led by
              dynamic entrepreneurs including Uday Singh, whose portfolio has
              shaped the city’s high-end dining landscape, ‘Made in Dubai’
              brands are not only dominating locally but also expanding into key
              international markets. The UAE has firmly established itself as
              one of the world’s core capitals for luxury dining, generating
              record revenues year after year and fostering the creation of
              innovative, scalable hospitality brands. As part of its strategy,
              the Fund will actively seek out brands that have proven themselves
              and are ready to take their concepts global.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <p>
              This is the first of its kind investment fund that focuses on
              global luxury hospitality sectors, offering a dual return model
              that will utilise cashflow from operations alongside value
              creation from global expansion – targeting iconic
              venues/locations, sector disruptors and technology driven
              innovators. Once open to investors, the Fund will offer:
            </p>

            <div>
              <ul className="list-disc pl-6 space-y-1">
                <li>80% dividend distribution on operating income.</li>
                <li>
                  Exposure to iconic global brands in early-stage expansion.
                </li>
                <li>
                  Asset-backed investments with strong real estate fundamentals.
                </li>
                <li>
                  A dual-layer return strategy via operating income and capital
                  appreciation upon exit.
                </li>
              </ul>
            </div>

            <p>
              There has never been a better time to launch a Fund like this, as
              fine dining guests’ demands are surging, alongside the growing
              appetite for immersive experience and trends such as ‘Revenge
              Dining’. This has contributed to the growth of the fine dining
              market to go from $162B in 2020 to $253B in 2025 . Core luxury
              hospitality sectors from Dubai to Miami and Bali have shown
              significant potential and rapid growth over the last five years,
              yet operators continue to face challenges including closures,
              capital restraints and fragmented ownership . The Fund will
              closely monitor each project and actively work with brands and
              operators to expand and create value.
            </p>

            <p>
              Despite strong demand and growth in the luxury hospitality sector,
              relevant technologies are still in early stages. With a dynamic
              strategy and an experienced team at the helm, the Fund is designed
              to capitalise on the next wave of growth in global lifestyle
              destinations. From culturally relevant F&B brands to digitally
              driven hospitality platforms, the Fund’s portfolio is positioned
              to benefit from rising tourism, real estate scarcity, and consumer
              demand for premium experiences.
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
              1. A Clear Strategy for a Changing Sector targeting global leisure
              hotspots
            </h3>
            <p>
              The fund’s investment thesis is driven by fine dining being the
              top spending category within affluent travellers and is anchored
              in acquiring & scaling proven, high-margin concepts in the most
              in-demand hospitality hubs. With a strong initial pipeline and
              early-stage access to iconic brands, FHV gives investors exposure
              to new areas, new concepts and cutting-edge technology:.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                World-famous hospitality brands expanding into emerging leisure
                destinations.
              </li>
              <li>
                Culturally resonant concepts in food, beach clubs, wellness, and
                members-only experiences.
              </li>
              <li>
                Tech-powered disruptors that leverage AI and digital platforms
                for demand forecasting, yield management, and curated guest
                experiences.
              </li>
            </ul>
            <p className="mt-4">
              FHV's team brings together veteran operators, technologists, and
              real estate investors with a proven ability to unlock growth
              through operational precision and market insight.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Dubai: </strong>
                <span className="text-[var(--secondary-color)]">
                  Dubai’s luxury hospitality sector has reached new heights.
                  2023 was a record year, with Dubai welcoming 17.15 million
                  international visitors (⇑19% YoY), finally surpassing its
                  previous 2019 peak
                </span>
              </li>
              <li>
                <strong>London:</strong> London’s hotel industry suffered during
                COVID but has rebounded strongly, especially in the luxury tier.
                By 2023, performance had fully recovered and even exceeded
                historical norms.
              </li>
              <li>
                <strong>Bali:</strong> Bali’s luxury hospitality sector has not
                only rebounded but surpassed pre-pandemic performance.
              </li>
              <li>
                <strong> Mykonos (Greece):</strong> Mykonos – a marquee Aegean
                luxury hotspot – saw record tourism after reopening.
              </li>

              <li>
                <strong> Miami (USA): </strong> Miami’s hospitality market
                experienced a pandemic-era boom and has since stabilized at
                above 2019 performance.
              </li>
              <li>
                <strong> Tulum: </strong>Tulum, a boutique luxury destination on
                Mexico’s Riviera Maya, has grown rapidly into a premium hotspot.
              </li>
            </ul>
          </div>

          {/* 2. GenZ */}
          <div className="break-inside-avoid mb-10">
            <h3 className="text-xl font-semibold border-b-2 border-[var(--secondary-color)] pb-1 mb-4">
              2. GenZ: The Future of Hospitality
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <span className="font-bold text-black">79%</span> dine out 5+
                times a month
              </li>
              <li>
                <span className="font-bold text-black">88%</span> follow travel
                influencers, turning TikTok and Instagram into the new booking
                engines.
              </li>
              <li>
                <span className="font-bold text-black">89%</span> of younger
                generations prioritizing travel as a top financial priority.
                This translates into frequent engagement: 79% dine out five or
                more times per month, significantly outpacing older generations.
              </li>
              <li>
                <span className="font-bold text-black"> 52% </span>
                prioritizing experiences over material possessions and
                allocating an average of 29% of their income to travel.
              </li>
              <li>
                <span className="font-bold text-black"> 73% </span>
                are willing to pay more for sustainable options.
              </li>
              <li>
                Experience beats ownership – 52% prioritise experiences over
                material goods.
              </li>
              <li>
                "snackification phenomenon" has created new opportunities for
                hospitality brands to engage consumers throughout the day rather
                than during traditional meal periods.
              </li>
            </ul>

            <h3 className="text-lg font-semibold  pb-1 mb-2">
              The Digital Discovery Era
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>74% of diners choose venues based on social content.</li>
              <li>
                TikTok videos under 30 seconds achieve double the completion
                rate of similar Instagram Reels.
              </li>
              <li>
                Yet fewer than 5% of upscale restaurants use dynamic pricing or
                AI booking tools – leaving significant revenue untapped.
              </li>
            </ul>
            <h3 className="text-lg font-semibold  pb-1 mb-2">
              Experiential & Immersive Formats on the Rise
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Multi-sensory dining experiences, chef’s tables, themed events,
                and hyperlocal storytelling are becoming must-haves.
              </li>
              <li>
                Hybrid venues that combine dining with co-working, art, and
                wellness are capturing more guest touchpoints.
              </li>
              <li>
                Hotels offering unique dining concepts see 10% higher F&B
                revenues than traditional formats.
              </li>
            </ul>

            <h3 className="text-lg font-semibold  pb-1 mb-2">
              Sustainability as Luxury’s New Status Symbol
            </h3>
            <p className="mb-4">
              Eco-responsibility, ethical sourcing, and community collaborations
              are now premium differentiators. The new ge values-first approach
              means operators that embed sustainability authentically into their
              brand DNA win loyalty and advocacy.
            </p>
            <h3 className="text-lg font-semibold  pb-1 mb-2">
              Tech as the Next Hospitality Frontier
            </h3>
            <p>
              AI-driven demand forecasting, personalised guest journeys, and
              digital membership models like Dorsia are redefining exclusivity
              while driving operational efficiency.
            </p>
          </div>

          {/* 3. Growth Dynamics */}
          <div className="break-inside-avoid mb-10">
            <h3 className="text-xl font-semibold border-b-2 border-black pb-1 mb-4">
              3. Growth Dynamics
            </h3>
            <p>
              The fund is being created at a time when top tier leisure markets
              are enjoying record revenues and returns globally
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fine market dining now valued at 28B Euros globally</li>
              <li>Culinary tourism is an $11B market growing at 20% a year</li>
              <li>
                The global luxury travel and tourism market is expected to reach
                $3 Trillion of revenue over the next five years
              </li>
              <li>
                Global spending on luxury leisure hospitality projected to grow
                to $391B by 2028 (2023 $239B)
              </li>
              <li>
                Guests travelling now stay longer and spend more on dining
                experience than hotels
              </li>
              <li>
                Global hospitality brands are emerging that combine fixed venues
                in cornerstone cities like New York or Dubai with global
                seasonal pop ups in destinations like St. Barts, Courchevel, St.
                Tropez and Mykonos
              </li>
              <li>Entertainment, experience and social cachet drive demand</li>
              <li>
                GenZ a key audience and by 2030 expected to account for 40% of
                global spending
              </li>
            </ul>

            <div className="mt-6   border border-gray-200 dark:border-gray-600 p-4 rounded">
              <h4 className="font-semibold mb-2">Bleisure & Digital Nomads</h4>
              <p>
                Bleisure travel (business-leisure combination) has exploded in
                popularity:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>60% of corporate travelers extend trips for leisure</li>
                <li>Global bleisure market reached $430 billion in 2024</li>
                <li>Expected to reach $731.4 billion by 2032 (8.9% CAGR)</li>
                <li>
                  84% of travelers want to include vacation time in business
                  trips
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
              Fern Hospitality Ventures is an investment fund based in the
              Cayman Islands and managed in DIFC, targeting premium hospitality,
              wellness, experiential F&B, and tech-driven lifestyle brands. Its
              focus is on scaling culturally relevant, real estate-backed assets
              in high-growth destinations across the globe.
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
