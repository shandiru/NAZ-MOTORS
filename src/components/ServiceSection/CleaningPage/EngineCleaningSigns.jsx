import { FaExclamationTriangle, FaCircle } from "react-icons/fa";

const SectionCard = ({ title, description, items }) => (
  <div
    className="
      flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
      bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)] text-[var(--aircon-heading)]
      transition-all duration-300
      hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
      hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
    "
  >
    <div className="px-6">
      <div className="flex items-center space-x-2 mb-2">
        <FaExclamationTriangle className="h-5 w-5 text-[var(--aircon-icon)]" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm text-[var(--aircon-muted)]">{description}</p>
    </div>
    <div className="px-6">
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-[var(--aircon-heading)]/85 dark:text-[var(--aircon-muted)]"
          >
            <FaCircle className="h-2 w-2 mt-1 mr-2 text-[var(--aircon-check-icon)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function EngineCleaningSigns() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[var(--aircon-heading)]">
            When Do You Need Engine Cleaning?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Recognize the warning signs that indicate your engine needs
            professional cleaning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <SectionCard
            title="Carbon Build-Up Signs"
            description="Signs your engine needs carbon cleaning"
            items={[
              "Loss of engine power",
              "Poor fuel economy",
              "Rough idling",
              "Engine knocking",
              "Failed emissions test",
              "Black exhaust smoke",
            ]}
          />

          <SectionCard
            title="DPF Problems"
            description="Signs your DPF needs cleaning"
            items={[
              "DPF warning light on dashboard",
              "Reduced engine power",
              "Increased fuel consumption",
              "Excessive exhaust smoke",
              "Strong diesel smell",
              "Engine going into limp mode",
            ]}
          />

          <SectionCard
            title="EGR Valve Issues"
            description="Signs your EGR valve needs cleaning"
            items={[
              "Engine management light",
              "Rough idle or stalling",
              "Reduced acceleration",
              "Increased emissions",
              "Poor fuel economy",
              "Engine knocking sounds",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
