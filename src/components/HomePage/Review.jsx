"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Review() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-out-cubic" });

    // 🔴 Inline dark/light mode support (no global CSS)
    const updateTheme = () => {
      const html = document.documentElement;
      const section = document.querySelector("#reviews-section");
      if (!section) return;

      const dark = html.classList.contains("dark");
      const vars = dark
        ? {
            "--naz-bg": "#000000",
            "--naz-text": "#FFFFFF",
            "--naz-muted": "#CCCCCC",
            "--naz-red": "#C8102E",
            "--naz-card": "#C8102E",
            "--naz-border": "#333333",
          }
        : {
            "--naz-bg": "#FFFFFF",
            "--naz-text": "#000000",
            "--naz-muted": "#3B3B3B",
            "--naz-red": "#C8102E",
            "--naz-card": "#C8102E",
            "--naz-border": "#E5E5E5",
          };
      Object.entries(vars).forEach(([k, v]) => section.style.setProperty(k, v));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote:
        "Absolute spot and service, had a gearbox and clutch fitted, had the car back the same afternoon. Recommended to many friends — will use them again when needed. Definitely recommend 👍",
      name: "Lee",
    },
    {
      quote:
        "Recently I had a problem with my cluster socket on my car which stopped it working. Naz fixed my car within a day for an affordable price — all very nice people.",
      name: "Jamie Noble",
    },
    {
      quote:
        "Naz was amazing. I was struggling with my gearbox. Someone recommended me to Naz. Naz helped to fix it — I’m so grateful for his work.",
      name: "Sanusi Darboe",
    },
    {
      quote:
        "Used Naz Motors on a few occasions and would 100% recommend them. Especially Naeem — he always goes above and beyond to look after you.",
      name: "Romy",
    },
    {
      quote:
        "An amazing car parts business to deal with. Naz and the team were extremely pleasant and helpful. Assisted me with finding the correct part with a great price. Highly recommended!",
      name: "Ma Yun Fei",
    },
    {
      quote:
        "I highly recommend Naz Motors — excellent service and very reasonable prices. This was my first visit but definitely won’t be my last. Thanks for all your help guys!",
      name: "Yasin Hamid",
    },
    {
      quote:
        "Absolutely brilliant service by Naeem. Managed my expectations in time frame and price. Will always use Naz Motors. Thank you.",
      name: "Joe Boachie",
    },
    {
      quote:
        "Contacted these guys and was amazed how easy the transaction was considering how busy they were. I will definitely buy from you guys again.",
      name: "Spence Jones",
    },
    {
      quote:
        "Amazing customer service 100% recommendation. Felt like a valued customer and they made sure everything was satisfactory.",
      name: "Vicky Beresford",
    },
  ];

  return (
    <section
      id="reviews-section"
      className="py-20 bg-[var(--naz-bg)] transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--naz-text)]">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[var(--naz-muted)]">
            Real reviews from our valued{" "}
            <span className="text-[var(--naz-red)] font-semibold">Naz Motors</span> customers.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
          data-aos="zoom-in"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div
                className="
                  flex flex-col h-full min-h-[260px]
                  bg-[var(--naz-card)] text-white
                  p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300
                "
              >
                <p className="mb-4 flex-grow text-center leading-relaxed text-[15px]">
                  “{t.quote}”
                </p>
                <div className="text-sm font-bold mt-auto text-center">{t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--naz-red);
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: var(--naz-red);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
