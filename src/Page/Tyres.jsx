import React from "react";

// Sections from components/HomePage
import TyresHero from "../components/ServiceSection/Tyres/TyresHero";
import TyresServices from "../components/ServiceSection/Tyres/TyresServices";

import WhyServiceTyres from "../components/ServiceSection/Tyres/WhyServiceTyres";
import EmergencyCTA from "../components/ServiceSection/Tyres/EmergencyCTA";
import Header from "../components/Header";

export default function Tyres() {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section >
       <TyresHero />
      </section>
         <section >
       <TyresServices />
      </section>
      
        <section >
       <WhyServiceTyres />
      </section>

       <section >
       <EmergencyCTA />
      </section>





   
    </div>
  );
}
