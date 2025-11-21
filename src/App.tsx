import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs"; 
import Services from "./pages/Services";
import HowitWorks from "./pages/HowitWorks";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/Terms&Conditions";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Router>
        <ScrollToTop />
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route
              path="/"
              element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowitWorks />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
