"use client";

import {
  FaCarSide,
  FaRecycle,
  FaCog,
  FaBalanceScale,
  FaRegCheckCircle,
} from "react-icons/fa";

export default function MechanicalServices() {
  const services = [
    {
      title: "Wide Tyre Selection",
      desc: "Choose from a wide range of quality new and budget-friendly tyres to suit all vehicles and budgets.",
      icon: <FaCarSide className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />,
      points: [
        "Premium and budget options available",
        "Tyres for all car makes and models",
        "Winter, summer, and all-season tyres",
        "Expert fitting and balancing service",
      ],
    },
    {
      title: "Professional Wheel Alignment",
      desc: "Ensure maximum performance, handling, and tyre longevity with precision wheel alignment.",
      icon: <FaCog className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />,
      points: [
        "Computerised alignment technology",
        "Improved fuel efficiency",
        "Even tyre wear",
        "Smoother, safer driving experience",
      ],
    },
    {
      title: "Eco-Friendly Tyre Disposal",
      desc: "We dispose of your old tyres responsibly, ensuring minimal environmental impact.",
      icon: <FaRecycle className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />,
      points: [
        "Environmentally friendly recycling",
        "Sustainable disposal methods",
        "Zero waste to landfill",
        "Certified eco practices",
      ],
    },
    {
      title: "Unbeatable Value & Safety",
      desc: "Save on costs without compromising safety with our unbeatable tyre services.",
      icon: <FaBalanceScale className="h-5 w-5 text-[#B62025] dark:text-[#FF4B4B]" />,
      points: [
        "Affordable prices with no hidden fees",
        "Trusted brands and expert advice",
        "Guaranteed quality and durability",
        "Safety-first fitting every time",
      ],
    },
  ];

  return (
    <section className="py-16 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
            Professional Tyre Replacement & Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#333333] dark:text-[#CCCCCC]">
            Top-quality tyres, professional alignment, and eco-friendly disposal — 
            all handled with care, value, and expertise by Naz Motors.
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
