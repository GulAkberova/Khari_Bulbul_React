import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductSlider from './ProductSlider'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

// import {FreeMode} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/free-mode';
// import 'bootstrap/dist/css/bootstrap.min.css'
import{useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import item from './item.module.css'


function Qabcarusel() {
    const select1=useSelector(state=>state.potsDataReducer)
    const dispatch= useDispatch()
    const kart = useSelector(state => state.cardReducer)



    const handleSebet=(inner)=>{
        let currentData=kart.filter(index=>index.id==inner.id)
        if(currentData.length>0){
          return false
        }else{
          dispatch({type:"Add_CARD",payload:inner})
    
        }
      }

    
  return (
    <div>

<div className={item.name}>
      <p>Siz də sevə bilərsiniz</p>
      <span></span>
      </div>
      <div className={item.bigdiv1}>
        <div className={item.div1}>
<Swiper
modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
spaceBetween={10}
slidesPerView={4}
navigation
pagination={{
  // clickable: true,
  dynamicBullets: true,
}}
autoplay={{
  delay: 1500,
  disableOnInteraction: false,
}}
//   pagination={{ clickable: true }}
//   scrollbar={{ draggable: true }}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
>
{
 select1.map(index=>(
     <SwiperSlide key={index.id}  className={item.div2}>
     <div className={item.cardDiv1}>
      <div className={item.img}>
      <Link to={`/info/${index.id}`} >
  <img src={index.img} alt="" />
  <img className={item.block} src={index.img2}/>
  </Link>
   </div>
   <div className={item.cardMini1}>
  <h3>{index.name}</h3>
  <p>{index.price}<i class="fa-solid fa-manat-sign"></i></p>
  {/* <div className={style1.cardButton}> */}


{/* <button className={style1.btn2}><h3>Etrafli</h3></button> */}

<button
onClick={()=>handleSebet(index)} 
className={item.btn2} >
<p> <i class="fa-solid fa-cart-shopping"></i>   Sebete elave et</p></button>

  {/* </div> */}

  </div>

   </div>


     </SwiperSlide>
 ))
}
</Swiper>

</div>
</div>



    </div>
  )
}

export default Qabcarusel