import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CareersSection from "./pages/nc_world/Career";
import PressPage from "./pages/nc_world/Press";
import Contact from "./pages/nc_world/Contact";
import Charles from "./pages/nc_concepts/Charles-street";
import Bkc from "./pages/nc_concepts/Bkc";
import AboutUs from "./pages/group/About";
import Management from "./pages/group/Management";
import Coupette from "./pages/nc_concepts/Coupette";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/careers" element={<CareersSection />} />
        <Route path="/Press" element={<PressPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/16-charles-street" element={<Charles />} />
        <Route path="/biryani-kebab-chai-(bkc)" element={<Bkc />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management" element={<Management />} />
        <Route path="coupette" element={<Coupette />} />
      </Routes>
    </Router>
  );
}

export default App;
