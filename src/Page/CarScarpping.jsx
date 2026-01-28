
import React from "react";

// Sections from components/HomePage
import MotHero from "../components/ServiceSection/CarScarpping/MotHero.jsx";
import AutomotiveServices from "../components/ServiceSection/CarScarpping/AutomotiveServices.jsx";
import MajorServices from "../components/ServiceSection/CarScarpping/MajorServices.jsx";
import VehicleTypes from "../components/ServiceSection/CarScarpping/VehicleTypes.jsx";
import TechnicianExperienceSection from "../components/ServiceSection/CarScarpping/TechnicianExperienceSection.jsx";
import EmergencyCTA from "../components/ServiceSection/CarScarpping/EmergencyCTA.jsx";
import Header from "../components/Header.jsx";

export default function CarScarpping() {
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
