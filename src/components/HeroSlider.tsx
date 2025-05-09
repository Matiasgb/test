"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/hero1.png",
    title: "YOUR GLOBAL PARTNER IN PRECIOUS METALS",
    subtitle: "A leading integrated precious metals group",
  },
  {
    image: "/images/hero2.png",
    title: "SUSTAINABLE METAL SOLUTIONS",
    subtitle: "Delivering excellence and integrity worldwide",
  },
  {
    image: "/images/hero3.png",
    title: "PRECIOUS METAL EXPERTISE YOU CAN TRUST",
    subtitle: "Innovation, Refinement, Reliability",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden md:h-[90vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
              <h1 className="font-sans text-[40px] leading-[54px] font-light">
                {slide.title}
              </h1>
              <p className="mt-4 hidden font-sans text-[18px] leading-[23px] font-normal md:block">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
