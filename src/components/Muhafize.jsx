import React,{useState} from 'react'
import{useSelector,useDispatch} from "react-redux"
import bitkiler from './muhafize.module.css'



import {Link} from "react-router-dom"
import { useEffect } from 'react'

function Muhafize() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const[active,SetActive]=useState(true)
  const[active1,SetActive1]=useState(true)
  const[active2,SetActive2]=useState(true)
  const[active3,SetActive3]=useState(true)
  const [isActive, SetIsActive] = useState(false)
  const [selected, setSelected] = useState("")
  const options = ['Aciq mekan bitkileri', 'Qapali mekan bitkileri','Hemise yasil bitkiler','Isiq seven bitkiler']
  const filter=['outdoor','indoor']


  const handleSearch = (e) => {
    setInputValue(e.target.value)
    // if (e.target.value.length>0) {
    //   setSearchResults(data.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase())))
    // }
    e.target.value.length > 0 ? setSearchResults(indata.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase()))) : setSearchResults([])
  }




  const select2=useSelector(state=>state.indoorDataReducer)
  const dispatch= useDispatch()
  const kart=useSelector(state=>state.cardReducer)
  console.log(select2)
  const[indata,setIndata]=useState(select2)
  console.log(indata)
  useEffect(()=>{
    setIndata(select2)
  },select2)

  const filterResult = (index) => {
    const result = select2.filter((curData) => {
      return curData.category === index;
    });

    setIndata(result);
    console.log(result)
  }

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
        <div className={bitkiler.overlay}>
        <div className={bitkiler.overlayWrite}>
        <div className={bitkiler.name}>
        <p>Bitkilere qaygi</p>
        <span></span>
      </div>
        </div>
      </div>

      <div className={bitkiler.bigdiv1}>

        {/* <div className={bitkiler.div1}>
          <button onClick={() => setIndata(select2)}><h3>Butun aletler</h3></button>
          <button onClick={() => filterResult('asma')}><h3>Asmalar</h3> </button>
          <button onClick={() => filterResult('suvarma')}><h3>Suvarma qablari</h3></button>
          <button onClick={() => filterResult('kesme')}><h3>Kesme aletler</h3></button>
          <button onClick={() => filterResult('elcek')}><h3>Bag ucun elcekler</h3></button>
          <button onClick={() => filterResult('dezinfeksiya')}><h3>Zerervericelere qarsi</h3></button>

        </div> */}

<div className={bitkiler.div1}>
          <div className={bitkiler.filterDiv}>
             <p>Filter</p>
             <span onClick={() => setIndata(select2)}>Yenile</span>
          </div>
          <ul className={bitkiler.filterUL}>
            <li className={bitkiler.filterLI}><b>Mehsulun tipi</b> <p><i class="fa-solid fa-angle-down"  onClick={(e) => SetActive(!active)}></i></p>
            {active && 
            <ul className={bitkiler.filterDropUl}>
              <li onClick={() => filterResult('Bitki aksesuarlari')}>Bitki aksesuarlari</li>
              <li onClick={() => filterResult('Bitki aletleri')}>Bitki aletleri </li>
            
            </ul>}
            
            </li>
            <li className={bitkiler.filterLI}><b>Aletler </b> <p><i class="fa-solid fa-angle-down"  onClick={(e) => SetActive1(!active1)}></i></p>
            {active1 && 
            <ul className={bitkiler.filterDropUl}>
              <li onClick={() => filterResult('Kesme aletleri')}>Kesme aletleri</li>
              <li onClick={() => filterResult('Suvarma qablari')}>Suvarma qablari</li>
            </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Dezinfeksiya </b> <p><i class="fa-solid fa-angle-down"  onClick={(e) => SetActive2(!active2)}></i></p>
            {active2 && 
            <ul className={bitkiler.filterDropUl}>
              <li onClick={() => filterResult('dez')}>Zerer vericiler qarsi</li>
              <li onClick={() => filterResult('gubre')}>Gubre</li>
    
            </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Elcekler</b> <p><i class="fa-solid fa-angle-down"  onClick={(e) => SetActive3(!active3)}></i></p>
            {active3 && 
            <ul className={bitkiler.filterDropUl}>
              <li onClick={() => filterResult('Bag ucun elcekler')}>Bag ucun elcekler</li>
              <li onClick={() => filterResult('Toz eleyhine elcekler')}>Toz eleyhine elcekler</li>

            </ul>}

            </li>
           
          </ul>

        </div>
        <div className={bitkiler.div22}>
          <div className={bitkiler.sort}>
            <span>39 eded</span>
            {/*  */}
            <div className={bitkiler.dropdown}>
              <div className={bitkiler.dropdownBtn}><input type="text" placeholder='Mehsulu axtar' onChange={(e) => handleSearch(e)} onClick={(e) => SetIsActive(!isActive)} /> <i class="fa-solid fa-magnifying-glass"></i></div>
              {isActive && (
                <div className={bitkiler.dropdownContent}>

                  {
                    searchResults?.map((s) => (
                     <div className={bitkiler.dropdownItem}> <Link to={`/careInfo/${s.id}`}>
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

        <div className={bitkiler.div2}>

          {indata.map((index, key) => (

            <div key={key} className={bitkiler.cardDiv1}>
              <div className={bitkiler.img}>
                <Link to={`/careInfo/${index.id}`} >
                  <img src={index.img} alt="" />
                  <img className={bitkiler.block} src={index.img2} />
                </Link>
              </div>
              <div className={bitkiler.cardMini1}>
                <h3>{index.name}</h3>
                <p>{index.price}<i class="fa-solid fa-manat-sign"></i></p>



                <button onClick={() => handleSebet(index)} className={bitkiler.btn2} >
  <p> <i class="fa-solid fa-cart-shopping"></i>   Sebete elave et</p></button>
               
              </div>
            </div>
          )
          )}

            </div>
        </div>


      </div>
        
    </div>
  )
}

export default Muhafize