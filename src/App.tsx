import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CareersSection from "./pages/Career";
import PressPage from "./pages/Press";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/careers" element={<CareersSection />} />
        <Route path="/Press" element={<PressPage />} />
      </Routes>
    </Router>
  );
}

export default App;
