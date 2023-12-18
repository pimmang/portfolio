import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";

const KeahlianComponent = () => {
  return (
    <>
      <div className="keahlian w-100 text-center d-flex flex-column justify-content-center">
        <h3
          className="mb-4"
          style={{
            color: "var(--primary-color)",
            textShadow: "0px 0px 5px  rgba(0, 0, 0, 0.3)",
          }}
          data-aos="fade-up"
        >
          Tools & Sowtware
        </h3>
        <div className="container d-flex" data-aos="fade-up">
          <Swiper
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 0,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide  >
              <img src="src/assets/css.png" />
            </SwiperSlide>
            <SwiperSlide >
              <img src="src/assets/html.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/js.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/laravel.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/react.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/bootstrap.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/sql.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/ai.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/canva.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/figma.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default KeahlianComponent;
