
import React from "react";

// Sections from components/HomePage
import MotHero from "../components/ServiceSection/Service/MotHero.jsx";
import AutomotiveServices from "../components/ServiceSection/Service/AutomotiveServices.jsx";
import MajorServices from "../components/ServiceSection/Service/MajorServices.jsx";
import VehicleTypes from "../components/ServiceSection/Service/VehicleTypes.jsx";
import TechnicianExperienceSection from "../components/ServiceSection/Service/TechnicianExperienceSection.jsx";
import EmergencyCTA from "../components/ServiceSection/Service/EmergencyCTA.jsx";
import Header from "../components/Header.jsx";

export default function Service() {
    return (
        <div>
            <Header />
            <section >
                <MotHero />
            </section>
            <section >
                <AutomotiveServices />
            </section>
            {/* <section >
                <MajorServices />
            </section>

            <section >
                <VehicleTypes />
            </section>

            <section >
                <TechnicianExperienceSection />
            </section> */}

            <section >
                <EmergencyCTA />
            </section>
        </div>
    );
}
