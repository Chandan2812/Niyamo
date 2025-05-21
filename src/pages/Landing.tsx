import ConceptInFocusSection from "../components/ConceptInFocusSection";
import DiningExperienceSection from "../components/DineWithUs";
import Footer from "../components/Footer";
import FundamentalsSection from "../components/Fundamental";
import GlobalFootprintSection from "../components/GlobalFootprint";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import NewsSubscribeSection from "../components/Newsletter";
import NewsletterPopup from "../components/NewsletterPopup";
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
      {/* Show the popup */}
      <NewsletterPopup />
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
}

export default Landing;
