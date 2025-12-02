"use client";
import React from "react";

const features = [
  "Glacier White",
  "Windscreen Wipers - Variable Speed",
  "USB Socket and Jack",
  "Tyre Pressure Warning Light",
  "Tyre Inflation Kit",
  "Trip Computer",
  "Steering Wheel - Height and Reach Adjustable",
  "Steering Wheel - Black Grain with Chrome Insert",
];

export default function VehicleDetailsSection() {
  return (
    <section className="bg-[#1D1D1D] text-white py-16 px-6 md:px-10 lg:px-0">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          More about this Renault
        </h2>

        {/* DESCRIPTION + FEATURES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT — FULL DESCRIPTION */}
          <div className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6 md:p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Full Description</h3>

            <p className="text-gray-300 whitespace-pre-line leading-relaxed mb-6">
              This 2017 Renault Clio Play is a standout choice with its exceptionally low
              mileage of just 38,202 miles, making it a truly remarkable find for its age.
              Powered by a 1.2 litre petrol engine and meeting Euro 6 emission standards,
              this hatchback offers a practical and efficient driving experience. Inside,
              you'll find a 2 x 20W radio complete with Bluetooth connectivity for seamless
              audio streaming and handsfree calls, alongside manual air conditioning to
              ensure your comfort in all conditions.

              The Clio Play is designed to be an appealing option, and its low insurance
              group rating further enhances its value, suggesting it could be more
              economical to run than many comparable vehicles. This combination of a
              well maintained, low mileage example with desirable features like Bluetooth
              and air conditioning, all within an accessible insurance bracket, makes this
              Renault Clio a sensible and attractive proposition for any driver.
            </p>

            <button className="border border-yellow-400 text-yellow-400 text-sm px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Read Full Description
            </button>
          </div>

          {/* RIGHT — HIGHLIGHT FEATURES */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-semibold">Highlight Features</h3>
              <button className="border border-yellow-400 text-yellow-400 text-sm px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                View All
              </button>
            </div>

            <div className="bg-[#2A2A2A] rounded-2xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col gap-4">

                {features.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 pb-3 flex items-start gap-3"
                  >
                    <span className="text-yellow-400 mt-1 text-xs">►</span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}

              </div>

              {/* Watermark */}
              <div className="absolute text-6xl font-bold text-white/10 right-4 bottom-4 pointer-events-none select-none">
                Features
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/s8KoeQEGv8o"
            title="Vehicle Video"
            allowFullScreen
          />
        </div>

        {/* DELIVERY QUOTE CARD */}
        <div className="bg-[#2A2A2A] rounded-2xl text-center py-10 px-6 shadow-md">
          <h3 className="text-3xl font-semibold mb-6">
            Wish to get this delivered? Get a Quote!
          </h3>

          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Your Postcode"
              className="flex-1 bg-[#1D1D1D] border border-[#444] text-white px-4 py-3 rounded-lg focus:outline-none"
            />

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Calculate
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-4">
            Delivery to mainland UK only, excludes NI, highlands, ferry crossing and toll costs.
          </p>
        </div>
      </div>
    </section>
  );
}
