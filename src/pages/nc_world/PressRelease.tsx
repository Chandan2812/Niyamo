import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import uday from "../../assets/Fern Hospitality9098.jpg";
import akshat from "../../assets/Akshat.jpg";

const PressRelease = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* HEADER */}
      <section className="text-center px-6 pt-32 pb-12 border-b-4 border-yellow-400">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          PRESS RELEASE
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-red-500">
          Dubai Based Fern Hospitality Ventures (FHV) Launches Fund To Raise An
          Initial $100m
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          To invest in high-growth global hospitality sector with backing from
          leading investors and managed by Dalma Capital.
        </p>
      </section>

      {/* QUOTE */}
      {/* <section className="max-w-5xl mx-auto px-6 py-12">
        <blockquote className="bg-gray-100 border-l-4 border-red-500 p-6 rounded-lg text-lg italic">
          “This is a once in a generation moment for hospitality investment,”
          said <strong>Uday Singh</strong>, CEO of Fern Hospitality Ventures and
          the entrepreneur behind global successes like OPA and Bagatelle Dubai.
          “Demand is soaring while supply remains limited. Our fund provides
          early access to the next generation of premium leisure and lifestyle
          concepts as they scale across the global social calendar that is
          driving demand from Dubai to New York, and London to Bali.”
        </blockquote>
      </section> */}

      {/* FOUNDER IMAGES */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-12 items-center py-12">
        {/* Left side - Profile */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow text-center">
          <img
            src={uday}
            alt="Uday Singh"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="font-bold text-xl">Uday Singh</h3>
          <p className="text-sm text-gray-700">
            CEO of Fern Hospitality Ventures, entrepreneur behind OPA &
            Bagatelle Dubai.
          </p>
        </div>

        {/* Right side - Statement */}
        <div className="flex items-center">
          <p className="bg-gray-100 border-l-4 border-red-500 p-6 rounded-lg text-lg italic">
            “This is a once in a generation moment for hospitality investment,”
            said <strong>Uday Singh</strong>, CEO of Fern Hospitality Ventures
            and the entrepreneur behind global successes like OPA and Bagatelle
            Dubai. “Demand is soaring while supply remains limited. Our fund
            provides early access to the next generation of premium leisure and
            lifestyle concepts as they scale across the global social calendar
            that is driving demand from Dubai to New York, and London to Bali.”
          </p>
        </div>
      </section>

      {/* FUND HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6 pb-16">
        <div className="bg-yellow-400 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-3">The Fund</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Raised $15m in the first 24 hours of launching</li>
            <li>
              Leveraging Dubai’s hospitality success to scale brands worldwide
            </li>
            <li>
              Exposure to global growth prospects across tech, luxury, and
              emerging destinations
            </li>
          </ul>
        </div>

        <div className="bg-red-500 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-3">Fund Strategy</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              First-of-its-kind global luxury hospitality & F&amp;B investment
              focus
            </li>
            <li>
              Dual return model: cashflow from operations + real estate capital
              upside
            </li>
            <li>Targeting iconic venues, disruptors & technology innovators</li>
            <li>
              Dalma Capital to manage closed-ended fund ($100m, 20% net return)
            </li>
          </ul>
        </div>
      </section>

      {/* TEAM & PORTFOLIO SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6 pb-16">
        {/* TEAM */}
        <div className="bg-green-500 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-3">Team & Track Record</h2>
          <p className="mb-3">
            Comprising hospitality sector investment gurus and young talent in
            partnership with top operators globally, with a proven track record
            of successful investments:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Uday Singh:</strong> Success includes Bagatelle Dubai
              (exit in 2022), Opa Dubai (2018), Opa Mumbai (2022) and raising
              investment for La Nina Dubai (2023).
            </li>
            <li>
              <strong>Akshat Tiberwala:</strong> In his early 20s, brings a
              modern perspective and founded Niyamo Capital (2024) managing
              $25m+ AUM, deploying capital into early-stage high-growth
              companies.
            </li>
          </ul>
        </div>

        {/* PORTFOLIO */}
        <div className="bg-red-400 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-3">Portfolio Post $15m Raise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Dorsia</strong> – tech-driven reservations platform
            </li>
            <li>
              <strong>16 Charles Street, Mayfair</strong> – Private members club
              featuring high-end dining including Loulou of Paris
            </li>
            <li>
              <strong>Ramen Me</strong> – new wave disco-dining concept in
              Portugal
            </li>
            <li>
              <strong>The Joyce</strong> – Miami-based American dining
            </li>
            <li>
              <strong>Opa, Bali</strong> – experiential Greek “Made in Dubai”
              concept
            </li>
          </ul>
        </div>
      </section>
      {/* PIPELINE & STRATEGY */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6 pb-16">
        {/* PIPELINE / DISCUSSIONS */}
        <div className="bg-yellow-500 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-3">In Discussion With</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Ultra luxury wellness project by a globally renowned wellness
              entrepreneur
            </li>
            <li>Baoli, Bali – luxury sunset-to-night beach club experience</li>
            <li>
              Zumana, Bali – beachfront dining + entertainment destination
            </li>
            <li>Bang Cookies – influencer-led, scalable brand</li>
            <li>Bagatelle – expansion into emerging locations</li>
          </ul>
        </div>

        {/* FUND STRATEGY & RATIONALE */}
        <div className="bg-green-600 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-3">Fund Strategy & Rationale</h2>
          <h3 className="font-semibold">Fund Strategy</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              Backing early-stage culturally relevant brands in food, wellness &
              experiential formats
            </li>
            <li>Investing in disruptive technology</li>
            <li>Targeting social media–influenced brands</li>
            <li>
              Scalable concepts with proven local traction & expansion potential
            </li>
          </ul>
          <h3 className="font-semibold">Rationale</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Global luxury hospitality reshaped since Covid; growth driven by
              next-gen travelers & new destinations
            </li>
            <li>
              Luxury hospitality spending projected to grow from $239B (2023) ➝
              $391B (2028)
            </li>
            <li>Dining is now the #1 global consumer spend, ahead of retail</li>
            <li>
              Sector returns currently outperforming all others, fueled by
              innovation & new destinations
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 px-6 pb-12 items-center py-12">
        {/* Left side - Profile */}
        <div className="bg-yellow-100 md:col-span-1 p-6 rounded-lg shadow text-center">
          <img
            src={akshat}
            alt="Akshat Tiberwala"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="font-bold text-xl">Akshat Tiberwala</h3>
          <p className="text-sm text-gray-700">
            Managing Director, Founder of Niyamo Capital, bringing financial
            expertise and Gen-Z investor perspective.
          </p>
        </div>

        {/* Right side - Statement */}
        <div className="flex md:col-span-3 items-center">
          <p className="bg-gray-100 border-l-4 border-red-500 p-6 rounded-lg text-lg italic">
            “We invest where global lifestyle trends meet real estate investment
            opportunity,” said{" "}
            <span className="font-semibold">Akshat Tiberwala</span>, Managing
            Director at FHV. “We back cash-flow-positive brands with
            expansion-ready models and layer in technology to create scalable,
            efficient platforms. Our investments are not only about great
            concepts, but about systems that can grow globally.” <br /> <br />
            “Global Hospitality will increasingly be dominated by newer
            generations both as consumers and as operators through the rise of
            social media platforms. Brands are no longer growing linearly,
            they’re growing laterally with the introduction of social media to
            the mix. We can see this as
            <span className="font-semibold">
              {" "}
              71% young visitors use social media for restaurant updates and 73%
              visited restaurants in the last 3 months because of social media
              content.
            </span>
            ”
          </p>
        </div>
      </section>

      {/* PRESS RELEASE & MARKET OUTLOOK */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Press Release & Market Outlook
          </h2>

          {/* Quotes */}
          {/* <blockquote className="mb-6 italic">
            “We invest where global lifestyle trends meet real estate investment
            opportunity,” said{" "}
            <span className="font-semibold">Akshat Tiberwala</span>, Managing
            Director at FHV. “We back cash-flow-positive brands with
            expansion-ready models and layer in technology to create scalable,
            efficient platforms. Our investments are not only about great
            concepts, but about systems that can grow globally.”
          </blockquote>

          <blockquote className="mb-6 italic">
            “Global Hospitality will increasingly be dominated by newer
            generations both as consumers and as operators through the rise of
            social media platforms. Brands are no longer growing linearly,
            they’re growing laterally with the introduction of social media to
            the mix. We can see this as
            <span className="font-semibold">
              {" "}
              71% young visitors use social media for restaurant updates and 73%
              visited restaurants in the last 3 months because of social media
              content.
            </span>
            ”
          </blockquote> */}

          {/* Press Info */}
          <p className="mb-6">
            <span className="font-semibold">
              Dubai, UAE – Monday 25, 08, 2025
            </span>{" "}
            – Fern Hospitality Ventures (FHV), the Dubai-based investment
            platform focused on investing in world renowned brands on a
            long-term basis while providing annual return and eventual exit, has
            launched a<span className="font-semibold"> $100 million fund</span>{" "}
            targeting high-yield opportunities in the fast-evolving luxury
            hospitality and experiential leisure sector.
          </p>

          <p className="mb-6">
            The fund’s line-up includes serial hospitality entrepreneur{" "}
            <span className="font-semibold">Uday Singh</span>, who was behind
            the fundraising of award-winning concepts like Opa, Bagatelle Dubai
            and La Nina, as well as{" "}
            <span className="font-semibold">Akshat Tiberwala</span>, one of the
            youngest entrepreneurs rooted in GenZ and Managing Director of
            private investment vehicle Niyamo Capital. The fund is managed by
            Dalma Capital, a leading DFSA-regulated investment firm.
          </p>

          <p className="mb-6">
            Dubai’s position as a global powerhouse in luxury dining and
            hospitality continues to accelerate, with homegrown concepts now
            setting the benchmark for success on the world stage. Led by dynamic
            entrepreneurs including Uday Singh, whose portfolio has shaped the
            city’s high-end dining landscape, ‘Made in Dubai’ brands are not
            only dominating locally but also expanding into key international
            markets.
          </p>

          {/* Key Investment Features */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold mb-3">
              Investment Highlights
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>80% dividend distribution on operating income</li>
              <li>Exposure to iconic global brands in early-stage expansion</li>
              <li>
                Asset-backed investments with strong real estate fundamentals
              </li>
              <li>
                Dual-layer return strategy via operating income & capital
                appreciation on exit
              </li>
            </ul>
          </div>

          {/* Market Outlook */}
          <p className="mb-6">
            There has never been a better time to set up a fund like this as
            fine dining demand surges, immersive experiences gain traction, and
            trends like ‘Revenge Dining’ grow popular. The fine dining market
            has expanded from
            <span className="font-semibold">
              {" "}
              $162B in 2020 ➝ $253B in 2025
            </span>
            . Core luxury hospitality hubs from Dubai to Miami and Bali show
            rapid growth over the past 5 years, yet operators face challenges
            due to closures, capital restraints, and fragmented ownership.
          </p>

          <p>
            With technology still in its early stages, FHV’s dynamic strategy
            and experienced leadership are positioned to capitalize on the next
            wave of growth in global lifestyle destinations. From culturally
            relevant F&amp;B brands to digitally driven hospitality platforms,
            Fern’s portfolio sits at the convergence of rising tourism, real
            estate scarcity, and growing demand for premium experiences.
          </p>
        </div>
      </section>
      {/* EDITOR’S NOTE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Editor’s Note</h2>

          {/* 1. Clear Strategy */}
          <h3 className="text-xl font-semibold mb-4">
            1. A Clear Strategy for a Changing Sector
          </h3>
          <p className="mb-4">
            Targeting global leisure hotspots, the fund’s thesis is anchored in
            acquiring and scaling proven, high-margin concepts in the most
            in-demand hospitality hubs.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              World-famous hospitality brands expanding into emerging
              destinations
            </li>
            <li>
              Culturally resonant concepts in F&amp;B, wellness, beach clubs,
              members-only
            </li>
            <li>
              Tech-powered disruptors using AI and digital platforms for
              forecasting &amp; guest journeys
            </li>
          </ul>
          <p className="mb-4">
            FHV’s team unites operators, technologists and investors with a
            proven record of market growth.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-semibold">Dubai:</span> 17.15m visitors in
              2023 (+19% YoY, record high)
            </li>
            <li>
              <span className="font-semibold">London:</span> Luxury sector fully
              recovered beyond pre-COVID levels
            </li>
            <li>
              <span className="font-semibold">Bali:</span> Surpassed
              pre-pandemic performance
            </li>
            <li>
              <span className="font-semibold">Mykonos:</span> Record tourism
              post-reopening
            </li>
            <li>
              <span className="font-semibold">Miami:</span> Stabilized above
              2019 peak
            </li>
            <li>
              <span className="font-semibold">Tulum:</span> Riviera Maya hotspot
              growing rapidly
            </li>
          </ul>

          {/* 2. GenZ */}
          <h3 className="text-xl font-semibold mt-8 mb-4">
            2. GenZ: The Future of Hospitality
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>79% dine out 5+ times monthly</li>
            <li>88% follow travel influencers on TikTok/Instagram</li>
            <li>89% rank travel as top financial priority</li>
            <li>
              52% prioritize experiences over possessions (avg. 29% of income
              spent on travel)
            </li>
            <li>73% willing to pay more for sustainable options</li>
            <li>“Snackification” creates new daily guest engagement windows</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2">
            The Digital Discovery Era
          </h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>74% choose venues via social media</li>
            <li>TikTok videos &lt;30s perform 2x better than Reels</li>
            <li>
              &lt;5% of upscale venues use AI tools, leaving revenue untapped
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2">
            Experiential &amp; Immersive Formats
          </h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Chef’s tables, multi-sensory dining, storytelling events</li>
            <li>Hybrid venues mixing dining, art, co-working, wellness</li>
            <li>
              Hotels with unique F&amp;B earn 10% more than standard formats
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2">
            Sustainability = Luxury’s New Status
          </h4>
          <p className="mb-4">
            Eco-responsibility and community-driven concepts are now premium
            differentiators, embedding values into brand DNA.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-2">
            Tech as Next Frontier
          </h4>
          <p className="mb-4">
            AI-led demand forecasting, personalised digital journeys, and
            membership models (e.g. Dorsia) are redefining exclusivity.
          </p>

          {/* 3. Growth Dynamics */}
          <h3 className="text-xl font-semibold mt-8 mb-4">
            3. Growth Dynamics
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Fine dining market: €28B</li>
            <li>Culinary tourism: $11B market, growing 20% annually</li>
            <li>Luxury travel &amp; tourism → $3T revenue in 5 years</li>
            <li>Luxury leisure hospitality → $239B (2023) → $391B (2028)</li>
            <li>HNWIs spend to grow $80B → $154B in 3 years</li>
            <li>Guests now spend more on dining than hotels</li>
            <li>
              Brands expanding with seasonal global pop-ups (St. Barts,
              Courchevel, Mykonos)
            </li>
            <li>Entertainment &amp; social cachet drive demand</li>
            <li>GenZ → 40% of global spend by 2030</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2">
            Bleisure &amp; Digital Nomadism
          </h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>60% of corporate travelers extend trips</li>
            <li>Bleisure market $430B (2024) → $731B by 2032 (8.9% CAGR)</li>
            <li>84% want vacation time in business trips</li>
          </ul>

          {/* About Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold mb-3">
              About Fern Hospitality Ventures
            </h3>
            <p className="mb-3">
              Dubai-based investment platform targeting premium hospitality,
              wellness, experiential F&amp;B, and tech-driven lifestyle brands.
              Focus on scaling real estate-backed assets in high-growth
              destinations.
            </p>
            <h3 className="text-lg font-semibold mb-3">About Dalma Capital</h3>
            <p className="mb-3">
              Global investment firm in DIFC, regulated by DFSA. Manages $10B+
              across private equity, credit, and real assets.
            </p>
          </div>

          {/* Media */}
          <div className="text-sm">
            <h3 className="font-semibold mb-2">Media Enquiries</h3>
            <p>James Henderson | +971 50 471 4080 | james@JBH-PR.com</p>
            <p>Mohammad Aldaejy | +971 58 540 5177 | mohammed@JBH-PR.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressRelease;
