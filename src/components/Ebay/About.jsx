import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Warehouse, 
  ShieldCheck, 
  Truck, 
  Search, 
  Users, 
  DollarSign, 
  Factory
} from 'lucide-react';

const AboutSection = () => {
  const features = [
    { 
      title: "Direct Access to Stock", 
      desc: "We run our own car scrapping facility, giving us direct access to high-quality inventory.", 
      icon: <Factory size={16} /> 
    },
    { 
      title: "Real In-House Expertise", 
      desc: "Our operation is backed by real automotive experts, not just resellers.", 
      icon: <Wrench size={16} /> 
    },
    { 
      title: "Inspected and Tested", 
      desc: "Every component is carefully checked before it’s listed and shipped to ensure safety.", 
      icon: <Search size={16} /> 
    },
    { 
      title: "Under One Roof", 
      desc: "Parts are sourced, inspected, and dispatched from one location for total speed and control.", 
      icon: <Warehouse size={16} /> 
    },
    { 
      title: "Quality Standards", 
      desc: "We focus on quality, safety, and performance standards with every single order.", 
      icon: <ShieldCheck size={16} /> 
    },
    { 
      title: "Fast Dispatch", 
      desc: "Our warehouse setup allows for reliable availability and lightning-fast shipping.", 
      icon: <Truck size={16} /> 
    },
    { 
      title: "Support for All", 
      desc: "We proudly support professional garages, mechanics, and individual car owners alike.", 
      icon: <Users size={16} /> 
    },
    { 
      title: "Sensible Costs", 
      desc: "We keep costs affordable so you avoid unnecessary delays and high expenses.", 
      icon: <DollarSign size={16} /> 
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-16 md:py-24 px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Side: Brand Story */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="flex items-center gap-2 text-[#B62025] dark:text-[#FF4B4B] font-bold uppercase tracking-widest text-xs mb-4">
            <span className="w-8 h-[2px] bg-[#B62025] dark:text-[#FF4B4B]"></span>
            Official eBay Store
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black dark:text-white mb-6 md:mb-8">
            NextDayParts: Powered by <span className="text-[#B62025] dark:text-[#FF4B4B]">Naz Motors.</span>
          </h2>

          <div className="space-y-6 text-black/70 dark:text-white/70 text-base md:text-lg max-w-lg mb-10">
            <p>
              We supply reliable and affordable used car parts you can trust. Our goal is simple: 
              <span className="font-bold text-black dark:text-white"> to help you get back on the road quickly.</span>
            </p>
            <p className="text-sm border-l-4 border-[#B62025] dark:text-[#FF4B4B] pl-4 italic">
              "We operate from multiple warehouses filled with quality second-hand parts, ensuring 
              we have exactly what you need when you need it."
            </p>
          </div>
          
          <a target="_blank" href='https://www.ebay.co.uk/str/nextdaypartsltd?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=7zQt8k5DSfu&sssrc=3418065&ssuid=7zQt8k5DSfu&stype=1&widget_ver=artemis&media=WHATS_APP' className="group relative w-full sm:w-auto px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all shadow-xl">
            <span className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-tight">
              Browse Our Inventory <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-[#B62025] dark:text-[#FF4B4B] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Right Side: Features Timeline */}
        {/* Added ml-4 to prevent the line from touching the screen edge on mobile */}
        <div className="space-y-0 ml-4 lg:ml-0">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              /* The border-l and pl-8 create the vertical line and content spacing */
              className="flex gap-6 pb-10 border-l border-black/10 dark:border-white/10 pl-8 relative group last:border-l-0"
            >
              {/* Dynamic Icon Node */}
              {/* Centered perfectly on the border line */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 bg-white dark:bg-black border border-black dark:border-white rounded-full flex items-center justify-center z-10 
                              group-hover:bg-[#B62025] dark:group-hover:bg-[#FF4B4B] 
                              group-hover:border-[#B62025] dark:group-hover:border-[#FF4B4B] 
                              shadow-sm transition-all duration-300">
                <div className="text-black dark:text-white group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              <div className="pt-0.5">
                <h3 className="text-lg md:text-xl font-bold text-[#B62025] dark:text-[#FF4B4B] mb-2 uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-black/80 dark:text-white/80 leading-relaxed max-w-md text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;