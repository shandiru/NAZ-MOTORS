import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Page Components
import Home from "./Page/Home.jsx";
import About from "./Page/Contact.jsx";
import AirConPage from "./Page/AirConPage.jsx";
import CarServicePage from "./Page/CarServicePage.jsx";
import CleaningPage from "./Page/CleaningPage.jsx";
import DiagnosticsPage from "./Page/DiagnosticsPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import GDPRBanner from "../src/components/GDPRBanner.jsx"
import CarScarpping from "./Page/CarScarpping.jsx";
import AllSecondHandCarParts from "./Page/AllSecondHandCarParts.jsx"
import Service from "./Page/Service.jsx";
import MechanicalPage from "./Page/MechanicalPage.jsx"
import Tyres from "./Page/Tyres.jsx";
import BuyDetails from "./Page/BuyDetails.jsx";
import Ebay from "./Page/Ebay.jsx"
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<About />} />
          <Route path="/buydetail" element={<BuyDetails />} />
          <Route path="/services/car-scrapping" element={<CarScarpping />} />
          <Route path="/services/mot" element={<CarServicePage />} />
          <Route path="/services/aircon-re-gas-service" element={<AirConPage />} />
          <Route path="/services/service" element={<Service />} />
          <Route path="/services/tyres" element={<Tyres />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services/all-second-hand-car-parts" element={<AllSecondHandCarParts />} />
           <Route path="/services/mechanical-repairs" element={<MechanicalPage />} />
            <Route path="/ebay" element={<Ebay />} />

        </Routes>
      </main>
      <Footer />
      <GDPRBanner />
    </div>
  );
}
