"use client";

import { FaRecycle, FaLeaf, FaPoundSign, FaTruck } from "react-icons/fa";

export default function ATFSection() {
  const highlights = [
    {
      title: "Eco-Friendly & Sustainable Approach",
      desc: "At Naz Motor’s Ltd, we’re committed to a greener future. We believe in offering eco-friendly services that not only help keep your car running efficiently but also protect the planet. From sustainable parts to environmentally responsible disposal practices, we’re here to make a difference — for your vehicle and the environment.",
      icon: <FaLeaf className="h-5 w-5 text-[#C8102E]" />,
    },
    {
      title: "Competitive Pricing & Value",
      desc: "Looking for affordable, quality car care? At Naz Motor’s Ltd, we offer competitive pricing without compromising on the quality of service. Our transparent pricing and commitment to value mean you’ll always get the best deal for your vehicle, all while keeping it in top condition.",
      icon: <FaPoundSign className="h-5 w-5 text-[#C8102E]" />,
    },
    {
      title: "Free Collection Service",
      desc: "We offer free vehicle collection services for your convenience. Whether your car is running or not, our team ensures hassle-free pickup and transport to our facility.",
      icon: <FaTruck className="h-5 w-5 text-[#C8102E]" />,
    },
    {
      title: "Responsible Recycling",
      desc: "As an Authorised Treatment Facility (ATF), we guarantee that every vehicle is dismantled and recycled in full compliance with environmental regulations — ensuring no harm to nature.",
      icon: <FaRecycle className="h-5 w-5 text-[#C8102E]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#FFF5F6] dark:bg-[#0B0B0B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#C8102E]">
            Authorised Treatment Facility (ATF)
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#4B5563] dark:text-gray-300">
            We specialise in professional car scrapping services, providing a hassle-free
            solution for disposing of your old or unwanted vehicles. As an Authorised
            Treatment Facility (ATF), we ensure that every vehicle is recycled responsibly
            and in compliance with environmental regulations. We also offer free collection
            services, making the process convenient and stress-free for our customers.
            Trust us to handle your car scrapping needs with efficiency and professionalism
            while contributing to a cleaner, greener future.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-xl py-6 px-6 shadow-sm border transition-all duration-300
                         bg-white dark:bg-[#111111] border-[#E6EAE7] dark:border-[#2A2A2A]
                         hover:shadow-[0_8px_24px_rgba(200,16,46,0.25)]
                         hover:ring-2 hover:ring-[#C8102E] hover:ring-offset-2 hover:ring-offset-white
                         dark:hover:ring-offset-[#0B0B0B]"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#FCE8EA] dark:bg-[#401017]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#4B5563] dark:text-gray-400 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
