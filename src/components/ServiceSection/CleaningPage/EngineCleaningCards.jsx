import React from "react";
import { FaBolt, FaFilter, FaTachometerAlt, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    icon: <FaBolt className="w-5 h-5 text-[var(--aircon-icon)]" />,
    title: "Carbon Engine Cleaning",
    description: "Professional carbon deposit removal for improved engine performance",
    duration: "45-60 minutes",
    items: [
      "Hydrogen carbon cleaning",
      "Intake valve cleaning",
      "Combustion chamber cleaning",
      "Improved fuel efficiency",
      "Restored engine power",
      "Reduced emissions",
      "Walnut blasting",
    ],
  },
  {
    icon: <FaFilter className="w-5 h-5 text-[var(--aircon-icon)]" />,
    title: "DPF Cleaning Service",
    description: "Diesel Particulate Filter cleaning and regeneration",
    duration: "2-3 hours",
    items: [
      "DPF regeneration",
      "Filter deep cleaning",
      "Diagnostic testing",
      "Pressure testing",
      "Performance restoration",
      "Warning light reset",
    ],
  },
  {
    icon: <FaTachometerAlt className="w-5 h-5 text-[var(--aircon-icon)]" />,
    title: "EGR Valve Cleaning",
    description: "Exhaust Gas Recirculation valve cleaning and service",
    duration: "1-2 hours",
    items: [
      "EGR valve removal",
      "Professional cleaning",
      "Gasket replacement",
      "System testing",
      "Performance check",
      "Fault code clearing",
    ],
  },
];

export default function EngineCleaningCards() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--aircon-heading)]">
            Professional Engine Cleaning Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Advanced cleaning technology to restore engine performance and efficiency
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                flex flex-col gap-6 rounded-xl py-6 text-center border shadow-sm
                bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
                transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
                hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
              "
            >
              <div className="px-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--aircon-heading)]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base mb-2 text-[var(--aircon-muted)]">
                  {service.description}
                </p>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-[var(--aircon-heading)]/85 dark:text-[var(--aircon-muted)]"
                    >
                      <FaCheckCircle className="mr-2 h-4 w-4 text-[var(--aircon-check-icon)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
