"use client";

import { FaQuoteRight } from "react-icons/fa";

export default function MajorServices() {
  const services = [
    {
      title: "Cambelt Replacement",
      subtitle: "Critical timing belt replacement service",
      description:
        "Essential service to prevent catastrophic engine damage. Our qualified technicians use genuine parts and follow manufacturer specifications.",
    },
    {
      title: "Clutch Repair & Replacement",
      subtitle: "Complete clutch system service",
      description:
        "Professional clutch diagnosis, repair, and replacement. We service manual and automatic transmissions for all vehicle types.",
    },
    {
      title: "Welding Work",
      subtitle: "Professional automotive welding services",
      description:
        "Expert welding repairs for MOT failures, bodywork, and structural components. All work guaranteed and MOT compliant.",
    },
  ];

  return (
    <section className="py-16 bg-[#F9F9F9] dark:bg-[#0B0B0B] transition-colors duration-300">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-[#111827] dark:text-white">
          Major Service & Repair Work
        </h2>
        <p className="text-lg text-[#4B5563] dark:text-gray-400">
          Specialist services for major components and critical vehicle systems
        </p>
      </div>

      {/* Service cards */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-xl p-6 flex flex-col justify-between shadow-sm border transition-all duration-300 
                       bg-white dark:bg-[#111111] border-[#E6EAE7] dark:border-[#2A2A2A]
                       hover:shadow-[0_8px_24px_rgba(200,16,46,0.25)] 
                       hover:ring-2 hover:ring-[#C8102E] hover:ring-offset-2 hover:ring-offset-white 
                       dark:hover:ring-offset-[#0B0B0B]"
          >
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#111827] dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm mb-4 text-[#C8102E] dark:text-[#FF5C70] font-semibold">
                {service.subtitle}
              </p>
              <p className="text-sm mb-6 leading-relaxed text-[#4B5563] dark:text-gray-400">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <a href="/contact" className="inline-block">
                <button
                  className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-md border font-medium transition-all duration-200"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #C8102E",
                    color: "#C8102E",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C8102E";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.boxShadow =
                      "0 0 10px rgba(200,16,46,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#C8102E";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Get Quote <FaQuoteRight />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
