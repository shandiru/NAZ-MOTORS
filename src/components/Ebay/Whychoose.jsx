import React from 'react';
import { Shield, Zap, Star, CircleCheck } from 'lucide-react';

const Whychoose = () => {
  const features = [
    {
      title: "Thoroughly Inspected",
      description: "Every part is carefully checked and tested before listing to ensure it meets our quality standards.",
      icon: (colorClass) => <Shield className={`w-8 h-8 ${colorClass} transition-all duration-500`} />,
    },
    {
      title: "Lightning Fast",
      description: "With our own warehouse and logistics, we dispatch orders quickly for next-day delivery.",
      icon: (colorClass) => <Zap className={`w-8 h-8 ${colorClass} transition-all duration-500`} />,
    },
    {
      title: "Family Business",
      description: "Family-owned Naz Motors brings honest advice, friendly service, and dependable parts since day one.",
      icon: (colorClass) => <Star className={`w-8 h-8 ${colorClass} transition-all duration-500`} />,
    },
    {
      title: "Wide Selection",
      description: "Large inventory across multiple makes and models means you'll find what you need.",
      icon: (colorClass) => <CircleCheck className={`w-8 h-8 ${colorClass} transition-all duration-500`} />,
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      {/* Top Accent Line using your Red */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B62025] dark:via-[#FF4B4B] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Why Choose NextDayParts?</h2>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            We combine expertise, quality, and speed to bring you the best used car parts experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl border border-black/10 dark:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer bg-white dark:bg-[#111111] hover:shadow-2xl"
            >
              {/* Shine Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 -translate-x-full group-hover:translate-x-full" />
              
              <div className="relative z-10">
                {/* Icon Container with your Red */}
                <div className="w-16 h-16 rounded-xl bg-[#B62025]/10 dark:bg-[#FF4B4B]/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#B62025] dark:group-hover:bg-[#FF4B4B]">
                  {item.icon("text-[#B62025] dark:text-[#FF4B4B] group-hover:text-white")}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-[#B62025] dark:group-hover:text-[#FF4B4B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Animated Bottom Bar using your Red */}
                <div className="mt-6 h-1 bg-[#B62025] dark:bg-[#FF4B4B] rounded-full transition-all duration-500 w-0 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;