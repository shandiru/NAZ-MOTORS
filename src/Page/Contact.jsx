import React from "react";

// Sections from components/contactPage
import Hero from "../components/Contact/Hero";
import Cards from "../components/Contact/Cards";
import ContactSection from "../components/Contact/ContactSection";
import EmergencyCTA from "../components/Contact/EmergencyCTA";
import Header from "../components/Header";


export default function About() {
  return (
    <div>
      <Header />
       <section>
        <Hero />
      </section>
        <section>
        <Cards />
      </section>
       <section>
        < ContactSection />
      </section>
       <section>
        < EmergencyCTA />
      </section>

    
    
    </div>
  );
}
