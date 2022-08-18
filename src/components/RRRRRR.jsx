import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style1 from "./home.module.css";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const kart = useSelector((state) => state.cardReducer);

  const dispatch = useDispatch();
  const select = useSelector((state) => state.allDataReducer);
  const handleSebet = (inner) => {
    let currentData = kart.filter((index) => index.id == inner.id);
    if (currentData.length > 0) {
      return false;
    } else {
      dispatch({ type: "Add_CARD", payload: inner });
    }
  };
  return (
    <section className={style1.swiper32}>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode,Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          // clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {select.map((index) => (
          <SwiperSlide key={index.id} className={style1.div2}>
            <div className={style1.cardDiv1}>
              <div className={style1.img}>
                <Link to={`/item/${index.id}`}>
                  <img src={index.img} alt="" />
                  <img className={style1.block} src={index.img2} />
                </Link>
              </div>
              <div className={style1.cardMini1}>
                <h3>{index.name}</h3>
                <p>
                  {index.price}
                  <i class="fa-solid fa-manat-sign"></i>
                </p>
                {/* <div className={style1.cardButton}> */}

                {/* <button className={style1.btn2}><h3>Etrafli</h3></button> */}
                <button
                  onClick={() => handleSebet(index)}
                  className={style1.btn2}
                >
                  <p>
                    {" "}
                    <i class="fa-solid fa-cart-shopping"></i> Sebete elave et
                  </p>
                </button>

                {/* </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
