import React,{useRef,useState} from 'react'
import ofis from './ofis.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";



// import required modules
import { EffectCreative } from "swiper";


import { EffectCube, Pagination } from "swiper";

function Ofis() {
  return (
    <div>
      <div className={ofis.bigdiv}>

      </div>
      <div className={ofis.why}>

<p>
Məkanınız üçün bitkiləri necə seçmək olar?</p>
</div>
<div className={ofis.line}><h2></h2></div>
<div className={`${ofis.mainWhy} ${ofis.container}`}>
<div  data-aos="fade-right" className={ofis.mainWhy1}>
    <img src='https://res.cloudinary.com/patch-gardens/image/upload/c_scale,h_144,q_auto:good,w_144/v1/cms/B2B-Light.svg' />
    <span>
     
Bütün bitkilərin yaşaması üçün bir az təbii günəş işığı lazımdır, ona görə də nə qədər aldığınızı yoxlayın.</span>
</div>
<div  data-aos="fade-up" className={ofis.mainWhy1}>
    <img src='https://res.cloudinary.com/patch-gardens/image/upload/c_scale,h_144,q_auto:good,w_144/v1/cms/B2B-Temperature.svg' />
    <span>
  
Bitkilər kifayət qədər sabit temperaturu sevirlər, ona görə də onları radiatorlardan və ya kondisionerlərdən uzaq tutun.</span>
</div>
<div   data-aos="fade-left" className={ofis.mainWhy1}>
    <img src='https://res.cloudinary.com/patch-gardens/image/upload/c_scale,h_144,q_auto:good,w_144/v1/cms/B2B-Space.svg' />
    <span>
   Əsas sahələrdə yalnız bir neçə bitki bir məkanı sönükdən möhtəşəmə çevirə bilər.</span>
</div>
</div>


    </div>
  )
}

export default Ofis