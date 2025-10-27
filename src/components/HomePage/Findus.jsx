"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-out-cubic" });

    // 🌗 Inline dark/light mode setup (self-contained)
    const updateTheme = () => {
      const html = document.documentElement;
      const section = document.querySelector("#findus-section");
      if (!section) return;

      const dark = html.classList.contains("dark");
      const vars = dark
        ? {
            "--naz-bg": "#000000",
            "--naz-text": "#FFFFFF",
            "--naz-muted": "#CCCCCC",
            "--naz-red": "#C8102E",
            "--naz-border": "#333333",
            "--naz-btnText": "#FFFFFF",
          }
        : {
            "--naz-bg": "#FFFFFF",
            "--naz-text": "#000000",
            "--naz-muted": "#3B3B3B",
            "--naz-red": "#C8102E",
            "--naz-border": "#E5E5E5",
            "--naz-btnText": "#FFFFFF",
          };

      Object.entries(vars).forEach(([key, val]) =>
        section.style.setProperty(key, val)
      );
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // ✅ Correct Google Maps link
  const directionsUrl =
    "https://www.google.com/maps/place/80+Ravensbridge+Dr,+Leicester/@52.645302,-1.142423,14z/data=!4m5!3m4!1s0x487760fba7418895:0xed69d527bfa6398f!8m2!3d52.6466316!4d-1.1449763?hl=en-GB";

  return (
    <section
      id="findus-section"
      className="py-12 px-4 transition-colors duration-300 bg-[var(--naz-bg)]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-[var(--naz-text)]"
          data-aos="fade-down"
        >
          Find Us
        </h2>

        {/* Google Map */}
        <div
          className="rounded-lg overflow-hidden shadow-lg border border-[var(--naz-border)] w-full h-[400px]"
          data-aos="zoom-in"
        >
          <iframe
            title="Google Map - Naz Motors Leicester"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12325.327408156306!2d-1.1514739!3d52.6466316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760fba7418895%3A0xed69d527bfa6398f!2s80%20Ravensbridge%20Dr%2C%20Leicester%20LE4%200BX!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Address */}
        <p
          className="mt-6 text-lg font-medium leading-relaxed text-[var(--naz-muted)]"
          data-aos="fade-up"
        >
          <span className="font-semibold text-[var(--naz-text)]">
            Naz Motors
          </span>
          <br />
          80 Ravensbridge Drive,
          <br />
          Leicester, LE4 0BX
        </p>

        {/* Directions Button */}
        <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Maps directions to Naz Motors Leicester"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm md:text-base font-semibold
                       bg-[var(--naz-red)] text-[var(--naz-btnText)]
                       hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--naz-red)]
                       transition-all duration-300"
          >
            Open Directions in Google Maps
            <svg
              className="h-4 w-4 md:h-5 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h6m0 0v6m0-6L10 16"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
