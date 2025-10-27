'use client'

export default function ProfessionalCleaningProcess() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side – Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--aircon-heading)]">
              Professional Cleaning Process
            </h2>
            <p className="text-lg mb-8 text-[var(--aircon-muted)]">
              Our advanced engine cleaning services use the latest technology and
              proven methods to safely remove carbon deposits, clean filters, and
              restore engine performance without dismantling your engine.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">Diagnostic Assessment</p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Comprehensive engine diagnostics to identify cleaning requirements
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">Professional Cleaning</p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Advanced cleaning technology removes deposits safely and effectively
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">Performance Testing</p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Post-cleaning diagnostics to verify improved performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side – Recommendations Table */}
          <div className="rounded-lg shadow-md p-8 border transition-colors duration-300 bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--aircon-heading)]">Service Recommendations</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">Carbon Cleaning</span>
                <span className="font-semibold text-[var(--aircon-heading)]">Every 20,000 miles</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">DPF Service</span>
                <span className="font-semibold text-[var(--aircon-heading)]">As required</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">EGR Cleaning</span>
                <span className="font-semibold text-[var(--aircon-heading)]">Every 30,000 miles</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--aircon-muted)]">Preventive Service</span>
                <span className="font-semibold text-[var(--aircon-heading)]">Annually</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
