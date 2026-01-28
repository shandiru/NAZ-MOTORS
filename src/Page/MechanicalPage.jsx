import React from "react";

// Sections from components/HomePage
import MechanicalHero from "../components/ServiceSection/Mechanical/MechanicalHero";
import MechanicalServices from "../components/ServiceSection/Mechanical/MechanicalServices";

import MechanicalTyres from "../components/ServiceSection/Mechanical/MechanicalTyres";
import EmergencyCTA from "../components/ServiceSection/Mechanical/EmergencyCTA";
import Header from "../components/Header";

export default function MechanicalPage() {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section >
       <MechanicalHero />
      </section>
         <section >
       <MechanicalServices />
      </section>
      
        <section >
       <MechanicalTyres />
      </section>

       <section >
       <EmergencyCTA />
      </section>





   
    </div>
  );
}
