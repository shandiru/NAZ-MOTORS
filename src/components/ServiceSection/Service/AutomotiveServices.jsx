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
      title: "Comprehensive Car Servicing",
      desc: "Ensure your car performs at its best with our thorough and dependable servicing solutions.",
      icon: <FaCar className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Premium parts and fluids used",
        "Detailed performance inspection",
        "Preventive maintenance planning",
        "Full safety and reliability check",
        "Diagnostic scan and testing",
        "Long-term performance care",
      ],
    },
    {
      title: "Personalised Experience",
      desc: "Every vehicle is unique — we provide customised care tailored to your car’s specific needs.",
      icon: <FaWrench className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Individualised maintenance plans",
        "Transparent communication",
        "Detailed service explanations",
        "Flexible repair options",
        "Customer satisfaction focus",
        "Expert technician guidance",
      ],
    },
    {
      title: "Fast & Convenient Service",
      desc: "We understand your time is valuable — our efficient team ensures quick turnaround with top quality.",
      icon: <FaTools className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Same-day servicing available",
        "Reliable and efficient workflow",
        "Quick diagnostics and repair",
        "Priority booking options",
        "Professional quality assurance",
        "Minimal downtime guaranteed",
      ],
    },
    {
      title: "Expert Care & Longevity",
      desc: "Our skilled technicians use advanced tools to enhance your vehicle’s performance and lifespan.",
      icon: <FaClock className="h-5 w-5 text-[#C8102E] dark:text-[#FF5C70]" />,
      points: [
        "Advanced diagnostic equipment",
        "Performance improvement tuning",
        "Preventative maintenance checks",
        "Durability and reliability focus",
        "Certified service professionals",
        "Commitment to vehicle health",
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#C8102E] ">
            We Do More Than Just Routine Maintenance
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#4B5563] dark:text-gray-400">
            Ensure your car performs at its best with our thorough and dependable car servicing.
            At Naz Motors, we do more than just routine maintenance — our skilled technicians use
            premium parts and advanced tools to keep your vehicle in top shape. Whether it’s enhancing
            performance or avoiding expensive repairs, we’re dedicated to your car’s longevity and your
            peace of mind. Count on us for expert service customised to your vehicle’s needs — book
            your car service with us today!
          </p>
        </div>

        {/* Grid */}
             <h2 className="text-3xl lg:text-4xl font-bold mb-7 text-center text-[#C8102E] ">
             Why Naz Motor's
          </h2>
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
