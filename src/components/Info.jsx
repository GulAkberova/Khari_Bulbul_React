import React, { useEffect, useState, useRef } from 'react'
import info from './info.module.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Qabcarusel from './Qabcarusel'

function Info() {
  const select1 = useSelector(state => state.potsDataReducer)
  const [current, setCurrent] = useState([])
  const param = useParams();
  useEffect(() => {
    let x = select1.find(index => index.id == param.id)
    console.log(x);
    setCurrent(x);
    
  }, [select1]);
  const [state, setState] = useState(1);
  const action = (index) => {
    setState(index)
  }


  const kart = useSelector(state => state.cardReducer)
  const dispatch = useDispatch()
  const handelSebet = (index) => {
    let current = kart.filter(item => item.id == index.id)
    if (current.length > 0) {
      return false
    } else {
      dispatch({ type: "Add_CARD", payload: index })

    }
    console.log(current)
  }
  // //////////////////////

  const image2 = useRef();
  const [infoImg, setInfo] = useState([]);
  useEffect(() => {

    if(current){
      // current.map((c)=>{
      //   // setInfo(c)
      //   console.log(c);
      // })
      console.log(current.img);
      setInfo([current.img,current.img2,current.img3,current.img4])
      console.log(infoImg);
      
    }
  }, [current])

  const handle = (e)=>{
    image2.current.setAttribute("src",infoImg[e.target.name])
 }
  // //////////////////////////////
  return (
    <div>
      <div className={`${info.bigItem} ${info.container}`}>
        <div className={info.bigimg}>

          <div className={info.miniImg}>
            <img onClick={handle} src={current?.img} name='0'/>
            <img onClick={handle} src={current?.img2} name='1' />
            <img onClick={handle} src={current?.img3} name='2'/>
            <img onClick={handle} src={current?.img4}  name='3'/>
          </div>
          <div className={info.middleImg}>
            <img ref={image2} src={current?.img} />
          </div>
        </div>
        <div className={info.bigtext}>
          <h1>{current?.name}</h1>
          <h3>{current?.price}<i class="fa-solid fa-manat-sign"></i></h3>
          <h4>{current?.why}</h4>
          <p>{current?.why1}</p>

          <button onClick={() => handelSebet(current)} ><h3>Sebete elave et</h3></button>
        </div>
      </div>
      <div className={info.container1}>
        <div className={info.box}>

          <div className={info.tabs}>
            <div onClick={() => action(1)} className={`${state === 1 ? `${info.tab} ${info.activeTab}` : `${info.tab}`}`}><h4>{current?.name} Haqqinda</h4></div>
            {/* <div onClick={() => action(2)} className={`${state === 2 ? `${info.tab} ${info.activeTab}` : `${info.tab}`}`}><h4>{current?.name} Qaygi</h4></div> */}
            <div onClick={() => action(3)} className={`${state === 3 ? `${info.tab} ${info.activeTab}` : `${info.tab}`}`}><h4>Neler Daxildir</h4></div>
            <div onClick={() => action(4)} className={`${state === 4 ? `${info.tab} ${info.activeTab}` : `${info.tab}`}`}><h4>Catdirilma ve Catdirilma melumati</h4></div>

          </div>
          <div className={info.contents}>

            <div className={`${state === 1 ? `${info.content} ${info.activeContent}` : `${info.content}`}`}>
              <h2>{current?.name}</h2>
              <p>{current?.about}</p>

            </div>

            <div className={`${state === 3 ? `${info.content} ${info.activeContent}` : `${info.content}`}`}>
              <p>1.Saksıda bitki</p>
              <p>2.Baxım təlimatları</p>
              <p>3.Bitkinizin ömrü boyu qulluq və dəstək məsləhətləri</p>
              <p>4.30 Gün Zəmanət</p>

            </div>
            <div className={`${state === 4 ? `${info.content} ${info.activeContent}` : `${info.content}`}`}>
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
      <Qabcarusel />
    </div>
  )
}

export default Info
