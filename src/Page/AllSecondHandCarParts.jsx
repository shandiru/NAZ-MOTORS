import React from "react";

// Sections from components/HomePage
import AllSecondHero from "../components/ServiceSection/AllSecondHandCarParts/AllSecondHero";
import AllSecondServices from "../components/ServiceSection/AllSecondHandCarParts/AllSecondServices";

import WhyServiceAllSecond from "../components/ServiceSection/AllSecondHandCarParts/WhyServiceAllSecond";
import EmergencyCTA from "../components/ServiceSection/AllSecondHandCarParts/EmergencyCTA";
import Header from "../components/Header";

export default function AllSecondHandCarParts() {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section >
       <AllSecondHero />
      </section>
         <section >
       <AllSecondServices />
      </section>
      
        <section >
       <WhyServiceAllSecond />
      </section>

       <section >
       <EmergencyCTA />
      </section>





   
    </div>
  );
}
