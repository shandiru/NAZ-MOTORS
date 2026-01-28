import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MoveLeft, MoveRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const BenefitsTopArrows = () => {
  const slides = [
  {
    id: 1,
    image: "ALLOYS.png",
    title: "ALLOYS",
    desc: "Quality second-hand Wheel Rims for various vehicle makes and models.",
  },
  {
    id: 2,
    image: "BONNET.jpg",
    title: "BONNET",
    desc: "Durable Engine Covers and front-end body panels in excellent condition.",
  },
  {
    id: 3,
    image: "BUMPER.jpg",
    title: "BUMPER",
    desc: "Front and rear Impact Protection components to keep your vehicle safe.",
  },
  {
    id: 4,
    image: "DOORBOOT LOCKS.jpg",
    title: "DOOR/BOOT LOCKS",
    desc: "Reliable Security Hardware and locking mechanisms for doors and trunks.",
  },
  {
    id: 5,
    image: "DOORS.png",
    title: "DOORS",
    desc: "Complete Vehicle Doors available for a wide range of automotive brands.",
  },
  {
    id: 6,
    image: "ENGINES.png",
    title: "ENGINES",
    desc: "Fully tested Complete Engine Units ready for installation.",
  },
  {
    id: 7,
    image: "FOR BREAKING.jpg",
    title: "FOR BREAKING",
    desc: "Extensive Parts Inventory from vehicles currently being dismantled.",
  },
  {
    id: 8,
    image: "FRONT PANEL.png",
    title: "FRONT PANEL",
    desc: "Essential Body Components and structural front-end assemblies.",
  },
  {
    id: 9,
    image: "FUEL CAPS.png",
    title: "FUEL CAPS",
    desc: "Replacement Tank Covers and fuel system sealing components.",
  },
  {
    id: 10,
    image: "GEAR SELECTOR.jpg",
    title: "GEAR SELECTOR",
    desc: "Precision Shift Controls for both manual and automatic transmissions.",
  },
  {
    id: 11,
    image: "GEARBOX.jpg",
    title: "GEARBOX",
    desc: "Tested Transmissions and drivetrain components for smooth performance.",
  },
  {
    id: 12,
    image: "GLOVE BOX.png",
    title: "GLOVE BOX",
    desc: "Interior Dashboard Storage compartments and trim accessories.",
  }
];
  return (
    <section className="bg-white dark:bg-black py-24 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header with Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-black/60 dark:text-white/60 font-bold uppercase tracking-[0.2em] text-xs mb-6">
              <span className="w-6 h-[1px] bg-[#B62025] dark:text-[#FF4B4B]"></span>
              Benefits
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-[1.1] max-w-2xl">
              Don’t let your marketing be guided by <span className="text-[#B62025] dark:text-[#FF4B4B]">guesswork.</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button className="prev-btn w-14 h-14 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center text-black dark:text-white hover:bg-[#B62025] dark:hover:bg-[#FF4B4B] hover:text-white dark:hover:text-white transition-all duration-300">
              <MoveLeft size={24} />
            </button>
            <button className="next-btn w-14 h-14 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center text-black dark:text-white hover:bg-[#B62025] dark:hover:bg-[#FF4B4B] hover:text-white dark:hover:text-white transition-all duration-300">
              <MoveRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3.2 },
            }}
            /* FIX 1: Ensure Swiper wrapper uses flex-stretch */
            className="!overflow-visible swiper-stretch"
          >
            {slides.map((slide) => (
              /* FIX 2: SwiperSlide must be h-full */
              <SwiperSlide key={slide.id} className="!h-auto">
                <div className="bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-[2rem] p-8 h-full flex flex-col shadow-xl transition-all duration-300 group">
                  {/* Image Container */}
                  <div className="flex justify-center mb-10 mt-4">
                    <div className="w-48 h-48 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center overflow-hidden">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 leading-tight group-hover:text-[#B62025] dark:text-[#FF4B4B]">
                      {slide.title}
                    </h3>
                    {/* FIX 3: flex-grow on paragraph ensures link stays at bottom */}
                    <p className="text-black/60 dark:text-white/60 text-lg mb-8 flex-grow leading-relaxed">
                      {slide.desc}
                    </p>
                    
                   
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Required CSS for Swiper height matching */}
      <style jsx global>{`
        .swiper-stretch .swiper-wrapper {
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default BenefitsTopArrows;