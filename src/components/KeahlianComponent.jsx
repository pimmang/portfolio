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
  const link =
    "https://raw.githubusercontent.com/pimmang/portfolio/main/src/assets/";
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
            <SwiperSlide>
              <img src={link + "css.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "html.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "js.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "laravel.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "react.svg"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "bootstrap.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "sql.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "ai.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "canva.png"} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={link + "figma.png"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default KeahlianComponent;
