// File: WhenDoYouNeedDiagnostics.jsx
import React from "react";
import {
  FaExclamationTriangle,
  FaChartLine,
  FaGasPump,
  FaSearch,
} from "react-icons/fa";

export default function WhenDoYouNeedDiagnostics() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--aircon-heading)]">
            When Do You Need Diagnostics?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Don&apos;t ignore these warning signs – early diagnosis can save you money
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Warning Lights */}
          <Card
            icon={<FaExclamationTriangle className="h-12 w-12" />}
            title="Warning Lights"
            desc="Engine management, ABS, or other dashboard warning lights"
          />

          {/* Poor Performance */}
          <Card
            icon={<FaChartLine className="h-12 w-12" />}
            title="Poor Performance"
            desc="Reduced power, poor acceleration, or rough running"
          />

          {/* High Fuel Consumption */}
          <Card
            icon={<FaGasPump className="h-12 w-12" />}
            title="High Fuel Consumption"
            desc="Unexplained increase in fuel usage or poor economy"
          />

          {/* Strange Noises */}
          <Card
            icon={<FaSearch className="h-12 w-12" />}
            title="Strange Noises"
            desc="Unusual sounds from engine, transmission, or other systems"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Card ---------- */
function Card({ icon, title, desc }) {
  return (
    <div
      className="
        text-center p-6 rounded-lg border shadow-sm
        bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
        transition-all duration-300
        hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
        hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
      "
    >
      <div
        className="
          mx-auto mb-4 w-16 h-16 rounded-xl flex items-center justify-center
          bg-[var(--aircon-icon-bg)] text-[var(--aircon-icon)]
        "
      >
        {/* color inherits from text-[var(--aircon-icon)] */}
        {icon}
      </div>

      <h3 className="font-semibold mb-2 text-[var(--aircon-heading)]">{title}</h3>
      <p className="text-sm text-[var(--aircon-muted)]">{desc}</p>
    </div>
  );
}
