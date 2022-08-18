import React,{useEffect,useState,useRef} from 'react'
import info from './careinfo.module.css'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch}from 'react-redux'
import Muhafizecarusel from './Muhafizecarusel'

function CareInfo() {
    const select2=useSelector(state=>state.indoorDataReducer)
    const [current,setCurrent]=useState()
     const param=useParams();
     useEffect(()=>{
        let x= select2.find(index=>index.id==param.id)
       setCurrent(x)
     },[select2]);
     const [state, setState] = useState(1);
     const action = (index) => {
       setState(index)
     }
 
 
     
   const kart=useSelector(state=>state.cardReducer)
   const dispatch =useDispatch()
     const handelSebet=(index)=>{
       let current=kart.filter(item=>item.id==index.id)
       if(current.length>0){
         return false
       }else{
         dispatch({type:"Add_CARD",payload:index})
   
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
          <p>{current?.botanicalName}</p>
          <p>{current?.info}</p>
        
          <button onClick={()=>handelSebet(current)} ><h3>Sebete elave et</h3></button>
        </div>
      </div>
      <div className={info.container1}>
      <div className={info.careInfo1}>
        <div className={info.careInfoMini}>
            <h2>{current?.like1}</h2>
            <p>{current?.main1}</p>
            <h2>{current?.like2}</h2>
             <p>{current?.a1}</p>
             <p>{current?.a2}</p>
             <p>{current?.a3}</p>
        </div>

      </div>
      <div className={info.careInfo2}>
            <img src={current?.img2}/>
      </div>
      </div>
      <Muhafizecarusel/>
    </div>
  )
}

export default CareInfo