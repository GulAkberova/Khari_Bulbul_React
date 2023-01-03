import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "./menu.module.css";
// import video4 from "./video/video12.mp4";
// import bk from './img/bk.webp'
import bk1 from "./img/bk1.webp";

function Menu() {
  const node = useRef();
  const { pathname } = useLocation();
  useEffect(() => {
      node.current.style.opacity = 0;
      node.current.style.visibility = "hidden";
  }, [pathname]);
  // useEffect(() => {
  //     Aos.init({ duration: 3000 });
  // })

  const kart = useSelector((state) => state.cardReducer);
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  // const searchRef = useRef();
  // const handleEnter = (e) => {

  //     e.target.children[1].style.zIndex = "999"
  //     let y = document.getElementsByClassName("ul1");
  //     [...y].map(index => {
  //         index.style.opacity = 1;
  //         index.style.visibility = "visible";
  //         index.style.transition = "1.2s"
  //         index.style.width = "100%"
  //         console.log("hbtf")

  //     })
  // }

  // const handleLeave = (e) => {
  //     let y = document.getElementsByClassName("ul1");
  //     e.target.children[1].style.zIndex = "0";
  //     [...y].map(index => {
  //         index.style.opacity = 0;
  //         index.style.visibility = "hidden";
  //         index.style.transition = "1.2s"
  //         index.style.width = "0"

  //     })
  // }

  return (
    <>
      <header className={`${style.mainmenu} ${style.container}`}>
     <span className={style.menu}><i class="fa-solid fa-bars"></i></span> 
        <h1 className={style.logo}>
          <NavLink to={"/"}>Xarı Bülbül</NavLink>
        </h1>
        <ul className={style.drop}>
          <li className={style.hover}>
            <NavLink to={"bitkiler"}>Bitkilər</NavLink>
          </li>
          <li className={style.hover}>
            <NavLink to={"qablar"}>Qablar</NavLink>
            {/* <div className={style.ul1}>
          <ul className={style.dropCare}>
              <ul className={style.dropCare}>
                <li><img className={style.dropImg} src='https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1618988046/eeoni7fnasdcbeykqcwv.jpg' /></li>
                <li><b>Aciq mekan bitkileri </b></li>
               </ul>
               <ul className={style.dropCare}>
                <li><img className={style.dropImg} src='https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1618988046/eeoni7fnasdcbeykqcwv.jpg' /></li>
                <li><b>Aciq mekan bitkileri </b></li>
               </ul>
               </ul>
         
          
          </div> */}
          </li>
          <li className={style.hover}>
            <NavLink to={"muhafize"}>Bitkilere Qaygi</NavLink>{" "}
          </li>

          <li
            onMouseEnter={(e) => {
              e.target.closest("li").querySelector("#demo_1").style.opacity = 1;
              e.target.closest("li").querySelector("#demo_1").style.visibility =
                "visible";
            }}
            onMouseLeave={(e) => {
              e.target.closest("li").querySelector("#demo_1").style.opacity = 0;
              e.target.closest("li").querySelector("#demo_1").style.visibility ="hidden";
            }}
            className={style.li1}
          >
            <NavLink to={"bitkiyequlluq"}>
              Bitkileri Oyren <i class="fa-solid fa-angle-down"></i>{" "}
            </NavLink>
            <div id="demo_1" ref={node} className={style.ul1}>
              <ul className={style.dropCare}>
                <NavLink to={"bitkiyequlluq"}>
                  <li>
                    <div className={style.dropHover}>
                      <span>
                        <p>
                          {" "}
                          Daha Etrafli{" "}
                          <i class="fa-solid fa-right-from-bracket"></i>
                        </p>
                      </span>
                    </div>
                  </li>
                </NavLink>

                <li>
                  <b>BİTKİYƏ QULLUQ</b>
                </li>
                <li>
                  Ev bitkilərinə qulluq üçün göstərişlər
                  <br /> və əsaslar
                </li>
              </ul>
              <ul className={style.dropCare}>
                <NavLink to={"yaybitkisi"}>
                  <li>
                    <div className={`${style.dropHover} ${style.dropHover1}`}>
                      <span>
                        <p>
                          {" "}
                          Daha Etrafli
                          <i class="fa-solid fa-right-from-bracket"></i>
                        </p>
                      </span>
                    </div>
                  </li>
                </NavLink>
                <li>
                  <b>YAY BİTKİLERİNƏ BAXIM </b>
                </li>
                <li>
                  Grow-How® ilə bu yay bitkilərinizin <br />
                  çiçəklənməsinə kömək edin
                </li>
              </ul>
              <ul className={style.dropCare}>
                <NavLink to={"yasilyasayis"}>
                  <li>
                    <div className={`${style.dropHover} ${style.dropHover2}`}>
                      <span>
                        <p>
                          {" "}
                          Daha Etrafli
                          <i class="fa-solid fa-right-from-bracket"></i>
                        </p>
                      </span>
                    </div>
                  </li>{" "}
                </NavLink>

                <li>
                  <b>YAŞIL YAŞAYIŞ </b>
                </li>
                <li>
                  Yaşıl, bitkili yaşayış üçün məsləhətlər
                  <br /> və ilham
                </li>
              </ul>
            </div>
          </li>
          <li className={style.hover}>
            {" "}
            <NavLink to={"contact"}>Elaqe</NavLink>
          </li>
          <li className={style.hover}>
            {" "}
            <NavLink to={"about"}>Haqqimizda</NavLink>
          </li>
        </ul>

        {/* <ul className={style.search}>
            <li>    <input className={style.mainsearch} type={"text"} placeholder="Axtar"  /></li>
            <li> <i className="fa-solid fa-magnifying-glass search-icon"></i></li>
        </ul> */}

        <ul className={style.search1}>
          <li>
            <NavLink to={"login"}>
              <i className="fa-solid fa-user"></i>&nbsp; Daxil ol
            </NavLink>
          </li>
          {/* <li><NavLink to={"register"}><i class="fa-solid fa-right-to-bracket"></i></NavLink></li> */}
          <li>
            <NavLink to={"card"}>
              {" "}
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Cart({kart.length})</p>
            </NavLink>
          </li>

          {/* <li><i className="fa-solid fa-bars"></i></li> */}
        </ul>
      </header>
      {/* <div  className={style.overlay}>
    <video  autoPlay loop muted>
             <source src={video4} type='video/mp4'/>
         </video>
     
    </div> */}
    </>
  );
}

export default Menu;
