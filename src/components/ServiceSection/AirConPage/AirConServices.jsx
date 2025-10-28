"use client";

import {
  FaSnowflake,
  FaThermometerHalf,
  FaTools,
  FaShieldAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

export default function AirConServices() {
  const services = [
    {
      title: "Air-Con Re-Gas Service",
      desc: "Professional refrigerant replacement to restore cooling performance",
      icon: (
        <FaSnowflake className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />
      ),
      points: [
        "Complete system evacuation",
        "Fresh refrigerant refill",
        "Leak detection check",
        "Sanatisation cleaning",
      ],
    },
    {
      title: "System Diagnostics",
      desc: "Comprehensive air conditioning system health check and diagnosis",
      icon: (
        <FaThermometerHalf className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />
      ),
      points: [
        "Temperature testing",
        "Pressure analysis",
        "Component inspection",
        "Fault code reading",
        "Nitrogen leak down test",
      ],
    },
    {
      title: "Component Repair",
      desc: "Professional repair and replacement of air conditioning components",
      icon: <FaTools className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />,
      points: [
        "Compressor service",
        "Condenser repair",
        "Evaporator maintenance",
        "Pipe replacement",
      ],
    },
    {
      title: "Preventive Maintenance",
      desc: "Regular maintenance to prevent costly air conditioning failures",
      icon: <FaShieldAlt className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />,
      points: [
        "Filter replacement",
        "System cleaning",
        "Leak prevention",
        "Annual service",
      ],
    },
  ];

  return (
    <section className="py-16 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
            Professional Air Conditioning Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#333333] dark:text-[#CCCCCC]">
            Comprehensive air conditioning solutions for optimal cabin comfort and
            system performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl py-6 px-6 transition-all duration-300 shadow-sm 
                         hover:shadow-[0_8px_24px_rgba(182,32,37,0.35)] hover:ring-2 hover:ring-[#B62025] hover:ring-offset-2
                         bg-[#F8F8F8] dark:bg-[#111111] border border-[#E5E5E5] dark:border-[#222222]"
            >
              <div className="grid auto-rows-min items-start gap-1.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(182,32,37,0.1)",
                      }}
                    >
                      {s.icon}
                    </div>
                    <div className="text-xl font-bold text-black dark:text-white">
                      {s.title}
                    </div>
                  </div>
                </div>
                <div className="text-[#333333] dark:text-[#CCCCCC] text-base">
                  {s.desc}
                </div>
              </div>

              <div>
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm text-[#444444] dark:text-[#BBBBBB]"
                    >
                      <FaRegCheckCircle
                        className="h-4 w-4 mr-2 flex-shrink-0 text-[#B62025] dark:text-[#FF4B4B]"
                      />
                      {p}
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
