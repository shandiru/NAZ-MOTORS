"use client";

import React, { useEffect } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#3B3B3B]/10 to-white
        dark:from-neutral-900 dark:to-black
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left" data-aos="fade-right">
            {/* HEADLINE */}
            <div className="space-y-4">
              <h1
                className="
                  text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl
                  font-black leading-tight
                  text-[#000000] dark:text-neutral-100
                "
              >
                NAZ
                <br />
                <span className="text-[#C8102E]">MOTORS</span>
              </h1>

              <p className="text-xl text-[#3B3B3B] dark:text-neutral-300">
                Your NAZ, Our Expertise
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-gray-900 dark:text-neutral-200 max-w-lg">
              Experience top-tier auto repair services at a fraction of the cost.
              Welcome to Naz Motors, a family-run business with over two decades
              of experience in the automotive industry.
            </p>

            <p className="text-lg leading-relaxed text-gray-900 dark:text-neutral-200 max-w-lg">
              What began as a passion for cars has grown into a trusted hub for
              all your automotive needs — from reliable repairs to second-hand
              parts, all under one roof.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
              <a
                href="tel:01162515961"
                className="
                  inline-flex items-center justify-center gap-2 text-sm
                  bg-[#C8102E] text-white shadow h-10 rounded-md px-6 font-semibold
                  transition-all duration-300 hover:bg-[#A00D24]
                  hover:shadow-[0_6px_20px_rgba(200,16,46,0.45)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/50
                "
              >
                <FaPhone className="h-4 w-4" />
                Call 01162515961
              </a>

              <a
                href="#services"
                className="
                  inline-flex items-center justify-center gap-2 text-sm
                  border border-gray-300 text-gray-900 bg-transparent
                  dark:border-white/25 dark:text-neutral-100
                  h-10 rounded-md px-6 font-semibold
                  transition-all duration-300
                  hover:bg-gray-100 dark:hover:bg-white/10
                  hover:shadow-[0_6px_20px_rgba(200,16,46,0.35)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                "
              >
                View Our Services
              </a>
            </div>

            {/* LOCATION & ESTABLISHED */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 items-start"
              data-aos="zoom-in"
            >
              {/* Location */}
              <a
                href="https://www.google.com/maps/place/80+Ravensbridge+Drive,+Leicester,+LE4+0BX"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start gap-3 p-2 rounded transition
                  hover:bg-[#C8102E]/10 hover:shadow-[0_4px_15px_rgba(200,16,46,0.25)]
                  dark:hover:bg-white/5
                "
              >
                <FaMapMarkerAlt className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-neutral-100">
                    Location
                  </p>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">
                    80 Ravensbridge Drive, Leicester, LE4 0BX
                  </p>
                </div>
              </a>

              {/* Established */}
              <div className="flex items-start gap-3 p-2">
                <FaClock className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-neutral-100">
                    Our Story
                  </p>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">
                    Family-run with 20+ years of excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative w-full" data-aos="fade-left">
            <div
              className="
                aspect-video sm:aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-2xl
                transition-all duration-300
                hover:shadow-[0_12px_30px_rgba(200,16,46,0.4)]
                dark:shadow-black/50
              "
            >
              <video
                src="/stoneleysvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="object-cover absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
