"use client";

import React, { useEffect } from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const palette = {
  black: "#000000",
  darkGrey: "#1C1C1C",
  red: "#C8102E",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.85)",
  dim: "rgba(255,255,255,0.65)",
  border: "rgba(255,255,255,0.15)",
};

export default function SiteFooter() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      style={{ backgroundColor: palette.black, color: palette.white }}
      className="overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div data-aos="fade-up" data-aos-delay="0">
            <h3
              className="text-xl font-bold tracking-wide"
              style={{ color: palette.red }}
            >
              NAZ MOTORS LTD
            </h3>
            <p className="text-sm mt-3" style={{ color: palette.muted }}>
              Welcome to Naz Motors, your trusted destination for quality
              automotive services and second-hand car parts. With over two
              decades of experience, we take pride in delivering professional,
              reliable, and affordable solutions for all your vehicle needs.
            </p>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h4
              className="text-lg font-semibold mb-3"
              style={{ color: palette.red }}
            >
              Contact Information
            </h4>
            <div className="space-y-3">
              <a
                href="tel:01162515961"
                className="flex items-center gap-2 text-sm transition hover:text-[#C8102E]"
                style={{ color: palette.muted }}
              >
                <FaPhone className="h-4 w-4" style={{ color: palette.red }} />
                0116 251 5961
              </a>
              <a
                href="https://www.google.com/maps/place/80+Ravensbridge+Dr,+Leicester/@52.645302,-1.142423,14z/data=!4m5!3m4!1s0x487760fba7418895:0xed69d527bfa6398f!8m2!3d52.6466316!4d-1.1449763?hl=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition hover:text-[#C8102E]"
                style={{ color: palette.muted }}
              >
                <FaMapMarkerAlt
                  className="h-4 w-4"
                  style={{ color: palette.red }}
                />
                80 Ravensbridge Drive, Leicester, LE4 0BX, UK
              </a>
            </div>
          </div>

          {/* Services List */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4
              className="text-lg font-semibold mb-3"
              style={{ color: palette.red }}
            >
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["All Second-Hand Car Parts", "/services/used-parts"],
                ["Car Scrapping", "/services/car-scrapping"],
                ["MOT Testing", "/services/mot"],
                ["Vehicle Servicing", "/services/service"],
                ["Mechanical Repairs", "/services/mechanical"],
                ["Tyres & Wheel Alignment", "/services/tyres"],
                ["Aircon Re-gas & Service", "/services/aircon"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="block transition hover:text-[#C8102E]"
                    style={{ color: palette.dim }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-sm" data-aos="fade-up" data-aos-delay="450">
            <h4
              className="text-lg font-semibold mb-3"
              style={{ color: palette.red }}
            >
              Company
            </h4>
            <ul>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#C8102E]"
                  style={{ color: palette.dim }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-[#C8102E]"
                  style={{ color: palette.dim }}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-10"
          style={{ borderTop: `1px solid ${palette.border}` }}
        />

        {/* Bottom note + Powered by */}
        <div className="pt-6 text-center space-y-2" data-aos="fade-up">
          <p className="text-sm" style={{ color: palette.dim }}>
            © {new Date().getFullYear()} Naz Motors Ltd. All rights reserved.
          </p>
          <p className="text-sm font-semibold">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: palette.red }}
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
