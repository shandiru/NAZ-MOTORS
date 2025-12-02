import React from "react";

export default function UnderTheBonnet() {
  const items = [
    { icon: "/fueltype.svg", title: "Fuel Type", value: "Petrol" },
    { icon: "/engine.svg", title: "Engine Size", value: "1.1L" },
    { icon: "/power.svg", title: "Max Power", value: "74 bhp" },
    { icon: "/speed.svg", title: "Top Speed", value: "104 mph" },
    { icon: "/emissions.svg", title: "CO₂ Emissions", value: "127 g/km" },
    { icon: "/mpg.svg", title: "Combined MPG", value: "50" },
    { icon: "/mot.svg", title: "MOT Expiry", value: "23-05-2024" },
    { icon: "/tax.svg", title: "Road Tax (12m)", value: "£165" },
  ];

  return (
    <div className="w-full px-4 py-12">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-white">
        Under the Bonnet
      </h2>

      {/* DARK BOX ONLY HERE */}
      <div className="bg-[#1a1a1a] rounded-2xl py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFCF00] rounded-xl p-5 text-center flex flex-col items-center justify-center shadow-md"
            >
              <img src={item.icon} className="w-10 h-10 my-3" />

              <span className="text-black/70 text-sm">{item.title}</span>

              <strong className="text-black text-xl font-bold mt-1">
                {item.value}
              </strong>
            </div>
          ))}
        </div>

        {/* View Technical Data */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-white font-semibold underline underline-offset-4 opacity-80 hover:opacity-100 transition"
          >
            View full technical data
          </a>
        </div>
      </div>
    </div>
  );
}
