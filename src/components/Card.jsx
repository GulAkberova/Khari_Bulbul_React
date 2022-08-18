import React, { useRef, useState } from "react";
import card from "./card.module.css";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Card() {
  const kart = useSelector((state) => state.cardReducer);
  console.log(kart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    Swal.fire({
      title: "Silmək istədiyinizdən əminsinizmi ?",
      text: "Bu əməliyyat geri alına bilməz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "Delete_Card", payload: id });
        Swal.fire("Silindi!", "Məhsul silindi.", "success");
      }
    });
  };

  const handleArtir = (type, id) => {
    let temp = kart;
    let f = temp.find((a) => a.id === id);
    if (type === "azal") {
      f.quantity--;
      if (f.quantity === 0) {
        temp = temp.filter((a) => a.id != id);
      }
    } else {
      f.quantity++;
    }
    dispatch({ type: "edit_quantity", payload: temp });
  };
  return (
    <div>
      <div>
        <div className={card.backImg}></div>
        <div className={card.shopping}>
          <div className={card.shopTittle}>
            <h3>Mehsul</h3>
            <h3>Mehsulun adi</h3>
            <h3>Deyeri</h3>
            <h3>Sayi</h3>
            <h3>Cemi</h3>
            <h3>Sil</h3>
          </div>

          {kart.map((a, key) => (
            <div key={key} className={card.cardDiv1}>
              <div className={card.product}>
                <img src={a.img} />
              </div>
              <div className={card.productName}>
                <p>{a.name}</p>
              </div>
              <div className={card.productPrice}>
                {a.price}
                <i class="fa-solid fa-manat-sign"></i>
              </div>
              <div className={card.quantity}>
                <button onClick={() => handleArtir("azal", a.id)}>-</button>
                <div>{a.quantity}</div>
                <button onClick={() => handleArtir("art", a.id)}>+</button>
              </div>
              <div className={card.totalPrice}>
                <p>
                  {a.price * a.quantity}
                  <i class="fa-solid fa-manat-sign"></i>
                </p>
              </div>
              <div className={card.remove}>
                <button onClick={() => handleRemove(a.id)}>X</button>
              </div>

              {/* <div className={card.img}>
        <img src={a.img} alt="" />
        <img className={card.block} src={a.img2}/>
            
         </div>
        <div className={card.cardMini1}>
        <h3>{a.name}</h3>
        <p>{a.price}<i class="fa-solid fa-manat-sign"></i></p>
        <button><h3>Xususiyyetlerine bax</h3></button>
    
        </div> */}
            </div>
          ))}
          {/* <div className={card.sum}>
        <button>Hamisini sil</button>
    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
{
  /* <div className="slider-box">
<div className='img'>
       <img className='img' src={slider} />
    </div>
<button className="btn-left" onClick={()=>seta(a-1)} >
<i className="fa-solid fa-circle-chevron-left"></i>
</button>
<h1 className="title">

</h1>
<button className="btn-right" >
<i className="fa-solid fa-circle-chevron-right" onClick={()=>seta(a+1)}></i>
</button>

</div> */
}
