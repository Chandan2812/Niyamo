import ConceptInFocusSection from "../components/ConceptInFocusSection";
import DiningExperienceSection from "../components/DineWithUs";
import Footer from "../components/Footer";
import FundamentalsSection from "../components/Fundamental";
import GlobalFootprintSection from "../components/GlobalFootprint";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import FindYourPartner from "../components/slider";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DiningExperienceSection />
      <FindYourPartner />
      <ConceptInFocusSection />
      <GlobalFootprintSection />

      <FundamentalsSection />
      <Footer />
    </div>
  );
}

export default Landing;
