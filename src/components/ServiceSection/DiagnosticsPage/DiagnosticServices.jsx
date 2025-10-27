// File: DiagnosticServices.jsx
import React from "react";
import {
  FaSearch,
  FaBolt,
  FaCheckCircle,
  FaChartLine,
  FaChartBar,
  FaGasPump,
  FaTachometerAlt,
} from "react-icons/fa";

export default function DiagnosticServices() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--aircon-heading)]">
            Our Diagnostic Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            From fault finding to performance tuning, we offer comprehensive diagnostic solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vehicle Diagnostics */}
          <div
            className="
              flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2
              bg-[var(--aircon-card-bg)] text-[var(--aircon-heading)]
              border-[var(--aircon-card-border)]
              transition-all duration-300 
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
            "
          >
            {/* Header */}
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 flex items-center justify-center rounded-full text-[var(--aircon-primary)]" aria-hidden>
                  <FaSearch className="h-8 w-8" />
                </div>
                <div className="font-semibold text-2xl">Vehicle Diagnostics</div>
              </div>
              <div className="text-base text-[var(--aircon-muted)]">
                Professional fault finding and system analysis
              </div>
            </div>

            {/* Content */}
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Feature icon={<FaCheckCircle />} label="Engine Management" />
                <Feature icon={<FaCheckCircle />} label="ABS Systems" />
                <Feature icon={<FaCheckCircle />} label="Airbag Systems" />
                <Feature icon={<FaCheckCircle />} label="Transmission" />
                <Feature icon={<FaCheckCircle />} label="Climate Control" />
                <Feature icon={<FaCheckCircle />} label="Electrical Systems" />
              </div>

              <div className="pt-4 border-t border-[var(--aircon-card-border)]">
                <p className="text-sm mb-3 text-[var(--aircon-muted)]">
                  Using professional diagnostic equipment to identify faults quickly and accurately
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--aircon-muted)]">+ parts if required</span>
                </div>
              </div>
            </div>
          </div>

          {/* ECU Remapping */}
          <div
            className="
              flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2
              bg-[var(--aircon-card-bg)] text-[var(--aircon-heading)]
              border-[var(--aircon-card-border)]
              transition-all duration-300 
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
            "
          >
            {/* Header */}
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 flex items-center justify-center rounded-full text-[var(--aircon-primary)]" aria-hidden>
                  <FaBolt className="h-8 w-8" />
                </div>
                <div className="font-semibold text-2xl">ECU Remapping</div>
              </div>
              <div className="text-base text-[var(--aircon-muted)]">
                Performance and efficiency enhancement tuning
              </div>
            </div>

            {/* Content */}
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Mini icon={<FaChartLine />} label="Stage 1 Remap" />
                <Mini icon={<FaChartBar />} label="Stage 2 Remap" />
                <Mini icon={<FaGasPump />} label="Economy Tune" />
                <Mini icon={<FaTachometerAlt />} label="Performance Tune" />
              </div>

              <div className="pt-4 border-t border-[var(--aircon-card-border)]">
                <p className="text-sm mb-3 text-[var(--aircon-muted)]">
                  Professional ECU tuning for improved power, torque, and fuel efficiency
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--aircon-muted)]">Stage 1 remap</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ----- Small helpers ----- */
function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-[var(--aircon-heading)]">
      <span className="h-5 w-5 flex items-center justify-center text-[var(--aircon-check-icon)]">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function Mini({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-[var(--aircon-heading)]">
      {React.cloneElement(icon, {
        className: "h-5 w-5",
        style: { color: "var(--aircon-primary)" },
      })}
      <span className="text-sm">{label}</span>
    </div>
  );
}
