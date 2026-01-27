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
      image: "https://cdn.prod.website-files.com/6219607d9b553d9c17ba8d9a/622cfbee02a6351e72be3fe5_Mask%20Group.png",
      title: "See where your efforts are paying off.",
      desc: "Measure social media analytics with accurate, auto-generated reports. Know what’s getting customers.",
    },
    {
      id: 2,
      image: "https://cdn.prod.website-files.com/6219607d9b553d9c17ba8d9a/622cfcda79149c27803e6a63_Mask%20Group%201.png",
      title: "Adjust your strategy in real-time.",
      desc: "Don’t wait till you lose hundreds of dollars to rework your campaigns. Make changes faster.",
    },
    {
      id: 3,
      image: "https://cdn.prod.website-files.com/6219607d9b553d9c17ba8d9a/622cfcd91b24b4ee9584abfc_Mask%20Group%202.png",
      title: "Get down in the nitty-gritty of your data.",
      desc: "Track your performance across channels, campaigns and customer profiles.",
    },
    {
      id: 4,
      image: "https://cdn.prod.website-files.com/6219607d9b553d9c17ba8d9a/622cfcd9a1d15a4f5ad2f432_Mask%20Group%203.png",
      title: "Analyze your growth trends.",
      desc: "Understand how your audience grows over time with detailed visual charts.",
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-24 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header with Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-black/60 dark:text-white/60 font-bold uppercase tracking-[0.2em] text-xs mb-6">
              <span className="w-6 h-[1px] bg-[#B62025] dark:bg-[#FF4B4B]"></span>
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
            className="!overflow-visible"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-[2rem] p-8 h-full flex flex-col shadow-xl transition-all duration-300">
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
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 leading-tight group-hover:text-[#B62025] dark:group-hover:text-[#FF4B4B]">
                      {slide.title}
                    </h3>
                    <p className="text-black/60 dark:text-white/60 text-lg mb-8 flex-grow leading-relaxed">
                      {slide.desc}
                    </p>
                    
                    {/* Learn More Link */}
                    <a href="#" className="inline-flex items-center gap-2 text-[#B62025] dark:text-[#FF4B4B] font-bold text-lg group w-fit">
                      Learn More 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BenefitsTopArrows;