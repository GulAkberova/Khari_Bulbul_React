import React, { useEffect, useState,useRef } from 'react'
import item from './item.module.css'
import { useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Thumbs } from 'swiper'
import ProductSlider from './ProductSlider'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import {FreeMode} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import  RRRRRR from './RRRRRR'
import  BitkilerCarusel from './Bitkicarusel'

function Item() {
  const param = useParams()
  console.log(param)
  const [currentData, setCurrentData] = useState({})
  const select = useSelector(state => state.allDataReducer)


  
  const kart=useSelector(state=>state.cardReducer)
  const dispatch =useDispatch()



  useEffect(() => {
    let x = select.find(index => index.id == param.id)
    setCurrentData(x)
  })

  const [state, setState] = useState(1);
  const action = (index) => {
    setState(index)
    console.log(index)
  }


  const handelSebet=(index)=>{
    let currentData=kart.filter(item=>item.id==index.id)
    if(currentData.length>0){
      return false
    }else{
      dispatch({type:"Add_CARD",payload:index})

    }
   console.log(currentData)
  }
  /////////////////
  const image2 = useRef();
  const [infoImg, setInfo] = useState([]);
  useEffect(() => {

    if(currentData){
      // current.map((c)=>{
      //   // setInfo(c)
      //   console.log(c);
      // })
      // console.log(current.img);
      setInfo([currentData.img,currentData.img2,currentData.img3,currentData.img4])
      console.log(infoImg);
      
    }
  }, [currentData])

  const handle = (e)=>{
    image2.current.style.opacity=1
    image2.current.setAttribute("src",infoImg[e.target.name])
    // .miniImg img:hover{
      // opacity: 1;
      // border:1px solid green ;
  // }
 }




  return (
    <div>
      <div className={`${item.bigItem} ${item.container}`}>
        <div className={item.bigimg}>
      
          <div className={item.miniImg}>
            <img onClick={handle} src={currentData?.img} name='0' />
            <img onClick={handle} src={currentData?.img2}  name='1' />
            <img onClick={handle} src={currentData?.img3}  name='2' />
            <img  onClick={handle} src={currentData?.img4}  name='3' />




          </div>
          <div className={item.middleImg}>
            <img  ref={image2} src={currentData.img} />

          </div>
        </div>
        <div className={item.bigtext}>
          <h1>{currentData.name}</h1>
          <h3>{currentData.price}<i class="fa-solid fa-manat-sign"></i></h3>
          <h4>{currentData.botanicalName}</h4>
          <p>{currentData.info}</p>
          <div className={item.mainUl}>
          <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" /></svg> &nbsp;</li>
            <li> Isiq<br/> seraiti</li>
            </ul>
            <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.342-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075zm2.656 12c.969 3.484-.406 6.859-2.656 7.781 3.318.475 5.994-3.466 2.656-7.781z" /></svg>   </li>
            <li>Yungul<br/> suvarma</li>
            </ul>
            <ul>
            <li><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.958 11c-3.073 0-6.779 5.665-7.553 8.716-.597 2.351.774 4.284 2.811 4.284 1.563 0 3.472-1.439 4.788-1.463h.019c1.124 0 3.516 1.399 4.924 1.399 1.99 0 3.154-1.932 2.645-4.22-.575-2.593-4.303-8.716-7.634-8.716zm-10.209-3.952c-.378 0-.71.086-.97.267-.514.36-.779 1.092-.779 2.007 0 .944.281 2.082.861 3.208.762 1.479 1.879 2.47 3.149 2.47.55 0 1.13-.187 1.721-.6 1.697-1.184 1.505-3.432-.082-5.214-1.2-1.348-2.757-2.138-3.9-2.138zm20.377-.566c-1.205 0-2.857 1.151-3.929 2.923-1.265 2.092-1.037 4.394.894 5.271.489.221.95.324 1.378.324 1.519 0 2.631-1.294 3.179-3.12.741-2.463.35-5.398-1.522-5.398zm-5.959-6.482c-1.288 0-2.91 1.671-3.622 3.936-.757 2.405.032 4.655 2.182 5.062 3.75.708 3.876-3.79 3.882-3.913.191-3.588-1.429-5.085-2.442-5.085zm-9.537 0c-1.749 0-2.432 2.789-1.879 5.418.426 2.022 1.539 3.494 3.235 3.494.374 0 .775-.072 1.204-.224 2.061-.732 2.495-3.077 1.377-5.337-.986-1.995-2.68-3.351-3.937-3.351zm5.328 12c2.581 0 6.093 5.388 6.658 7.933.329 1.489-.253 3.424-2.268 2.924-1.03-.253-3.202-1.32-4.361-1.32h-.001c-1.185.022-2.674.887-3.897 1.307-1.932.666-3.216-.902-2.714-2.882.741-2.925 4.274-7.962 6.583-7.962zm-7.056-2.149c.721.81 1.098 1.75 1.008 2.514-.125 1.06-1.23 1.635-1.9 1.635-.805 0-1.628-.702-2.26-1.928-1.047-2.035-.816-3.645-.398-3.937.159-.111 1.694-.367 3.55 1.716zm17.224-2.369l.215.038c.483.219 1.028 1.811.348 4.072-.216.724-.869 2.408-2.22 2.408-.697 0-1.677-.411-1.963-1.335-.239-.772-.04-1.772.547-2.742.925-1.528 2.288-2.441 3.073-2.441zm-5.959-6.482c.247 0 1.61.892 1.444 4.032-.099 1.854-.847 3.335-2.698 2.984-1.931-.367-1.776-2.629-1.413-3.78.629-2.005 1.978-3.236 2.667-3.236zm-9.537 0c.797 0 2.187 1.068 3.04 2.794.523 1.057.641 2.111.325 2.892-.391.962-1.423 1.226-2.009 1.226-1.524 0-2.085-1.888-2.256-2.7-.477-2.266.14-4.212.9-4.212z" /></svg> </li>
            <li>Bitki <br/>dostlugu</li>
          </ul>
          </div>
          <button onClick={()=>handelSebet(currentData)}><h3>Sebete elave et</h3></button>
        </div>
      </div>
      <div className={item.container1}>
        <div className={item.box}>

          <div className={item.tabs}>
            <div onClick={() => action(1)} className={`${state === 1 ? `${item.tab} ${item.activeTab}` : `${item.tab}`}`}><h4>{currentData.name} Haqqinda</h4></div>
            <div onClick={() => action(2)} className={`${state === 2 ? `${item.tab} ${item.activeTab}` : `${item.tab}`}`}><h4>{currentData.name} Qaygi</h4></div>
            <div onClick={() => action(3)} className={`${state === 3 ? `${item.tab} ${item.activeTab}` : `${item.tab}`}`}><h4>Neler Daxildir</h4></div>
            <div onClick={() => action(4)} className={`${state === 4 ? `${item.tab} ${item.activeTab}` : `${item.tab}`}`}><h4>Catdirilma melumati</h4></div>

          </div>
          <div className={item.contents}>

            <div className={`${state === 1 ? `${item.content} ${item.activeContent}` : `${item.content}`}`}>
              <h2>{currentData.name}</h2>
              <p>{currentData.about}</p>

            </div>
            <div className={`${state === 2 ? `${item.content} ${item.activeContent}` : `${item.content}`}`}>
              <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" /></svg> &nbsp;
                {currentData.like2}
              </h3>
              <p>{currentData.main2}</p>
              <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.342-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075zm2.656 12c.969 3.484-.406 6.859-2.656 7.781 3.318.475 5.994-3.466 2.656-7.781z" /></svg> &nbsp;
                {currentData.like1}
              </h3>
              <p>{currentData.main1}</p>
              <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.931 14.484c-.201 3.219-2.294 3.718-2.294 5.904 0 1.443 1.173 2.612 2.62 2.612 1.477 0 2.743-1.378 2.743-3.284 0-1.548-.834-3.443-3.069-5.232zm-.291 4.08c-.03-.537.677-.87.88-1.859.163.232.368.637.391 1.077.067 1.285-1.231 1.566-1.271.782zm-2.054-3.549c-2.316-5.162-8.498-2.12-11.979-4.423-1.76-1.165-2.595-2.87-2.528-4.64-1.224-.294-2.638-.513-4.079-.635l1.136-1.639c4.137.806 8.424 2.351 11.222 4.481-1.087-1.938-4.494-4.183-7.324-5.098 1.134-1.409 2.686-2.061 4.343-2.061 4.895 0 11.054 5.653 9.209 14.015z" /></svg> &nbsp;
                {currentData.like3}</h3>
              <p>{currentData.main3}</p>
              <h3><b><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.958 11c-3.073 0-6.779 5.665-7.553 8.716-.597 2.351.774 4.284 2.811 4.284 1.563 0 3.472-1.439 4.788-1.463h.019c1.124 0 3.516 1.399 4.924 1.399 1.99 0 3.154-1.932 2.645-4.22-.575-2.593-4.303-8.716-7.634-8.716zm-10.209-3.952c-.378 0-.71.086-.97.267-.514.36-.779 1.092-.779 2.007 0 .944.281 2.082.861 3.208.762 1.479 1.879 2.47 3.149 2.47.55 0 1.13-.187 1.721-.6 1.697-1.184 1.505-3.432-.082-5.214-1.2-1.348-2.757-2.138-3.9-2.138zm20.377-.566c-1.205 0-2.857 1.151-3.929 2.923-1.265 2.092-1.037 4.394.894 5.271.489.221.95.324 1.378.324 1.519 0 2.631-1.294 3.179-3.12.741-2.463.35-5.398-1.522-5.398zm-5.959-6.482c-1.288 0-2.91 1.671-3.622 3.936-.757 2.405.032 4.655 2.182 5.062 3.75.708 3.876-3.79 3.882-3.913.191-3.588-1.429-5.085-2.442-5.085zm-9.537 0c-1.749 0-2.432 2.789-1.879 5.418.426 2.022 1.539 3.494 3.235 3.494.374 0 .775-.072 1.204-.224 2.061-.732 2.495-3.077 1.377-5.337-.986-1.995-2.68-3.351-3.937-3.351zm5.328 12c2.581 0 6.093 5.388 6.658 7.933.329 1.489-.253 3.424-2.268 2.924-1.03-.253-3.202-1.32-4.361-1.32h-.001c-1.185.022-2.674.887-3.897 1.307-1.932.666-3.216-.902-2.714-2.882.741-2.925 4.274-7.962 6.583-7.962zm-7.056-2.149c.721.81 1.098 1.75 1.008 2.514-.125 1.06-1.23 1.635-1.9 1.635-.805 0-1.628-.702-2.26-1.928-1.047-2.035-.816-3.645-.398-3.937.159-.111 1.694-.367 3.55 1.716zm17.224-2.369l.215.038c.483.219 1.028 1.811.348 4.072-.216.724-.869 2.408-2.22 2.408-.697 0-1.677-.411-1.963-1.335-.239-.772-.04-1.772.547-2.742.925-1.528 2.288-2.441 3.073-2.441zm-5.959-6.482c.247 0 1.61.892 1.444 4.032-.099 1.854-.847 3.335-2.698 2.984-1.931-.367-1.776-2.629-1.413-3.78.629-2.005 1.978-3.236 2.667-3.236zm-9.537 0c.797 0 2.187 1.068 3.04 2.794.523 1.057.641 2.111.325 2.892-.391.962-1.423 1.226-2.009 1.226-1.524 0-2.085-1.888-2.256-2.7-.477-2.266.14-4.212.9-4.212z" /></svg></b> &nbsp; Bitki Dostluğu</h3>
              <p>Tüklü dostlardan və uşaqlardan uzaq durmaq daha yaxşıdır</p>
            </div>
            <div className={`${state === 3 ? `${item.content} ${item.activeContent}` : `${item.content}`}`}>
              <p>1.Saksıda bitki</p>
              <p>2.Baxım təlimatları</p>
              <p>3.Bitkinizin ömrü boyu qulluq və dəstək məsləhətləri</p>
              <p>4.30 Gün Zəmanət</p>

            </div>
            <div className={`${state === 4 ? `${item.content} ${item.activeContent}` : `${item.content}`}`}>
              <h3>
                Bitkilərimiz ehtiyatla qablaşdırılır və istixanamızdan qapınıza çatdırılır.</h3>
              <p>1. 100 <i class="fa-solid fa-manat-sign"></i> -dan yuxarı bütün sifarişlər pulsuz çatdırılır!
              </p>
              <p>2.Standart çatdırılma müddətimiz 2-4 iş günüdür</p>
              <p>3.Standart göndərmə 30 <i class="fa-solid fa-manat-sign"></i> -dan aşağı olan sifarişlər üçün 5 <i class="fa-solid fa-manat-sign"></i> ; 30-99 <i class="fa-solid fa-manat-sign"></i> sifarişlər üçün 10 <i class="fa-solid fa-manat-sign"></i></p>
              <p>4.Biz həmçinin növbəti gün çatdırılma və şənbə çatdırılmasını təklif edirik</p>

            </div>
          </div>

        </div>
      </div>
      <BitkilerCarusel/>
      
    </div>
  )
}

export default Item