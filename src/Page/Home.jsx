import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/HomePage/HeroSection.jsx";
import ServicesSection from "../components/HomePage/ServicesSection.jsx";
import WhyChooseSection from "../components/HomePage/WhyChooseSection.jsx";
import Review from "../components/HomePage/Review.jsx";
import FindUs from "../components/HomePage/Findus.jsx";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Process */}
      <section id="process">
        <WhyChooseSection />
      </section>

        <section>
        <  Review />
      </section>

       <section>
        <FindUs />
      </section>
      
      
    

   
    </div>
  );
}
