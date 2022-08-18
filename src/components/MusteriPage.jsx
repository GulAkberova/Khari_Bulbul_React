import React from 'react'
import bitkiler from './bitkiler.module.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
function MusteriPage() {
    const musteri = useSelector(state =>state.MusteriReducer)
    const kart = useSelector(state =>state.cardReducer)

    const dispatch = useDispatch();
    const [musteriData , setMusteriData]= useState(musteri);
    useEffect (()=>{
        setMusteriData(musteri)
    },musteri)
    const handleSebet = (inner) => {
        let currentData = kart.filter(index => index.id == inner.id)
        if (currentData.length > 0) {
          return false
        } else {
          dispatch({ type: "Add_CARD", payload: inner })
    
        }
      }
    return (
        <>
            <div className={bitkiler.bigdiv}>

            </div>
            <div className={bitkiler.name}>
        <p>Musteri Mehsullari</p>
        <span></span>
      </div>
            <div className={bitkiler.musteriDiv}>
            <div className={bitkiler.divMusteri}>
            {   
            //    ()=>{
            //     if(musteriData.length>0){
            //         return(
                        musteriData.map((index,key)=>(
                            <div key={key} className={bitkiler.cardDiv1}>
                            <div className={bitkiler.img}>
                                <Link to={`/musteri/${index.id}`} >
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
                          ))
            //         )
            //     }
            //    }
            }
            </div>
            </div>

        </>
    )
}

export default MusteriPage