'use client'

import { FaAward, FaShieldAlt, FaUsers } from 'react-icons/fa'

export default function TechnicianExperienceSection() {
  return (
    <section className="py-16 bg-[#F9F9F9] dark:bg-[#0B0B0B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] dark:text-white mb-6">
              Qualified & Experienced Technicians
            </h2>
            <p className="text-lg text-[#4B5563] dark:text-gray-400 mb-8">
              Our certified technicians bring years of hands-on experience to every vehicle. 
              From MOT testing to full servicing, Naz Motor’s ensures your car is handled 
              by professionals who follow the highest safety and performance standards.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaAward className="h-6 w-6 text-[#C8102E] mt-1 dark:text-[#FF5C70]" />
                <div>
                  <p className="font-semibold text-[#111827] dark:text-white">
                    Certified Technicians
                  </p>
                  <p className="text-sm text-[#4B5563] dark:text-gray-400">
                    Skilled professionals with manufacturer-level training and precision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaShieldAlt className="h-6 w-6 text-[#C8102E] mt-1 dark:text-[#FF5C70]" />
                <div>
                  <p className="font-semibold text-[#111827] dark:text-white">
                    DVSA-Approved MOT Testers
                  </p>
                  <p className="text-sm text-[#4B5563] dark:text-gray-400">
                    Fully accredited MOT testing station ensuring compliance and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaUsers className="h-6 w-6 text-[#C8102E] mt-1 dark:text-[#FF5C70]" />
                <div>
                  <p className="font-semibold text-[#111827] dark:text-white">
                    Family Business Since 1973
                  </p>
                  <p className="text-sm text-[#4B5563] dark:text-gray-400">
                    Over 50 years of trusted service, combining expertise with care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Service Intervals */}
          <div className="bg-white dark:bg-[#111111] rounded-lg shadow-md p-8 border border-[#E6EAE7] dark:border-[#2A2A2A] transition-colors duration-300">
            <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-4">
              Service Intervals
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-[#E6EAE7] dark:border-[#2A2A2A] pb-2">
                <span className="text-[#4B5563] dark:text-gray-400">Basic Service</span>
                <span className="font-semibold text-[#C8102E] dark:text-[#FF5C70]">Every 6 months</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E6EAE7] dark:border-[#2A2A2A] pb-2">
                <span className="text-[#4B5563] dark:text-gray-400">Full Service</span>
                <span className="font-semibold text-[#C8102E] dark:text-[#FF5C70]">Every 12 months</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E6EAE7] dark:border-[#2A2A2A] pb-2">
                <span className="text-[#4B5563] dark:text-gray-400">MOT Test</span>
                <span className="font-semibold text-[#C8102E] dark:text-[#FF5C70]">Annually (3+ years)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#4B5563] dark:text-gray-400">Cambelt</span>
                <span className="font-semibold text-[#C8102E] dark:text-[#FF5C70]">60,000–100,000 miles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
