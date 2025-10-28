import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function MechanicalHero() {
  return (
    <section
      className="py-16 transition-colors duration-300 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4
                       bg-[#B62025]/10 text-[#B62025] dark:bg-[#B62025]/30 dark:text-[#FF4B4B]"
          >
            Mechanical Repairs & Servicing
          </span>

          {/* Heading */}
          <h1
            className="text-4xl lg:text-5xl font-black mb-6 text-black dark:text-white"
          >
            Reliable{" "}
            <span className="text-[#B62025] dark:text-[#FF4B4B]">
              Mechanical Repairs
            </span>{" "}
            for Every Vehicle
          </h1>

          {/* Subheading */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed 
                       text-[#333333] dark:text-[#CCCCCC]"
          >
            Whatever the problem, our expert technicians are here to solve it.
            From regular servicing to intricate mechanical repairs, we have the
            knowledge and experience to handle any challenge. No job is too big
            or small — we’re committed to providing dependable repairs to keep
            your car in prime condition. Count on us to get you back behind the
            wheel with confidence!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button */}
            <a href="tel:01162515961" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all
                           bg-[#B62025] text-white hover:bg-[#7C1419] dark:bg-[#B62025] dark:hover:bg-[#7C1419]"
              >
                <FaPhoneAlt className="h-5 w-5" />
                Call Now: 01162515961
              </button>
            </a>

            {/* Get Quote Button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300
                         border border-[#B62025] text-[#B62025] hover:bg-[#B62025] hover:text-white
                         dark:border-[#FF4B4B] dark:text-[#FF4B4B] dark:hover:bg-[#FF4B4B] dark:hover:text-black"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
