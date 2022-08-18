
import style1 from "./home.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination } from "swiper";


function CCCCC() {
  return (
    <>
          
      {/* <Swiper
              freeMode={true}
              grabCursor={true}
        modules={[Pagination,Autoplay]}

        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4500,
          duration:9000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>    */}
          <div className={style1.overlay}>
        <div className={style1.overlayWrite}>
          <h1 data-aos="fade-right"   data-aos-duration='1000'    className={style1.font}><b>Bitkilərinizi göstərin...</b>
</h1>
          <p data-aos="fade-right"   data-aos-delay='250'   data-aos-duration='1400'>
          Tam yetişdirilmiş, dibçək otaq bitkiləri və yüksək keyfiyyətli qulluq vasitələri ilə evinizi yay vahasına çevirin.
          </p>
          <button data-aos="zoom-in"   data-aos-delay='350'   data-aos-duration='1400' className={style1.button1}>
            <NavLink to={"bitkiler"}>Bitkini satin al</NavLink>
          </button >
          <button data-aos="zoom-in"   data-aos-delay='350'   data-aos-duration='1400' className={style1.button2}>
            {" "}
            <NavLink to={"bitkiyequlluq"}>Bitkini oyren</NavLink>
          </button>
        </div>
      </div>
      {/* </SwiperSlide>
        <SwiperSlide>
        <div className={`${style1.overlay} ${style1.overlay1}`}>
        <div className={style1.overlayWrite}>
          <p data-aos="zoom-in"   data-aos-duration='1000'    className={style1.font}><b>Bitkilərinizi göstərin...</b>
</p>
          <p data-aos="zoom-in"   data-aos-delay='250'   data-aos-duration='1400'>
          Tam yetişdirilmiş, dibçək otaq bitkiləri və yüksək keyfiyyətli qulluq vasitələri ilə evinizi yay vahasına çevirin.
          </p>
          <button data-aos="zoom-in"   data-aos-delay='350'   data-aos-duration='1400' className={style1.button1}>
            <NavLink to={"bitkiler"}>Bitkini satin al</NavLink>
          </button >
          <button data-aos="zoom-in"   data-aos-delay='350'   data-aos-duration='1400' className={style1.button2}>
            {" "}
            <NavLink to={"bitkiyequlluq"}>Bitkini oyren</NavLink>
          </button>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>   <div className={`${style1.overlay} ${style1.overlay2}`}>
        <div className={style1.overlayWrite}>
          <p data-aos="zoom-in"   data-aos-duration='1000'    className={style1.font}><b>Bitkilərinizi göstərin...</b>
</p>
          <p data-aos="zoom-in"   data-aos-delay='250'   data-aos-duration='1400'>
          Tam yetişdirilmiş, dibçək otaq bitkiləri və yüksək keyfiyyətli qulluq vasitələri ilə evinizi yay vahasına çevirin.
          </p>
          <button data-aos="zoom-in"   data-aos-delay='350'   data-aos-duration='1400' className={style1.button1}>
            <NavLink to={"bitkiler"}>Bitkini satin al</NavLink>
          </button >
          <button data-aos="zoom-in"   data-aos-delay='350'   data-aos-duration='1400' className={style1.button2}>
            {" "}
            <NavLink to={"bitkiyequlluq"}>Bitkini oyren</NavLink>
          </button>
        </div>
      </div></SwiperSlide>
    
      </Swiper> */}

    </>
  )
}

export default CCCCC