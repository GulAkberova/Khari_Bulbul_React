import style1 from "./home.module.css";

import svg1 from "./img/svg1.svg";
import svg2 from "./img/svg2.svg";
import svg3 from "./img/svg3.svg";
// import bk from "./img/bk.webp";
// import b6 from "./img/b6.webp";
// import img1 from "./img/01img.webp";
import gift from "./img/gift.jpg";
import ofis from "./img/ofis.jpg";
import video4 from "./video/video.mp4";
import RRRRRR from "./RRRRRR";
import CCCCC from "./CCCCC";
import { NavLink } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import {FreeMode} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import 'swiper/css/free-mode';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  // const kart = useSelector((state) => state.cardReducer);

  // const dispatch = useDispatch();

  // const select = useSelector((state) => state.allDataReducer);
  // const handleSebet = (inner) => {
  //   let currentData = kart.filter((index) => index.id == inner.id);
  //   if (currentData.length > 0) {
  //     return false;
  //   } else {
  //     dispatch({ type: "Add_CARD", payload: inner });
  //   }
  // };

  return (
    <>
 <CCCCC/>
      {/* <div className={style1.bigdiv}>
        <div className={style1.bigdivYazi}>
 
                <h1>Səhranı evə gətirin...</h1>
                    <span>İstixanamızdan göndərilən və 30 gün zəmanətli unikal, az qulluq tələb edən kaktuslar və sukkulentlərlə yayı salamlayın.</span>
                    <button className={style1.button1}><NavLink to={"bitkiler"}>Bitkini satin al</NavLink></button>
                    <button className={style1.button2}> <NavLink to={"bitkiyequlluq"}>Bitkini oyren</NavLink></button>
        </div>
      </div> */}
        <div className={style1.why}>
        <p>Nə üçün Xarı Bülbül?</p>
      </div>
      <div className={style1.line}>
        <h2></h2>
      </div>
      <div className={`${style1.mainWhy} ${style1.container}`}>
        <div className={style1.mainWhy1}>
          <img     src={svg2} />
          <span>
            Möhtəşəm keyfiyyət Biz birbaşa ən yüksək reytinqli yetişdiricilərdən
            alırıq, buna görə də ən keyfiyyətli bitkiləri ən yaxşı qiymətlərlə
            sata bilərik.
          </span>
        </div>
        <div className={style1.mainWhy1}>
          <img src={svg3} />
          <span>
            Qapınıza çatdırılma Biz bitkilərinizi GB daxilində istənilən yerə,
            qapınıza gətirəcəyik. 100% məmnun deyilsinizsə, 30 gün ərzində bizə
            bildirin və biz bunu çeşidləyək.
          </span>
        </div>
        <div className={style1.mainWhy1}>
          <img   src={svg1} />
          <span>
            Ehtiyacınız olan bütün yardımlar Biz sizə pulsuz bitki yetişdirmə
            kursu göndərəcəyik<br/> və bitki həkimlərimiz həmişə çağırışdadır.
          </span>
        </div>
      </div>
      <div className={style1.bigVideo}>
                <div className={style1.mainVideo}>
                        {/* <div  className={style1.mainVideo1}> */}

                        <video  autoPlay loop muted >
             <source src={video4} type='video/mp4'/>
         </video>
      
     
    {/* </div> */}

                </div>
                <div className={style1.yaziVideo}>
                  <h6>
HƏYAT BİTKİLƏR ƏTRAFINA YÜKLƏR</h6>
<h2>
  
Ev bitkisinin evə səyahəti
</h2>
<p>İstixanamızdan evinizə qədər Cənnət Quşunun səyahətini izləyin və bitkinizə hər addımda necə qulluq etdiyimizi öyrənin.</p>
<button>Daha cox oyren</button>

                </div>
      </div>

    
      <div className={style1.bigdiv1}>
        <div className={style1.div1}>
          <h2 data-aos="fade-right"   data-aos-duration='1000'   >Görünüşü satın alın</h2>
          <p data-aos="fade-right"   data-aos-duration='1000' data-aos-delay='350' >
            Evinizi bitkilər və qablarla canlandırmağı sizin üçün asanlaşdırdıq.
          </p>
        </div>

  
      <RRRRRR/>

        
      </div>
      <div className={style1.price1}>
        <div className={style1.pri1}>
          <div data-aos="fade-right"   data-aos-duration='1000'  className={style1.h1}>
            <h1>.01</h1>
            <p></p>
          </div>
          <div className={style1.h2}>
            <h2 data-aos="fade-right"   data-aos-duration='1200' data-aos-delay='250'>Ofislər üçün bitkilər</h2>
            <p data-aos="fade-right"   data-aos-duration='1200' data-aos-delay='450'>
              Ofis sahəsinə bitkilər əlavə etmək rahat və məhsuldar bir mühit
              yaratmağa kömək edir. Ev və ya kommersiya ofisi üçün mükəmməl olan
              az qulluq tələb edən bitkilərin seçilmiş kolleksiyasından
              alış-veriş edin.
            </p>
            <div className={style1.s1}>
              <span></span>
            </div>

            <button data-aos="zoom-in"   data-aos-duration='1200' data-aos-delay='350'>
              <NavLink to={"bitkiler"}>Daha cox oyren</NavLink>
            </button>
          </div>
        </div>
        <div data-aos="fade-left"   data-aos-duration='1000' data-aos-delay='350' className={style1.pri2}>
          <img  data-aos="fade-left"   data-aos-duration='1900' data-aos-delay='650'src={ofis} />
        </div>
      </div>

      <div className={`${style1.price1} ${style1.none}`}>
        <div data-aos="fade-right"   data-aos-duration='1000' data-aos-delay='350' className={style1.pri2}>
          <img  data-aos="fade-right"   data-aos-duration='1400' data-aos-delay='650' src={gift} />
        </div>
        <div className={style1.pri1}>
          <div data-aos="fade-left"   data-aos-duration='1000' className={style1.h1}>
            <h1>.02</h1>
            <p></p>
          </div>
          <div className={style1.h2}>
            <h2 data-aos="fade-left"   data-aos-duration='1200' data-aos-delay='250'>Böyüyən bir hədiyyə verin</h2>
            <p data-aos="fade-left"   data-aos-duration='1200' data-aos-delay='450'>
              Bitkilər hər hansı bir hadisə üçün düşünülmüş hədiyyədir və
              əhəmiyyət verdiyiniz biri ilə qeyd etmək üçün mükəmməl bir yoldur.
              Şəxsi toxunuş üçün pulsuz hədiyyə qeydi əlavə edin. Seçilmiş
              bitkilər, qablar və aksesuarlar kolleksiyamızla xüsusi bir şey
              tapın.
            </p>
            <div className={style1.s1}>
              <span></span>
            </div>

            <button data-aos="zoom-in"   data-aos-duration='1200' data-aos-delay='450'>
              <NavLink to={"bitkiler"}>Daha cox oyren</NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className={`${style1.price1} ${style1.block}`}>
        <div className={style1.pri1}>
          <div className={style1.h1}>
            <h1>.02</h1>
            <p></p>
          </div>
          <div className={style1.h2}>
            <h2>Böyüyən bir hədiyyə verin</h2>
            <p>
              Bitkilər hər hansı bir hadisə üçün düşünülmüş hədiyyədir və
              əhəmiyyət verdiyiniz biri ilə qeyd etmək üçün mükəmməl bir yoldur.
              Şəxsi toxunuş üçün pulsuz hədiyyə qeydi əlavə edin. Seçilmiş
              bitkilər, qablar və aksesuarlar kolleksiyamızla xüsusi bir şey
              tapın.
            </p>
            <div className={style1.s1}>
              <span></span>
            </div>

            <button>
              <NavLink to={"bitkiler"}>Daha cox oyren</NavLink>
            </button>
          </div>
        </div>
        <div className={style1.pri2}>
          <img src={gift} />
        </div>
      </div>

      <div className={style1.bigdiv1}>
        <div data-aos="fade-right" className={`${style1.div1} ${style1.divFont}`}>
          <h2 data-aos="fade-right"   data-aos-duration='1000'>Xari Bulbulun ilk 20-liyi</h2>
          <p data-aos="fade-right"   data-aos-duration='1000' data-aos-delay='350' >
            Ən populyar bitkilərimizi, qablarımızı və aksesuarlarımızı kəşf edin
            və satın alın..
          </p>
        </div>
        <RRRRRR/>



      </div>
    
    </>
  );
}

export default Home;
