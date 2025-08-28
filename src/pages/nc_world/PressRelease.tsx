import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import NewsSubscribeSection from "../../components/Newsletter";

const PressRelease = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-10">
        {/* Headline */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Dubai Based Fern Hospitality Ventures (FHV) Launches Fund To Raise An
          Initial $100m To Invest in High-Growth Global Hospitality Sector
        </h1>

        {/* Quote */}
        <blockquote className="bg-gray-100 border-l-4 border-red-600 p-6 rounded-lg mb-10">
          <p className="italic text-lg text-gray-800 leading-relaxed">
            “This is a once in a generation moment for hospitality investment,”
            said <strong>Uday Singh</strong>, CEO of Fern Hospitality Ventures
            and the entrepreneur behind global successes like OPA and Bagatelle
            Dubai. “Demand is soaring while supply remains limited. Our fund
            provides early access to the next generation of premium leisure and
            lifestyle concepts as they scale across the global social calendar
            that is driving demand from Dubai to New York, and London to Bali.”
          </p>
        </blockquote>

        {/* Fund Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Fund</h2>
          <ul className="list-disc pl-6 space-y-3 ">
            <li>
              Raised <strong>$15m</strong> in first 24 hours of launching the
              fund
            </li>
            <li>
              FHV leverages Dubai’s hospitality success to scale brands
              worldwide as Dubai is becoming an exporter of globally renowned
              brands
            </li>
            <li>
              Fund is being created to give investors exposure to a global
              diverse range of hospitality growth prospects spanning all areas
              of the hospitality sector including technology-led new concepts,
              luxury experiential brands and established brands in new emerging
              destinations
            </li>
            <li>
              This is the first of its kind investment fund that focuses on
              global luxury hospitality and F&amp;B sectors while offering a
              dual return model that utilises cashflow from operations and the
              capital upside from real estate – targeting iconic
              venues/locations, sector disruptors and technology driven
              innovators
            </li>
            <li>
              Dalma Capital to manage Fern Hospitality Ventures, a closed ended
              fund, with a target fund size of <strong>$100m</strong> and
              targeting a net 20% return
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Board Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Board</h2>
          <p className=" mb-6">
            Comprising hospitality sector investment gurus, and young talent in
            partnership with top operators globally. Experienced track record of
            successful investments.
          </p>

          <div className="space-y-6">
            {/* Uday Singh */}
            <div>
              <h3 className="text-xl font-semibold">Uday Singh</h3>
              <p>
                Uday Singh’s hospitality sector success includes Bagatelle Dubai
                and a successful exit in 2022, creating a new investor base.
              </p>
              <ul className="list-disc pl-6 mt-2  space-y-1">
                <li>
                  Opa Dubai in 2018 and Opa, Mumbai in 2022 with growth plans in
                  progress
                </li>
                <li>Raising investment in opening of La Nina Dubai in 2023</li>
              </ul>
            </div>

            {/* Akshat Tiberwala */}
            <div>
              <h3 className="text-xl font-semibold">
                Akshat Tiberwala (Managing Director)
              </h3>
              <p className="">
                In his early 20’s, Akshat brings a young modern perspective and
                insight together with immediate assets included in the
                portfolio.
              </p>
              <ul className="list-disc pl-6 mt-2  space-y-1">
                <li>
                  Set up private investment company{" "}
                  <strong>Niyamo Capital</strong> in 2024, successfully
                  leveraging lucrative funding to deploy in early-stage
                  companies with high growth potential
                </li>
                <li>Currently managing assets under management of $25m</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Portfolio post $15m fund raise
          </h2>
          <ul className="list-disc pl-6  space-y-2">
            <li>
              <strong>Dorsia</strong> – a revolutionary tech-driven reservations
              platform
            </li>
            <li>
              <strong>16 Charles Street, Mayfair</strong> – Private members club
              combining high-end dining concepts including the famed Loulou of
              Paris
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

        {/* In Discussion Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">In Discussion With</h2>
          <ul className="list-disc pl-6  space-y-2">
            <li>
              A new ultra-luxury wellness project created by one of the
              industry’s most famous wellness entrepreneurs
            </li>
            <li>
              <strong>Baoli, Bali</strong> – An encapsulating sunset-to-night
              destination breaking through Bali to cover the demand for a luxury
              beach club experience
            </li>
            <li>
              <strong>Zumana, Bali</strong> – A prime beachfront destination
              that blends premium culinary experience with world-class
              entertainment
            </li>
            <li>
              <strong>Bang Cookies</strong> – Social media, influencer-led and
              scalable brand
            </li>
            <li>
              <strong>Bagatelle</strong> – Openings in new emerging locations
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Fund Strategy */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Fund Strategy</h2>
          <ul className="list-disc pl-6  space-y-2">
            <li>
              Creating a diverse portfolio:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Backing early stage culturally relevant brands in food,
                  wellness and experiential formats
                </li>
                <li>Investing in disruptive technology</li>
                <li>
                  Investing in brands with high levels of social media influence
                </li>
                <li>
                  Scalable concepts that can be replicated across global
                  trend-driven destinations
                </li>
                <li>
                  Targeting brands with proven local traction and ability to
                  expand into emerging hubs
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Rationale */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Rationale</h2>
          <ul className="list-disc pl-6  space-y-2">
            <li>
              Global luxury hospitality industry changed dramatically over the
              last 5 years since Covid and is set to continue evolving – driven
              by the next generation, emerging destinations, and dining
              dominating travel and tourism activities.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Spending in luxury hospitality expected to grow to{" "}
                  <strong>$391B</strong> by 2028 from <strong>$239B</strong> in
                  2023
                </li>
              </ul>
            </li>
            <li>
              Returns in this sector are currently outperforming all others,
              driven by dining being the No.1 consumer spend ahead of retail
              globally.
            </li>
            <li>
              This is a fast-growing, ever-changing sector with new concepts,
              technologies, and destinations emerging every year.
            </li>
          </ul>
        </div>

        <blockquote className="bg-gray-100 border-l-4 border-red-600 p-6 rounded-lg space-y-5">
          <p className="italic text-lg text-gray-800 leading-relaxed">
            “We invest where global lifestyle trends meet real estate investment
            opportunity,” said <strong>Akshat Tiberwala</strong>, Managing
            Director at FHV. “We back cash-flow-positive brands with
            expansion-ready models and layer in technology to create scalable,
            efficient platforms. Our investments are not only about great
            concepts, but about systems that can grow globally.”
          </p>
          <p className="italic text-lg text-gray-800 leading-relaxed">
            “Global Hospitality will increasingly be dominated by newer
            generations both as consumers and as operators through the rise of
            social media platforms. Brands are no longer growing linearly –
            they’re growing laterally with the introduction of social media to
            the mix. We can see this as 71% of young visitors use social media
            for restaurant updates and 73% visited restaurants in the last 3
            months because of social media content.”
          </p>
        </blockquote>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        {/* Intro */}
        <p className=" leading-relaxed">
          <strong>Dubai, UAE – Monday 25, 08, 2025 –</strong> Fern Hospitality
          Ventures (FHV), the Dubai-based investment platform focused on
          investing in world-renowned brands on a long-term basis while
          providing annual return and eventual exit, has launched a{" "}
          <strong>$100 million fund</strong> targeting high-yield opportunities
          in the fast-evolving luxury hospitality and experiential leisure
          sector.
        </p>

        <p className=" leading-relaxed">
          The fund’s line-up includes serial hospitality entrepreneur{" "}
          <strong>Uday Singh</strong>, who was behind the fundraising of award
          winning concepts like Opa, Bagatelle Dubai and La Nina, as well as{" "}
          <strong>Akshat Tiberwala</strong>, one of the youngest entrepreneurs
          rooted in GenZ and the Managing Director of private investment vehicle{" "}
          <strong>Niyamo Capital</strong>. The fund is managed by{" "}
          <strong>Dalma Capital</strong>, a leading DFSA-regulated investment
          firm.
        </p>

        <p className=" leading-relaxed">
          Dubai’s position as a global powerhouse in luxury dining and
          hospitality continues to accelerate, with homegrown concepts now
          setting the benchmark for success on the world stage. Led by dynamic
          entrepreneurs including Uday Singh, whose portfolio has shaped the
          city’s high-end dining landscape, ‘Made in Dubai’ brands are not only
          dominating locally but also expanding into key international markets.
          The UAE has firmly established itself as one of the world’s core
          capitals for luxury dining, generating record revenues year after year
          and fostering the creation of innovative, scalable hospitality brands.
          As part of its strategy, Fern Hospitality Ventures will actively seek
          out brands that have proven themselves and are ready to take their
          concepts global.
        </p>

        {/* Fund Model */}
        <p className=" leading-relaxed">
          This is the first of its kind investment fund that focuses on global
          luxury hospitality sectors while offering a{" "}
          <strong>dual return model</strong> that utilises cashflow from
          operations and value creation from global expansion – targeting iconic
          venues/locations, sector disruptors and technology-driven innovators.
          The team also has a track record of achieving returns in excess of
          30%.
        </p>

        {/* Investor Benefits */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Now open to investors, the fund offers:
          </h3>
          <ul className="list-disc pl-6 space-y-2 ">
            <li>80% dividend distribution on operating income</li>
            <li>Exposure to iconic global brands in early-stage expansion</li>
            <li>
              Asset-backed investments with strong real estate fundamentals
            </li>
            <li>
              Dual-layer return strategy via operating income and capital
              appreciation on exit
            </li>
          </ul>
        </div>

        {/* Market Context */}
        <p className=" leading-relaxed">
          There has never been a better time to set up a fund like this as fine
          dining guest demands surge together with the need for immersive
          experiences as well as trends such as{" "}
          <strong>‘Revenge Dining’</strong> becoming more popular. This has
          contributed to the growth of the fine dining market to{" "}
          <strong>$253B in 2025</strong> from <strong>$162B in 2020</strong>.
          Core luxury hospitality sectors from Dubai to Miami and Bali show huge
          potential and have seen rapid growth over the last 5 years with record
          spend every year, yet operators are still lagging behind because of
          closures, capital restraints and ownership fragmentation. FHV is
          closely monitoring each project and actively working with brands and
          operators to expand and create value.
        </p>

        <p className=" leading-relaxed">
          Despite the great demand and growth in the luxury hospitality sector,
          technology is still in its early stages. With a dynamic strategy and
          an experienced team at the helm, the fund is built to capitalize on
          the next wave of growth in global lifestyle destinations. From
          culturally relevant F&amp;B brands to digitally driven hospitality
          platforms, Fern’s portfolio is positioned at the convergence of rising
          tourism, real estate scarcity, and consumer demand for premium
          experiences.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <h2 className="text-3xl font-bold mb-6">Editor’s Note</h2>

        {/* 1. Clear Strategy */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            1. A Clear Strategy for a Changing Sector
          </h3>
          <p className=" leading-relaxed mb-4">
            Targeting global leisure hotspots, the fund’s investment thesis is
            driven by fine dining being the top spending category within
            affluent travellers and anchored in acquiring & scaling proven,
            high-margin concepts in the most in-demand hospitality hubs. With a
            strong initial pipeline and early-stage access to iconic brands, FHV
            gives investors exposure to new areas, new concepts and cutting-edge
            technology:
          </p>
          <ul className="list-disc pl-6  space-y-2">
            <li>
              World-famous hospitality brands expanding into emerging leisure
              destinations
            </li>
            <li>
              Culturally resonant concepts in food, beach clubs, wellness, and
              members-only experiences
            </li>
            <li>
              Tech-powered disruptors that leverage AI and digital platforms for
              demand forecasting, yield management, and curated guest
              experiences
            </li>
          </ul>
          <p className=" leading-relaxed mt-4">
            FHV’s team brings together veteran operators, technologists, and
            real estate investors with proven ability to unlock growth through
            operational precision and market insight.
          </p>
          <ul className="list-disc pl-6  space-y-2 mt-4">
            <li>
              <strong>Dubai (UAE):</strong> 2023 was a record year with 17.15M
              international visitors (⇑19% YoY), surpassing its 2019 peak
            </li>
            <li>
              <strong>London (UK):</strong> Luxury tier recovered strongly
              post-COVID
            </li>
            <li>
              <strong>Bali (Indonesia):</strong> Surpassed pre-pandemic
              performance
            </li>
            <li>
              <strong>Mykonos (Greece):</strong> Record tourism after reopening
            </li>
            <li>
              <strong>Miami (USA):</strong> Stabilized at above 2019 performance
            </li>
            <li>
              <strong>Tulum (Mexico):</strong> Rapidly grown into a premium
              hotspot
            </li>
          </ul>
        </div>

        {/* 2. GenZ */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            2. GenZ: The Future of Hospitality
          </h3>
          <ul className="list-disc pl-6  space-y-2">
            <li>79% dine out 5+ times per month</li>
            <li>88% follow travel influencers on TikTok & Instagram</li>
            <li>
              89% prioritise travel as a top financial priority – 29% of income
              spent on travel
            </li>
            <li>52% prioritise experiences over material possessions</li>
            <li>73% willing to pay more for sustainable options</li>
            <li>
              “Snackification phenomenon” creates new engagement opportunities
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6">
            The Digital Discovery Era
          </h4>
          <ul className="list-disc pl-6  space-y-2">
            <li>74% of diners choose venues based on social content</li>
            <li>
              TikTok videos under 30s achieve double completion rates vs. Reels
            </li>
            <li>
              Fewer than 5% of upscale restaurants use AI booking tools or
              dynamic pricing
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6">
            Experiential & Immersive Formats
          </h4>
          <ul className="list-disc pl-6  space-y-2">
            <li>Multi-sensory dining, chef’s tables, themed events rising</li>
            <li>
              Hybrid venues combining dining + co-working + art + wellness
              gaining traction
            </li>
            <li>Hotels with unique dining see +10% F&B revenues</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6">
            Sustainability as Luxury’s New Status Symbol
          </h4>
          <p className=" leading-relaxed">
            Eco-responsibility, ethical sourcing, and community collaborations
            are now premium differentiators. Operators embedding sustainability
            into their DNA win loyalty & advocacy.
          </p>

          <h4 className="text-lg font-semibold mt-6">
            Tech as the Next Hospitality Frontier
          </h4>
          <p className=" leading-relaxed">
            AI-driven demand forecasting, personalised guest journeys, and
            digital membership models like Dorsia are redefining exclusivity
            while driving operational efficiency.
          </p>
        </div>

        {/* 3. Growth Dynamics */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. Growth Dynamics</h3>
          <p className=" mb-4">
            The fund is being created at a time when top-tier leisure markets
            are enjoying record revenues and returns globally.
          </p>
          <ul className="list-disc pl-6  space-y-2">
            <li>Fine market dining now valued at €28B globally</li>
            <li>Culinary tourism is an $11B market growing at 20% annually</li>
            <li>
              Global luxury travel & tourism expected to reach{" "}
              <strong>$3 Trillion</strong> in next 5 years
            </li>
            <li>
              Global spending on luxury leisure hospitality projected to grow to{" "}
              <strong>$391B</strong> by 2028 (from $239B in 2023)
            </li>
            <li>
              HNWIs expected to double spend from $80B → $154B over next 3 years
            </li>
            <li>Guests now stay longer & spend more on dining vs. hotels</li>
            <li>
              Global hospitality brands emerging with flagship cities + seasonal
              pop-ups (NYC, Dubai, St. Barts, Courchevel, St. Tropez, Mykonos)
            </li>
            <li>Entertainment, experiences & social cachet driving demand</li>
            <li>GenZ expected to account for 40% of global spending by 2030</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6">
            Bleisure and Digital Nomadism
          </h4>
          <ul className="list-disc pl-6  space-y-2">
            <li>60% of corporate travelers extend trips for leisure</li>
            <li>Global bleisure market reached $430B in 2024</li>
            <li>Expected to reach $731.4B by 2032 (8.9% CAGR)</li>
            <li>
              84% of travelers want to include vacation time in business trips
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* About Fern Hospitality Ventures */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            About Fern Hospitality Ventures
          </h2>
          <p className=" leading-relaxed">
            Fern Hospitality Ventures is an investment platform based in Dubai,
            targeting premium hospitality, wellness, experiential F&amp;B, and
            tech-driven lifestyle brands. Its focus is on scaling culturally
            relevant, real estate-backed assets in high-growth destinations
            across the globe.
          </p>
        </div>

        {/* About Dalma Capital */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Dalma Capital</h2>
          <p className=" leading-relaxed">
            Dalma Capital is a leading global investment firm based in the Dubai
            International Financial Centre (DIFC) and regulated by the Dubai
            Financial Services Authority (DFSA). Managing over{" "}
            <strong>$10 billion</strong> in mandates, Dalma specializes in
            private equity, credit, and real assets.
          </p>
        </div>

        {/* Media Enquiries */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Media Enquiries</h2>
          <p className="">
            James Henderson |{" "}
            <a href="tel:+971504714080" className="text-blue-600 underline">
              +971 50 471 4080
            </a>{" "}
            |{" "}
            <a
              href="mailto:james@JBH-PR.com"
              className="text-blue-600 underline"
            >
              james@JBH-PR.com
            </a>
          </p>
          <p className=" mt-2">
            Mohammad Aldaejy |{" "}
            <a href="tel:+971585405177" className="text-blue-600 underline">
              +971 58 540 5177
            </a>{" "}
            |{" "}
            <a
              href="mailto:mohammed@JBH-PR.com"
              className="text-blue-600 underline"
            >
              mohammed@JBH-PR.com
            </a>
          </p>
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default PressRelease;
