
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import bitkiler from './bitkiler.module.css'
import { Link, NavLink } from "react-router-dom"


function Bitkiler() {
  //  
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const [active, SetActive] = useState(true)
  const [active1, SetActive1] = useState(true)
  const [active2, SetActive2] = useState(true)
  const [active3, SetActive3] = useState(false)
  const [active4, SetActive4] = useState(false)
  const [active5, SetActive5] = useState(false)
  const [active6, SetActive6] = useState(false)
  const [active7, SetActive7] = useState(false)
  const [active8, SetActive8] = useState(false)
  const [isActive, SetIsActive] = useState(false)
  const [selected, setSelected] = useState("")
  const options = ['Aciq mekan bitkileri', 'Qapali mekan bitkileri', 'Hemise yasil bitkiler', 'Isiq seven bitkiler']
  const filter = ['outdoor', 'indoor']
  // 
  const select = useSelector(state => state.allDataReducer)
  const kart = useSelector(state => state.cardReducer)

  const dispatch = useDispatch()
  const [data, setData] = useState(select)

  useEffect(() => {
    setData(select);

    console.log(data);
  }, select)


  const filterResult = (index) => {
    const result = select.filter((curData) => {
      return curData.category === index;
    });

    setData(result);
    console.log(result)
  }

  const handleSebet = (inner) => {
    let currentData = kart.filter(index => index.id == inner.id)
    if (currentData.length > 0) {
      return false
    } else {
      dispatch({ type: "Add_CARD", payload: inner })

    }
  }
  const handleSearch = (e) => {
    setInputValue(e.target.value)
    // if (e.target.value.length>0) {
    //   setSearchResults(data.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase())))
    // }
    e.target.value.length > 0 ? setSearchResults(data.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase()))) : setSearchResults([])
  }
  return (
    <div>
    <div className={bitkiler.overlay}>
        <div className={bitkiler.overlayWrite}>
        <div className={bitkiler.name}>
        <p>Bütün bitkiler</p>
        <span></span>
      </div>
        </div>
      </div>
   

      <div className={bitkiler.bigdiv1}>


        <div className={bitkiler.div1}>
          {/* <button onClick={() => setData(select)}><h3>Butun bitkiler</h3></button>
          <button onClick={() => filterResult('outdoor')}><h3>Aciq mekan bitkileri</h3> </button>
          <button onClick={() => filterResult('indoor')}><h3>Qapali mekan bitkileri</h3></button>
          <button onClick={() => filterResult('allgreen')}><h3>Hemise yasil bitkiler</h3></button>
          <button onClick={() => filterResult('light')}><h3>Isiq seven bitkiler</h3></button> */}
          <div className={bitkiler.filterDiv}>
            <p>Filter</p>
            <span onClick={() => setData(select)}>Yenile</span>
          </div>
          <ul className={bitkiler.filterUL}>
            <li className={bitkiler.filterLI}><b>Isiq </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive(!active)}></i></p>
              {active  &&  <ul className={bitkiler.filterDropUl}>
                <li onClick={() => filterResult('Birbaşa günəş işığında ən xoşbəxt')}>Birbaşa günəş işığında ən xoşbəxt</li>
                <li onClick={() => filterResult('İşıqda və kölgədə xoşbəxtlik')}>İşıqda və kölgədə xoşbəxtlik</li>
                <li onClick={() => filterResult('Kölgədə xoşbəxt')}>Kölgədə xoşbəxt</li>
              </ul>}


            </li>
            <li className={bitkiler.filterLI}><b>Qaygi seviyyesi </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive1(!active1)}></i></p>
              {active1 &&
                <ul className={bitkiler.filterDropUl}>
                  <li onClick={() => filterResult('Demək olar ki, öldürülməz')}>Demək olar ki, öldürülməz</li>
                  <li onClick={() => filterResult('Qulluğu asan')}>Qulluğu asan </li>
                  <li onClick={() => filterResult('Biraz sevgiyə ehtiyacı var')}>Biraz sevgiyə ehtiyacı var</li>
                </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Bitki novu </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive2(!active2)}></i></p>
              {active2 &&
                <ul className={bitkiler.filterDropUl}>
                  <li onClick={() => filterResult('Çiçəkləmə')}>Çiçəkləmə</li>
                  <li onClick={() => filterResult('Kaktuslar və sukkulentlər')}>Kaktuslar və sukkulentlər</li>
                  <li onClick={() => filterResult('Palmalar və ağaclar')}>Palmalar və ağaclar</li>
                </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Bitki hundurluyu </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive3(!active3)}></i></p>
              {active3 &&
                <ul className={bitkiler.filterDropUl}>
                  <li onClick={() => filterResult('Orta / 50sm-1m')}>Orta / 50sm-1m</li>
                  <li onClick={() => filterResult('Kiçik / 15-50sm')}>Kiçik / 15-50sm</li>
                </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Otaq </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive4(!active4)}></i></p>
              {active4 &&
                <ul className={bitkiler.filterDropUl}>
                  <li>Yataq otağı</li>
                  <li>Hamam</li>
                  <li>Mətbəx</li>
                </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Tehlukesizlik </b> <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive5(!active5)}></i></p>
              {active5 &&
                <ul className={bitkiler.filterDropUl}>
                  <li>Birbaşa günəş işığında ən xoşbəxt</li>
                  <li>İşıqda və kölgədə xoşbəxtlik</li>
                  <li>Kölgədə xoşbəxt</li>
                </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Mehsulun novu</b>  <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive6(!active6)}></i></p>
              {active6 &&
                <ul className={bitkiler.filterDropUl}>
                  <li>Birbaşa günəş işığında ən xoşbəxt</li>
                  <li>İşıqda və kölgədə xoşbəxtlik</li>
                  <li>Kölgədə xoşbəxt</li>
                </ul>}

            </li>
            <li className={bitkiler.filterLI}><b>Yeni</b>  <p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive7(!active7)}></i></p>
              {active7 &&
                <ul className={bitkiler.filterDropUl}>
                  <li>Paketlər</li>
                  <li>Bitkiler</li>
                </ul>}


            </li>
            <li className={bitkiler.filterLI}><b>Muhit </b><p><i class="fa-solid fa-angle-down" onClick={(e) => SetActive8(!active8)}></i></p>
              {active8 &&
                <ul className={bitkiler.filterDropUl}>
                  <li>Daxili </li>
                  <li>Çöldə </li>
                </ul>}

            </li>
          </ul>

        </div>
        <div className={bitkiler.div22}>
          <div className={bitkiler.sort}>
            <span>53 eded</span>
            {/*  */}
            {/* <input type="text" onChange={(e) => handleSearch(e)} />
            <div>
              {

                // console.log(searchResults)
                searchResults?.map((s) => (
                  <Link to={`/item/${s.id}`}>
                    {s.name}
                  </Link>
                ))
              }
            </div> */}
            <div className={bitkiler.dropdown}>
              <div className={bitkiler.dropdownBtn}><input type="text" placeholder='Mehsulu axtar' onChange={(e) => handleSearch(e)} onClick={(e) => SetIsActive(!isActive)} /> <i class="fa-solid fa-magnifying-glass"></i></div>
              {isActive && (
                <div className={bitkiler.dropdownContent}>

                  {
                    searchResults?.map((s) => (
                     <div className={bitkiler.dropdownItem}> <Link to={`/item/${s.id}`}>
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


            {data.map((index, key) => (

              <div key={key} className={bitkiler.cardDiv1}>
                <div className={bitkiler.img}>
                  <Link to={`/item/${index.id}`} >
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
            ))}


          </div>
        </div>


      </div>

    </div>
  )
}

export default Bitkiler



