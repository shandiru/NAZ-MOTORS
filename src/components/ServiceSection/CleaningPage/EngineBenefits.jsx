// src/components/EngineBenefits.jsx
import {
  FaChartLine,
  FaShieldAlt,
  FaFilter,
  FaTachometerAlt,
} from "react-icons/fa";

export default function EngineBenefits() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--aircon-heading)]">
            Benefits of Engine Cleaning
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Professional engine cleaning delivers immediate and long-term
            benefits for your vehicle
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaChartLine className="w-6 h-6 text-[var(--aircon-icon)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Improved Performance
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
              Restore lost power and engine responsiveness
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaShieldAlt className="w-6 h-6 text-[var(--aircon-icon)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Better Fuel Economy
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
              Reduce fuel consumption and running costs
            </p>
          </div>

          {/* Box 3 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaFilter className="w-6 h-6 text-[var(--aircon-icon)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Reduced Emissions
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
              Lower harmful exhaust emissions
            </p>
          </div>

          {/* Box 4 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaTachometerAlt className="w-6 h-6 text-[var(--aircon-icon)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Extended Engine Life
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
              Prevent costly engine damage and repairs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
