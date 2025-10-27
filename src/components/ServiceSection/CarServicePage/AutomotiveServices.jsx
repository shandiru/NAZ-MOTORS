"use client";

import {
  FaCar,
  FaWrench,
  FaTools,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function AutomotiveServices() {
  const services = [
    {
      title: "Full Car Service",
      desc: "Comprehensive vehicle inspection and maintenance service.",
      icon: <FaCar className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Engine oil & filter change",
        "Brake system inspection",
        "Suspension check",
        "Battery & electrical test",
        "Fluid level checks",
        "Tyre condition assessment",
      ],
    },
    {
      title: "MOT Testing",
      desc: "Official MOT testing by qualified MOT testers (Class 4 and Class 7).",
      icon: <FaWrench className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Qualified MOT testers",
        "Same-day results",
        "Detailed failure report",
        "Repair estimates",
        "Re-test included",
        "Digital certificate",
      ],
    },
    {
      title: "Brake Service",
      desc: "Professional brake system maintenance and repair.",
      icon: <FaTools className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Brake pad replacement",
        "Disc inspection",
        "Brake fluid change",
        "Handbrake adjustment",
        "Brake pipe inspection",
        "Performance testing",
      ],
    },
    {
      title: "Exhaust Systems",
      desc: "Complete exhaust system service and replacement.",
      icon: <FaClock className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Exhaust inspection",
        "Silencer replacement",
        "Catalytic converter",
        "Emission testing",
        "Custom fabrication",
        "Performance exhausts",
      ],
    },
  ];

  return (
    <section
      className="py-16 bg-[#F9F9F9] dark:bg-[#0B0B0B] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#111827] dark:text-white">
            Professional Automotive Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#4B5563] dark:text-gray-400">
            Comprehensive maintenance and repair solutions by certified
            automotive technicians at Naz Motors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl py-6 px-6 shadow-sm border transition-all duration-300 
                         bg-white dark:bg-[#111111] border-[#E6EAE7] dark:border-[#2A2A2A] 
                         hover:shadow-[0_8px_24px_rgba(200,16,46,0.25)] 
                         hover:ring-2 hover:ring-[#C8102E] hover:ring-offset-2 hover:ring-offset-white 
                         dark:hover:ring-offset-[#0B0B0B]"
            >
              {/* Header */}
              <div className="grid auto-rows-min items-start gap-1.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#FCE8EA] dark:bg-[#401017]"
                    >
                      {s.icon}
                    </div>
                    <div className="text-xl font-bold text-[#111827] dark:text-white">
                      {s.title}
                    </div>
                  </div>
                </div>
                <div className="text-[#4B5563] dark:text-gray-400 text-base">
                  {s.desc}
                </div>
              </div>

              {/* List */}
              <div>
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm text-[#4B5563] dark:text-gray-300"
                    >
                      <FaCheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-[#C8102E] dark:text-[#FF5C70]" />
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
