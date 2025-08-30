import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import uday from "../../assets/Fern Hospitality9098.jpg";
import akshat from "../../assets/Akshat.jpg";

const PressRelease = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      {/* HEADER */}
      <section className="text-center px-6 pt-32 pb-12 border-b-4 border-[#404040]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-[#3d3d3b]">PRESS</span>{" "}
          <span className="text-[#e84f1c]">RELEASE</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#3d3d3b]">
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
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-12 items-center py-12 font-serif">
        {/* Left side - Profile */}
        <div className="bg-[#fdfcf7] border border-gray-300 p-6 rounded-md shadow-inner text-center">
          <img
            src={uday}
            alt="Uday Singh"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border border-gray-400"
          />
          <h3 className="font-bold text-2xl text-gray-900 uppercase tracking-wide">
            Uday Singh
          </h3>
          <p className="text-sm text-gray-800 leading-relaxed">
            CEO of Fern Hospitality Ventures, entrepreneur behind OPA &
            Bagatelle Dubai.
          </p>
        </div>

        {/* Right side - Statement */}
        <div className="flex items-center">
          <p className="bg-[#fdfcf7] border border-gray-300 p-6 rounded-md text-lg italic leading-relaxed text-gray-900 shadow-inner">
            “This is a once in a generation moment for hospitality investment,”
            said <span className="font-bold">Uday Singh</span>, CEO of Fern
            Hospitality Ventures and the entrepreneur behind global successes
            like OPA and Bagatelle Dubai. “Demand is soaring while supply
            remains limited. Our fund provides early access to the next
            generation of premium leisure and lifestyle concepts as they scale
            across the global social calendar that is driving demand from Dubai
            to New York, and London to Bali.”
          </p>
        </div>
      </section>

      {/* FUND HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6 pb-16 font-serif">
        <div className="bg-[#f4f1e7] p-6 border border-gray-400 shadow-[2px_2px_6px_rgba(0,0,0,0.2)] rounded-none">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 underline decoration-gray-500">
            The Fund
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
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

        <div className="bg-[#f4f1e7] p-6 border border-gray-400 shadow-[2px_2px_6px_rgba(0,0,0,0.2)] rounded-none">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 underline decoration-gray-500">
            Fund Strategy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>
              First-of-its-kind global luxury hospitality &amp; F&amp;B
              investment focus
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
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-16 font-serif text-gray-900">
        {/* TEAM */}
        <div className="bg-[#fcfbf7] p-8 border border-gray-300 shadow-sm rounded-none">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide underline decoration-gray-400">
            Team & Track Record
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Comprising seasoned hospitality investors and young talent in
            partnership with top operators globally, the team brings a proven
            record of high-profile successes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
            <li>
              <strong>Uday Singh:</strong> Led successes including{" "}
              <em>Bagatelle Dubai</em> (exit 2022), <em>Opa Dubai</em> (2018),{" "}
              <em>Opa Mumbai</em> (2022), and raised investment for{" "}
              <em>La Nina Dubai</em> (2023).
            </li>
            <li>
              <strong>Akshat Tiberwala:</strong> In his early 20s, founded{" "}
              <em>Niyamo Capital</em> (2024), managing $25m+ AUM and deploying
              capital into early-stage, high-growth companies.
            </li>
          </ul>
        </div>

        {/* PORTFOLIO */}
        <div className="bg-[#fcfbf7] p-8 border border-gray-300 shadow-sm rounded-none">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide underline decoration-gray-400">
            Portfolio Post $15m Raise
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
            <li>
              <strong>Dorsia</strong> – tech-driven reservations platform
            </li>
            <li>
              <strong>16 Charles Street, Mayfair</strong> – private members club
              with fine dining including <em>Loulou of Paris</em>
            </li>
            <li>
              <strong>Ramen Me</strong> – new-wave disco-dining concept in
              Portugal
            </li>
            <li>
              <strong>The Joyce</strong> – Miami-based modern American dining
            </li>
            <li>
              <strong>Opa, Bali</strong> – experiential Greek concept “Made in
              Dubai”
            </li>
          </ul>
        </div>
      </section>

      {/* PIPELINE & STRATEGY */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6 pb-16 font-serif">
        {/* PIPELINE / DISCUSSIONS */}
        <div className="bg-[#f4f1e7] p-6 border border-gray-400 shadow-[2px_2px_6px_rgba(0,0,0,0.2)] rounded-none">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 underline decoration-gray-500">
            In Discussion With
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>
              Ultra-luxury wellness project by a globally renowned wellness
              entrepreneur
            </li>
            <li>
              <em>Baoli, Bali</em> – luxury sunset-to-night beach club
              experience
            </li>
            <li>
              <em>Zumana, Bali</em> – beachfront dining + entertainment
              destination
            </li>
            <li>
              <em>Bang Cookies</em> – influencer-led, scalable brand
            </li>
            <li>
              <em>Bagatelle</em> – expansion into emerging locations
            </li>
          </ul>
        </div>

        {/* FUND STRATEGY & RATIONALE */}
        <div className="bg-[#f4f1e7] p-6 border border-gray-400 shadow-[2px_2px_6px_rgba(0,0,0,0.2)] rounded-none">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 underline decoration-gray-500">
            Fund Strategy & Rationale
          </h2>

          <h3 className="font-semibold text-gray-900 mb-2">Fund Strategy</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 text-gray-800 leading-relaxed">
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

          <h3 className="font-semibold text-gray-900 mb-2">Rationale</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>
              Global luxury hospitality reshaped since Covid; growth driven by
              next-gen travelers & new destinations
            </li>
            <li>
              Luxury hospitality spending projected to grow from $239B (2023) →
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

      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 pb-16 font-serif text-gray-900">
        {/* Left side - Profile */}
        <div className="bg-[#f9f7f1] md:col-span-1 p-6 border border-gray-300 shadow-sm text-center rounded-none">
          <img
            src={akshat}
            alt="Akshat Tiberwala"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border border-gray-400"
          />
          <h3 className="font-bold text-xl mb-2">Akshat Tiberwala</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            Managing Director, Founder of Niyamo Capital, bringing financial
            expertise and a Gen-Z investor perspective.
          </p>
        </div>

        {/* Right side - Statement */}
        <div className="md:col-span-3 flex items-center border-l-2 border-gray-400 pl-6">
          <blockquote className="bg-[#fcfbf7] border border-gray-300 shadow-sm p-6 italic leading-relaxed">
            <p className="mb-4">
              “We invest where global lifestyle trends meet real estate
              investment opportunity,” said{" "}
              <span className="font-semibold">Akshat Tiberwala</span>, Managing
              Director at FHV. “We back cash-flow-positive brands with
              expansion-ready models and layer in technology to create scalable,
              efficient platforms. Our investments are not only about great
              concepts, but about systems that can grow globally.”
            </p>
            <p>
              “Global hospitality will increasingly be dominated by newer
              generations, both as consumers and as operators, through the rise
              of social media platforms. Brands are no longer growing
              linearly—they’re growing laterally with the introduction of social
              media to the mix. We can see this as{" "}
              <span className="font-semibold">
                71% of young visitors use social media for restaurant updates,
                and 73% visited restaurants in the last 3 months because of
                social media content.
              </span>
              ”
            </p>
          </blockquote>
        </div>
      </section>

      {/* PRESS RELEASE & MARKET OUTLOOK */}
      <section className="max-w-5xl mx-auto px-6 py-16 font-serif text-gray-900">
        <div className="bg-[#fcfbf7] border border-gray-300 shadow-sm p-10 rounded-none">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide underline decoration-gray-400">
            Press Release & Market Outlook
          </h2>

          {/* Press Info */}
          <p className="mb-6 leading-relaxed text-justify">
            <span className="font-semibold">
              Dubai, UAE – Monday, 25 August 2025
            </span>{" "}
            – Fern Hospitality Ventures (FHV), the Dubai-based investment
            platform focused on world-renowned brands, has launched a{" "}
            <span className="font-semibold">$100 million fund</span> targeting
            high-yield opportunities in the fast-evolving luxury hospitality and
            experiential leisure sector.
          </p>

          <p className="mb-6 leading-relaxed text-justify">
            The fund’s line-up includes serial hospitality entrepreneur{" "}
            <span className="font-semibold">Uday Singh</span>, who spearheaded
            fundraising for award-winning concepts like Opa, Bagatelle Dubai,
            and La Nina, as well as{" "}
            <span className="font-semibold">Akshat Tiberwala</span>, one of the
            youngest Gen-Z entrepreneurs and Managing Director of private
            investment firm Niyamo Capital. The fund is managed by{" "}
            <span className="font-semibold">Dalma Capital</span>, a leading
            DFSA-regulated investment firm.
          </p>

          <p className="mb-6 leading-relaxed text-justify">
            Dubai’s role as a global powerhouse in luxury dining and hospitality
            continues to accelerate, with homegrown concepts now setting
            benchmarks worldwide. Led by entrepreneurs such as Uday Singh, whose
            portfolio has shaped the city’s high-end dining landscape, “Made in
            Dubai” brands are not only thriving locally but also expanding into
            key international markets.
          </p>

          {/* Key Investment Features */}
          <div className="bg-[#fdfcf7] border border-gray-300 shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">
              Investment Highlights
            </h3>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
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
          <p className="mb-6 leading-relaxed text-justify">
            There has never been a better time to launch a fund of this nature.
            Fine dining demand is surging, immersive experiences are gaining
            traction, and trends like “Revenge Dining” are fueling global
            expansion. The fine dining market has grown from{" "}
            <span className="font-semibold">$162B in 2020 ➝ $253B in 2025</span>
            . Core luxury hubs from Dubai to Miami and Bali show rapid growth
            over the past five years, yet operators face headwinds from
            closures, capital constraints, and fragmented ownership.
          </p>

          <p className="leading-relaxed text-justify">
            With technology still in its early stages, FHV’s strategy and
            leadership are positioned to capture the next wave of growth in
            global lifestyle destinations. From culturally relevant F&amp;B
            brands to digitally driven hospitality platforms, Fern’s portfolio
            sits at the convergence of rising tourism, real estate scarcity, and
            growing demand for premium experiences.
          </p>
        </div>
      </section>

      {/* EDITOR’S NOTE */}
      <section className="max-w-5xl mx-auto px-6 py-16 font-serif text-gray-900">
        <div className="bg-[#fcfbf7] border border-gray-300 shadow-sm p-10 rounded-none">
          <h2 className="text-3xl font-bold mb-10 uppercase tracking-wide underline decoration-gray-400">
            Editor’s Note
          </h2>

          {/* 1. Clear Strategy */}
          <h3 className="text-xl font-bold mb-4 uppercase tracking-wide underline decoration-gray-300">
            1. A Clear Strategy for a Changing Sector
          </h3>
          <p className="mb-4 leading-relaxed text-justify">
            Targeting global leisure hotspots, the fund’s thesis is anchored in
            acquiring and scaling proven, high-margin concepts in the most
            in-demand hospitality hubs.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 leading-relaxed">
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
          <p className="mb-4 leading-relaxed text-justify">
            FHV’s team unites operators, technologists and investors with a
            proven record of market growth.
          </p>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed">
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
          <h3 className="text-xl font-bold mt-10 mb-4 uppercase tracking-wide underline decoration-gray-300">
            2. GenZ: The Future of Hospitality
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-1 leading-relaxed">
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

          <h4 className="text-lg font-semibold mt-6 mb-2 italic">
            The Digital Discovery Era
          </h4>
          <ul className="list-disc pl-6 mb-4 space-y-1 leading-relaxed">
            <li>74% choose venues via social media</li>
            <li>TikTok videos &lt;30s perform 2x better than Reels</li>
            <li>
              &lt;5% of upscale venues use AI tools, leaving revenue untapped
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2 italic">
            Experiential &amp; Immersive Formats
          </h4>
          <ul className="list-disc pl-6 mb-4 space-y-1 leading-relaxed">
            <li>Chef’s tables, multi-sensory dining, storytelling events</li>
            <li>Hybrid venues mixing dining, art, co-working, wellness</li>
            <li>
              Hotels with unique F&amp;B earn 10% more than standard formats
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2 italic">
            Sustainability = Luxury’s New Status
          </h4>
          <p className="mb-4 leading-relaxed text-justify">
            Eco-responsibility and community-driven concepts are now premium
            differentiators, embedding values into brand DNA.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-2 italic">
            Tech as Next Frontier
          </h4>
          <p className="mb-4 leading-relaxed text-justify">
            AI-led demand forecasting, personalised digital journeys, and
            membership models (e.g. Dorsia) are redefining exclusivity.
          </p>

          {/* 3. Growth Dynamics */}
          <h3 className="text-xl font-bold mt-10 mb-4 uppercase tracking-wide underline decoration-gray-300">
            3. Growth Dynamics
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-1 leading-relaxed">
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

          <h4 className="text-lg font-semibold mt-6 mb-2 italic">
            Bleisure &amp; Digital Nomadism
          </h4>
          <ul className="list-disc pl-6 mb-8 space-y-1 leading-relaxed">
            <li>60% of corporate travelers extend trips</li>
            <li>Bleisure market $430B (2024) → $731B by 2032 (8.9% CAGR)</li>
            <li>84% want vacation time in business trips</li>
          </ul>

          {/* About Section */}
          <div className="bg-[#f7f6f2] border border-gray-300 p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">
              About Fern Hospitality Ventures
            </h3>
            <p className="mb-3 leading-relaxed text-justify">
              Dubai-based investment platform targeting premium hospitality,
              wellness, experiential F&amp;B, and tech-driven lifestyle brands.
              Focus on scaling real estate-backed assets in high-growth
              destinations.
            </p>
            <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">
              About Dalma Capital
            </h3>
            <p className="mb-0 leading-relaxed text-justify">
              Global investment firm in DIFC, regulated by DFSA. Manages $10B+
              across private equity, credit, and real assets.
            </p>
          </div>

          {/* Media */}
          <div className="text-sm italic text-gray-700">
            <h3 className="font-semibold mb-2 not-italic">Media Enquiries</h3>
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
