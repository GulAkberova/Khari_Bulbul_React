import React,{useState,useEffect} from 'react'
import qablar from './qablar.module.css'
import{useSelector,useDispatch} from "react-redux"

import {Link} from "react-router-dom"



function Qablar() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const[active,SetActive]=useState(true)
  const[active1,SetActive1]=useState(false)
  const[active2,SetActive2]=useState(true)
  const[active3,SetActive3]=useState(false)
  const[active4,SetActive4]=useState(false)
  const [isActive, SetIsActive] = useState(false)
  const [selected, setSelected] = useState("")
  const options = ['Aciq mekan qablari', 'Qapali mekan qablari']
  const filter=['outdoor','indoor']



  const handleSearch = (e) => {
    setInputValue(e.target.value)
    // if (e.target.value.length>0) {
    //   setSearchResults(data.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase())))
    // }
    e.target.value.length > 0 ? setSearchResults(data.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase()))) : setSearchResults([])
  }






   const select1=useSelector(state=>state.potsDataReducer)
   const dispatch= useDispatch()
   const kart = useSelector(state => state.cardReducer)

   console.log(select1)
   const [data, setData] = useState(select1)

   useEffect(() => {
     setData(select1);
   }, select1)
 

   const filterResult = (index) => {
    const result = select1.filter((curData) => {
      return curData.category === index;
    });

    setData(result);
    console.log(result)
  }


  const filterResult1 = (index) => {
    const result1 = select1.filter((curData) => {
      return curData.category1 === index;
    });

    setData(result1);
    console.log(result1)
  }

   const handleSebet=(inner)=>{
    let currentData = kart.filter(index => index.id == inner.id)
    if (currentData.length > 0) {
      return false
    } else {
      dispatch({ type: "Add_CARD", payload: inner })

    }
   
}
 
  return (
    <div>
        <div className={qablar.overlay}>
        <div className={qablar.overlayWrite}>
        <div className={qablar.name}>
        <p>Bütün qablar</p>
        <span></span>
      </div>
        </div>
      </div>
           
        <div className={qablar.bigdiv1}>

      
        <div className={qablar.div1}>
          {/* <button onClick={() => setData(select)}><h3>Butun bitkiler</h3></button>
          <button onClick={() => filterResult('outdoor')}><h3>Aciq mekan bitkileri</h3> </button>
          <button onClick={() => filterResult('indoor')}><h3>Qapali mekan bitkileri</h3></button>
          <button onClick={() => filterResult('allgreen')}><h3>Hemise yasil bitkiler</h3></button>
          <button onClick={() => filterResult('light')}><h3>Isiq seven bitkiler</h3></button> */}
          <div className={qablar.filterDiv}>
             <p>Filter</p>
             <span onClick={() => setData(select1)}>Yenile</span>
          </div>
          <ul className={qablar.filterUL}>
            <li className={qablar.filterLI}><b>Qapali mekan qablari</b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive(!active)}></i></p>
            {active && 
            <ul className={qablar.filterDropUl}>
              <li onClick={() => filterResult('XS (0-10sm)')}>XS (0-10sm)</li>
              <li onClick={() => filterResult('S (10-15sm)')}>S (10-15sm)</li>
              <li onClick={() => filterResult('M (15-20sm)')}>M (15-20sm)</li>
              <li onClick={() => filterResult('L (20-25sm)')}>L (20-25sm)</li>
              <li onClick={() => filterResult('XL (25-30sm)')}>XL (25-30sm)</li>
            </ul>}
            
            </li>
   
            <li className={qablar.filterLI}><b>Qabin rengi </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive2(!active2)}></i></p>
            {active2 && 
            <ul className={qablar.filterDropUl}>
              <li onClick={() => filterResult1('Ag/Qara')}>Ag/Qara</li>
              <li onClick={() => filterResult1('Rengli')}>Rengli</li>
              <li onClick={() => filterResult1('Boz')}>Boz</li>
              <li onClick={() => filterResult1('Mavi')}>Mavi</li>
              <li onClick={() => filterResult1('Yasil')}>Yasil</li>
 
     
            </ul>}

            </li>
            <li className={qablar.filterLI}><b>Aciq mekan qablari </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive1(!active1)}></i></p>
            {active1 && 
            <ul className={qablar.filterDropUl}>
              <li onClick={() => filterResult('XS (0-10sm)')}>XS (0-10sm)</li>

              <li onClick={() => filterResult('S (0-25sm)')}>S (0-25sm)</li>
              <li onClick={() => filterResult('M (25-40sm)')}>M (25-40sm)</li>
              <li onClick={() => filterResult('L (40sm+)')}>L (40sm+)</li>
              <li onClick={() => filterResult('XL (25-30sm)')}>XL (25-30sm)</li>

            </ul>}

            </li>
            <li className={qablar.filterLI}><b>Qabin materiali </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive3(!active3)}></i></p>
            {active3 && 
            <ul className={qablar.filterDropUl}>
              <li>Gil</li>
              <li>Beton</li>
              <li>Keramika</li>
              <li>Metal</li>
              <li>Demir</li>
            </ul>}

            </li>

            <li className={qablar.filterLI}><b>Muhit </b><p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive4(!active4)}></i></p>
            {active4 && 
            <ul className={qablar.filterDropUl}>
              <li>Aciq </li>
              <li>Qapali </li>
              <li>Bag</li>
              <li>Otaq</li>
            </ul>}
            
            </li>
          </ul>

        </div>
        <div className={qablar.div22}>
          <div className={qablar.sort}>
            <span>43 eded</span>
            {/*  */}
            <div className={qablar.dropdown}>
              <div className={qablar.dropdownBtn}><input type="text" placeholder='Mehsulu axtar' onChange={(e) => handleSearch(e)} onClick={(e) => SetIsActive(!isActive)} /> <i class="fa-solid fa-magnifying-glass"></i></div>
              {isActive && (
                <div className={qablar.dropdownContent}>

                  {
                    searchResults?.map((s) => (
                     <div className={qablar.dropdownItem}> <Link to={`/info/${s.id}`}>
                        {s.name}
                      </Link>
                      </div>
                    ))
                  }
                  </div>

              )}

            </div>
            {/*  */}         

          </div>
          <div className={qablar.div2}>

          {data.map((index,key)=>(
         <div key={key}  className={qablar.cardDiv1}>
     
       <div className={qablar.img}>
       <Link to={`/info/${index.id}`} >
        <img src={index.img} alt="" />
        <img className={qablar.block} src={index.img2}/>
        </Link>
         </div>
        <div className={qablar.cardMini1}>
        <h3>{index.name}</h3>
        <p>{index.price}<i class="fa-solid fa-manat-sign"></i></p>
        {/* <div className={qablar.cardButton}>
  
     <button    onClick={()=>handleSebet(index)}><h3>Sebete elave et</h3></button>
        <Link to={`/info/${index.id}`} >
        <button><h3>Xususiyyetlerine bax</h3></button>
        </Link>
        </div> */}
         {/* <div className={qablar.cardButton}> */}
  

    {/* <button className={qablar.btn2}><h3>Etrafli</h3></button> */}
  
   <button onClick={()=>handleSebet(index)} className={qablar.btn2} >

  <p> <i class="fa-solid fa-cart-shopping"></i>   Sebete elave et</p></button>
 
        {/* </div> */}
        </div>

   
       
     </div>
    ))}


         </div>
     </div>

           </div>

   

    </div>
  )
}

export default Qablar