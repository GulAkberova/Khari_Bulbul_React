import React from 'react'
import contact from './contact.module.css'
import  BitkilerCarusel from './Bitkicarusel'


function Contact() {
  return (
    <div>
      <div className={contact.bigdiv}>
    <div  className={contact.mainDiv}>
      <div className={contact.div1}>
        <div className={contact.contact1}>
          <p className={contact.p}>Elaqe</p>
          <p className={contact.p1}><i class="fa-solid fa-location-dot"></i> &nbsp;7 İzmir küçəsi, Bakı</p>
          <p><i class="fa-solid fa-envelope"></i> &nbsp;XariBulbul0@gmail.com</p>
          <p><i class="fa-solid fa-phone"></i> &nbsp;+994(051) 323 01 04</p>
          <p><i class="fa-brands fa-instagram"></i>&nbsp;Xari_Bulbul</p>

        </div>

      </div>
      <div  className={contact.div2}>
        <p>Bizimle elaqe</p>
        <input type={"text"} placeholder={"Ad"}/>
        <input type={"email"} placeholder={"Email"}/>
       <input className={contact.inp} type={"text"} placeholder={"Mesaj"}/>
       <button>Gonder</button>
      </div>

    </div>
      </div>
      <BitkilerCarusel/>
      
    </div>
  )
}

export default Contact