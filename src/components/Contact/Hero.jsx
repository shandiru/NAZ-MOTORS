"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const palette = {
  primary: "#C8102E", // Naz Motors Red
  heading: "#000000", // Black heading for light mode
  muted: "#3B3B3B", // Muted body text
  badgeBg: "#F4D6DA", // Light red tint for badge
  badgeText: "#8C0E1F", // Deep red text
};

export default function ContactHero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    // Dynamic dark/light mode setup (self-contained)
    const section = document.querySelector("#contact-hero");
    if (!section) return;

    const updateTheme = () => {
      const html = document.documentElement;
      const dark = html.classList.contains("dark");

      const vars = dark
        ? {
            "--contact-grad-top": "#0A0A0A",
            "--contact-grad-bottom": "#1C1C1C",
            "--contact-heading": "#FFFFFF",
            "--contact-muted": "#CCCCCC",
          }
        : {
            "--contact-grad-top": "#FFFFFF",
            "--contact-grad-bottom": "#F5F5F5",
            "--contact-heading": "#000000",
            "--contact-muted": "#3B3B3B",
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

  return (
    <section
      id="contact-hero"
      className="py-16 transition-colors duration-300 bg-gradient-to-b 
                 from-[var(--contact-grad-top)] to-[var(--contact-grad-bottom)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            data-aos="fade-down"
            className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
            style={{ backgroundColor: palette.badgeBg, color: palette.badgeText }}
          >
            Get In Touch
          </span>

          <h1
            data-aos="fade-up"
            className="text-4xl lg:text-5xl font-black mb-6 text-[var(--contact-heading)]"
          >
            Contact{" "}
            <span style={{ color: palette.primary }}>Naz Motors</span>
          </h1>

          <p
            data-aos="zoom-in"
            className="text-xl max-w-3xl mx-auto leading-relaxed text-[var(--contact-muted)]"
          >
            Welcome to Naz Motors — Leicester’s trusted name in automotive
            service excellence. Whether you need reliable repairs, MOT testing,
            or quality second-hand car parts, our experienced team is here to
            help. Reach out today for expert advice and affordable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
