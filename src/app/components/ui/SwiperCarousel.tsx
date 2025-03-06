'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCarousel: React.FC<{ slides: React.ReactNode[], spaceBetween? : number }> = ({ slides, spaceBetween = 50 }) => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        loop={true}
        navigation
        className="custom-swiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;