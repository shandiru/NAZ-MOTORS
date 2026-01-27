import React from 'react';
import { motion } from 'framer-motion';
import { Check, Layout, Layers, Box, Zap, Monitor, Maximize, MousePointer, Image as ImageIcon, Code, ShieldCheck } from 'lucide-react';

const AboutSection = () => {
  const features = [
    { title: "Modern design", desc: "Aesthetical & clean beautiful designs designed by senior art director.", icon: <Check /> },
    { title: "30+ web pages", desc: "Unique ready-made static and CMS Collection pages include CMS connections.", icon: <Layout /> },
    { title: "60+ UI Kit components", desc: "Pre-built different UI layouts, navigations, and sections for content and hero headers.", icon: <Layers /> },
    { title: "30+ Symbols", desc: "More than 30 symbols are ready to use with override setup instances.", icon: <Box /> },
    { title: "Unique animations", desc: "Uniquely developed interactions & animations only for the Karuso template.", icon: <Zap /> },
    { title: "CMS ready to use", desc: "CMS collections and pages are set up and connected. You can copy/paste/delete content.", icon: <Monitor /> },
    { title: "Responsive design", desc: "Fully responsive design on all devices using VW, em, and rem units for perfect layouts.", icon: <Maximize /> },
    { title: "Fullscreen menu", desc: "Custom animated fullscreen aside menu in all responsive breakpoints.", icon: <MousePointer /> },
    { title: "3D images", desc: "Set up 3D transforms for images and texts.", icon: <ImageIcon /> },
    { title: "Well developed", desc: "Created by the Webflow professional partner.", icon: <Code /> },
    { title: "Exclusively for Webflow", desc: "Available only in the Webflow marketplace.", icon: <ShieldCheck /> },
  ];

  return (
    <section className="bg-white dark:bg-black py-20 px-6 md:px-20 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <div className="sticky top-20 h-fit">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white mb-8">
            Trendy & robust no-code CMS template ready to use for your showcase works. 
            <span className="text-[#B62025] dark:text-[#FF4B4B]"> Easy and fast.</span>
          </h2>
          
          <button className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all">
            <span className="relative z-10 flex items-center gap-2 font-bold">
              Main Homepage <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            {/* Hover Background - Uses Red */}
            <div className="absolute inset-0 bg-[#B62025] dark:bg-[#FF4B4B] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Right Side: Animated List */}
        <div className="space-y-0">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 pb-10 border-l border-black/10 dark:border-white/10 pl-8 relative group"
            >
              {/* Checkmark Node */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 bg-white dark:bg-black border border-black dark:border-white rounded-full flex items-center justify-center z-10 
                              group-hover:bg-[#B62025] dark:group-hover:bg-[#FF4B4B] 
                              group-hover:border-[#B62025] dark:group-hover:border-[#FF4B4B] 
                              transition-all duration-300">
                <Check size={14} strokeWidth={4} className="text-black dark:text-white group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#B62025] dark:text-[#FF4B4B] mb-2 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed max-w-md text-sm md:text-base">
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