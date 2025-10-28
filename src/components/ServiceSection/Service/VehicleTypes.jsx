"use client";

import { FaCarSide, FaTools, FaCog, FaWrench, FaRecycle, FaSnowflake } from "react-icons/fa";

const vehicleCards = [
  {
    icon: <FaRecycle className="text-[#C8102E] dark:text-[#FF5C70] text-2xl" />,
    title: "Car Scrapping",
    description: "Environmentally friendly scrapping for end-of-life vehicles with full DVLA compliance.",
  },
  {
    icon: <FaWrench className="text-[#C8102E] dark:text-[#FF5C70] text-2xl" />,
    title: "MOT Testing",
    description: "Trust Naz Motor’s to keep your vehicle safe and compliant — book your MOT test today!",
  },
  {
    icon: <FaCog className="text-[#C8102E] dark:text-[#FF5C70] text-2xl" />,
    title: "Full Service",
    description: "Comprehensive vehicle inspection, servicing, and maintenance for all makes and models.",
  },
  {
    icon: <FaTools className="text-[#C8102E] dark:text-[#FF5C70] text-2xl" />,
    title: "Mechanical Repairs (All)",
    description: "From engine and gearbox to suspension and diagnostics — we handle it all.",
  },
  {
    icon: <FaCarSide className="text-[#C8102E] dark:text-[#FF5C70] text-2xl" />,
    title: "Tyres & Fitting",
    description: "High-quality tyres supplied and fitted for all vehicles, ensuring performance and safety.",
  },
  {
    icon: <FaSnowflake className="text-[#C8102E] dark:text-[#FF5C70] text-2xl" />,
    title: "Aircon Re-gas / Service",
    description: "Keep your car cool and comfortable with our expert air-conditioning recharge and repair service.",
  },
];

export default function VehicleTypes() {
  return (
    <section className="py-16 bg-[#F9F9F9] dark:bg-[#0B0B0B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#111827] dark:text-white mb-4">
            All Services Under One Roof
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-gray-400 max-w-2xl mx-auto">
            From MOT testing to repairs and replacements — Naz Motor’s has you covered.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {vehicleCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111111] 
                         text-[#111827] dark:text-white 
                         flex flex-col gap-4 rounded-xl 
                         border border-[#E6EAE7] dark:border-[#2A2A2A]
                         py-8 px-6 shadow-sm text-center 
                         transition-all duration-300 
                         hover:shadow-[0_8px_24px_rgba(200,16,46,0.25)] 
                         hover:ring-2 hover:ring-[#C8102E] hover:ring-offset-2 hover:ring-offset-white 
                         dark:hover:ring-offset-[#0B0B0B]"
            >
              <div className="mx-auto w-12 h-12 bg-[#FCE8EA] dark:bg-[#401017] rounded-lg flex items-center justify-center mb-2">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-[#4B5563] dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
