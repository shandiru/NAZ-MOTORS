// File: EcuRemapExplained.jsx
import React from "react";
import {
  FaCogs,
  FaWrench,
  FaCheckCircle,
  FaChartBar,
  FaSearch,
  FaExclamationTriangle,
  FaTachometerAlt,
} from "react-icons/fa";

export default function EcuRemapExplained() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--aircon-heading)]">
          ECU Remapping Explained
        </h2>

        {/* What is an ECU Remap */}
        <div className="mb-16">
          <div
            className="
              flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)] transition-shadow
            "
          >
            <div className="grid auto-rows-min items-start gap-1.5 px-6 text-center">
              <div className="font-semibold text-2xl md:text-3xl text-[var(--aircon-heading)]">
                What is an ECU Remap?
              </div>
              <p className="text-lg text-[var(--aircon-muted)]">
                ECU remapping, also known as chip tuning, is the process of
                modifying a vehicle&apos;s electronic control unit (ECU) to
                improve its performance, power, and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Stage 1 / Stage 2 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Stage 1 */}
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
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="flex items-center gap-3 mb-2">
                <FaCogs className="h-8 w-8 text-[var(--aircon-icon)]" />
                <div className="font-semibold text-2xl">Stage 1 Remap</div>
              </div>
              <p className="text-base text-[var(--aircon-muted)]">
                Software-only adjustment that enhances engine performance
                without physical changes.
              </p>
            </div>

            <div className="px-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-[var(--aircon-primary)]">
                  How Does Stage 1 Remap Work?
                </h4>
                <p className="text-sm text-[var(--aircon-muted)] mb-4">
                  During a Stage 1 remap, our technician connects to your car
                  and reads the existing map data. We then modify the map data
                  to optimise engine performance and upload it back to the ECU.
                  The remapped ECU adjusts fuel injection, ignition timing, and
                  turbo boost pressure to deliver more power and torque.
                </p>
                <p className="text-sm text-[var(--aircon-muted)]">
                  Stage 1 stays within manufacturer limits, making it the most
                  popular and cost-effective way to enhance performance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-[var(--aircon-primary)]">
                  Benefits of Stage 1 Remap
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Increased power and torque output",
                    "Improved throttle response",
                    "Smoother power delivery",
                    "Better fuel efficiency",
                    "Enhanced driving experience",
                    "Better acceleration and top speed",
                    "Increased towing capacity",
                    "Better engine longevity",
                  ].map((t) => (
                    <Item
                      key={t}
                      icon={
                        <FaCheckCircle className="text-[var(--aircon-check-icon)]" />
                      }
                      text={t}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--aircon-card-border)]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--aircon-muted)]">
                    Software only — no hardware changes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
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
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="flex items-center gap-3 mb-2">
                <FaWrench className="h-8 w-8 text-[var(--aircon-icon)]" />
                <div className="font-semibold text-2xl">Stage 2 Remap</div>
              </div>
              <p className="text-base text-[var(--aircon-muted)]">
                Advanced ECU tuning with hardware upgrades for maximum
                performance enhancement.
              </p>
            </div>

            <div className="px-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-[var(--aircon-primary)]">
                  What Does Stage 2 Involve?
                </h4>
                <p className="text-sm text-[var(--aircon-muted)] mb-4">
                  Stage 2 remapping fine-tunes the ECU alongside necessary
                  hardware upgrades to enhance power, torque, and overall
                  drivability while maintaining safety and reliability.
                </p>
                <p className="text-sm text-[var(--aircon-muted)]">
                  Common upgrades include high-flow intake, uprated turbo or
                  intercooler, and more detailed software adjustments to pair
                  with the hardware changes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-[var(--aircon-primary)]">
                  Stage 2 Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <Item
                    icon={<FaChartBar className="text-[var(--aircon-icon)]" />}
                    text="Maximum performance gains"
                  />
                  <Item
                    icon={<FaWrench className="text-[var(--aircon-icon)]" />}
                    text="Hardware upgrades included"
                  />
                  <Item
                    icon={<FaCogs className="text-[var(--aircon-icon)]" />}
                    text="Fine-tuning of engine parameters"
                  />
                  <Item
                    icon={<FaSearch className="text-[var(--aircon-icon)]" />}
                    text="Significantly improved performance"
                  />
                  <Item
                    icon={
                      <FaCheckCircle className="text-[var(--aircon-check-icon)]" />
                    }
                    text="Maintains safety and reliability"
                  />
                  <Item
                    icon={
                      <FaTachometerAlt className="text-[var(--aircon-icon)]" />
                    }
                    text="Tailored approach for optimal results"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--aircon-card-border)]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--aircon-muted)]">
                    + hardware modifications
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom three cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          <InfoCard
            icon={
              <FaExclamationTriangle className="h-6 w-6 text-[var(--aircon-icon)]" />
            }
            title="Fault Finding"
            items={[
              "Engine warning lights",
              "Performance issues",
              "Starting problems",
              "Electrical faults",
              "Sensor malfunctions",
              "Communication errors",
            ]}
            badge="Professional Equipment"
          />
          <InfoCard
            icon={<FaSearch className="h-6 w-6 text-[var(--aircon-icon)]" />}
            title="Professional Process"
            items={[
              "Read existing ECU data",
              "Analyse current performance",
              "Modify map parameters",
              "Upload optimised software",
              "Test drive validation",
              "Performance verification",
            ]}
            badge="Qualified Technicians"
          />
          <InfoCard
            icon={
              <FaCheckCircle className="h-6 w-6 text-[var(--aircon-check-icon)]" />
            }
            title="Safety & Reliability"
            items={[
              "Manufacturer limit compliance",
              "Engine safety maintained",
              "Reversible modifications",
              "Professional consultation",
              "Quality assurance testing",
              "Ongoing support provided",
            ]}
            badge="50+ Years Experience"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function Item({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-[var(--aircon-heading)]">
      {React.cloneElement(icon, {
        className: (icon.props.className || "") + " h-4 w-4",
      })}
      <span className="text-sm">{text}</span>
    </div>
  );
}

function InfoCard({ icon, title, items, badge }) {
  return (
    <div
      className="
        flex flex-col gap-6 rounded-xl border py-6 shadow-sm
        bg-[var(--aircon-card-bg)] text-[var(--aircon-heading)]
        border-[var(--aircon-card-border)]
        transition-all duration-300
        hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
        hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
      "
    >
      <div className="grid auto-rows-min items-start gap-1.5 px-6">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="font-semibold leading-none">{title}</div>
        </div>
      </div>
      <div className="px-6">
        <ul className="space-y-2 text-sm text-[var(--aircon-heading)]/85 dark:text-[var(--aircon-muted)]">
          {items.map((it) => (
            <li key={it}>• {it}</li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-[var(--aircon-card-border)]">
          <span
            className="
              inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs font-medium w-fit
              border-[var(--aircon-outline)]
              bg-[var(--aircon-badge-bg)] text-[var(--aircon-badge-text)]
            "
          >
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}
