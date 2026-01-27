import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  // Manage which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why buy used car parts instead of new?",
      answer: "Used parts are significantly more affordable while still meeting quality standards. Our parts are carefully inspected and tested before listing, ensuring reliability at a fraction of the cost of new parts."
    },
    {
      question: "Do you offer returns or guarantees?",
      answer: "Yes! We accept returns and offer a 30-day guarantee on all purchases. If you're not satisfied with your part, you can return it hassle-free. All transactions are completed securely through eBay with their buyer protection."
    },
    {
      question: "How quickly can you dispatch parts?",
      answer: "We pride ourselves on fast dispatch. With our own warehouse facilities, we can often ship same-day or next-day. For most orders, you can expect delivery within 2-3 business days."
    },
    {
      question: "What makes NextDayParts different?",
      answer: "We're backed by Naz Motors, a family-run business with real automotive expertise. We own our own car scrapping facility and warehouses, allowing us to source, inspect, and dispatch parts quickly all under one roof."
    },
    {
      question: "Can I find parts for my specific vehicle?",
      answer: "We maintain a large inventory across multiple makes and models. If you can provide your vehicle year, make, and model, we can help you find the right part. Check our eBay store for specific compatibility details."
    },
    {
      question: "Are your parts environmentally friendly?",
      answer: "Absolutely! By choosing used parts, you're reducing waste and supporting a circular economy. Recycling car parts is a sustainable alternative to manufacturing new ones."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-black/60 dark:text-white/60 mb-12 text-lg">
          Get answers to common questions about our parts and services.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group border rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#B62025] dark:border-[#FF4B4B] shadow-sm' 
                  : 'border-black/10 dark:border-white/10'
              }`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-[#111111] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300"
              >
                <span className={`text-left font-semibold transition-colors ${
                  openIndex === index 
                    ? 'text-[#B62025] dark:text-[#FF4B4B]' 
                    : 'text-black dark:text-white'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-[#B62025] dark:text-[#FF4B4B] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  size={20}
                />
              </button>

              {/* Animated Content Area */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-[#B62025]/5 dark:bg-[#FF4B4B]/5 border-t border-black/5 dark:border-white/5 text-black/70 dark:text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;