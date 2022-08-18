import React from 'react'
import { NavLink } from 'react-router-dom'
import foot from './footer.module.css'
import catdirilma from './img/catdirilma.svg'

function Footer() {
  return (
    <div>

{/* <div classNameName={foot.footer}>

   <h2>Xəbər bülleteni</h2>
   <p>Daha çox məlumat əldə etmək üçün bülletenimizə abunə olun</p>
   <div classNameName={foot.email}>
   <input type={"email"} placeholder={"Emaili daxil edin"}/>
   <button>Daxil olun</button>
 
  </div>
 </div> */}
 <div className={foot.catdirilma}>
<img data-aos="fade-right"   data-aos-duration='2000' width={130} src='	https://static.patchplants.com/img/illustrations/delivery-van.svg'/>
<span> &nbsp;<b>50m-dan yuxarı sifarişlərdə pulsuz standart çatdırılma...</b></span>
 </div>


 <div className={foot.melumat}>
<div className={foot.melumat1}>
<img width={30} height={30} src='https://static.patchplants.com/img/icons/icon-telephone.svg'/>
<div className={foot.melumatyazi}>
<h3>Komek</h3>
<p>
Əlaqə saxlamaq lazımdır?</p>
<p>Komandaya mesaj göndərmək üçün sadəcə yardım vidcetindən istifadə edin.</p>
<p>Müştəri xidmətlərinin iş saatları:</p>
<p>Bazar ertəsindən bazar 9-dan 10-a qədər</p>
<p>Canlı söhbət bazar ertəsindən bazar ertəsi saat 10:00-dan 17:00-dək mövcuddur</p>



</div>
</div>
<div className={foot.melumat1}>
<img width={30} height={30} src='https://static.patchplants.com/img/icons/icon-security.svg'/>
<div className={foot.melumatyazi}>
<h3>Tehlukesizlik</h3>
<p>
Təhlükəsiz ödəniş - sistemlərimiz bank səviyyəli təhlükəsizliklə qorunur. Ödənişiniz bizimlə təhlükəsizdir.</p>
</div>
</div>
<div className={foot.melumat1}>
<img width={30} height={30} src='https://static.patchplants.com/img/icons/icon-delivery.svg'/>
<div className={foot.melumatyazi}>
<h3>
Keyfiyyet</h3>
<p>
Əlaqə saxlamaq lazımdır?</p>
<p>Biz sizə ən keyfiyyətli bitkiləri gətirmək üçün 40-dan çox mütəxəssis yetişdirici ilə birbaşa işləyirik</p>




</div>
</div>
<div className={foot.melumat1}>
<img width={30} height={30} src='	https://static.patchplants.com/img/icons/icon-patch-promise.svg'/>
<div className={foot.melumatyazi}>

<h3>Xari Bulbul</h3>

<p>Məsləhətə ehtiyacınız varsa, sadəcə əlaqə saxlayın - bizə ehtiyacınız olduğu müddətdə biz sizin şəxsi bitki gurusunuz olacağıq. Bir şey olarsa, çatdırıldıqdan sonra 30 gün ərzində bizə bildirin - biz onu sıralayacağıq.</p>




</div>
</div>
 </div>
 <div className={foot.mainFoot}>
  <div className={foot.mainFootDiv}>
    <div className={foot.footDiv1}>
      <h2 className={foot.logo}>Xari Bulbul</h2>
      <span>Lorem ipsum dolor sit. Earum, praesentium sequi numquam alias in sint ut odio debitis consequuntur amet, eveniet id dolores aut. Nesciunt, adipisci!</span>
     <div className={foot.footDiv1Contact}>
      <p><i class="fa-solid fa-phone"></i> &nbsp;+994(051) 323 01 04</p>
      <p><i class="fa-solid fa-envelope"></i> &nbsp;XariBulbul0@gmail.com</p>
   
      <ul className={foot.footSebeke}>
    <li><i class="fa-brands fa-facebook-f"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>

          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-youtube"></i></li>
          </ul>
       
    
    </div>
    </div>
    <div className={foot.footDiv2}>
    <p><b>Menu</b></p>
    <ul>
      <li><NavLink to={"bitkiler"}>Bitkiler</NavLink></li>
      <li><NavLink to={"qablar"}>Qablar</NavLink></li>
      <li><NavLink to={"muhafize"}>Bitkilere qaygi</NavLink></li>
      <li><NavLink to={"yasilyasayis"}>Yasil yasayis</NavLink></li>
      <li> <NavLink to={"bitkiyequlluq"}>Bitkileri oyren</NavLink></li>
      <li> <NavLink to={"yaybitkisi"}>Yay bitkilerine baxim</NavLink></li>
    
    </ul>

    </div>

    <div className={foot.footDiv2}>
    <p><b>Sirket</b></p>
    <ul>
      <li>Haqqimizda</li>
      <li> <NavLink to={"contact"}>Elaqe</NavLink></li>
      <li>Istifade qaydalari</li>
      <li>Musteri xidmeti</li>
      <li>Bitkileri oyren</li>
     
    </ul>

    </div>
    <div className={foot.footDiv2}>
    <p><b>Komek</b></p>
    <ul>
      <li>FAQ</li>
      <li>Catdirilma</li>
      <li>Istifade qaydalari</li>
      <li>Musteri xidmeti</li>
     
    </ul>

    </div>
 
 

  </div>

 </div>
<div className={foot.made}>
  <ul>
  <li>Made With</li>
          <li><i className="fa-solid fa-heart"></i></li>
          <li>In Azerbaijan</li>
          <li>2021-2022</li>
  </ul>

</div>



    <div classNameName={foot.made}>
      <ul>
        
      </ul>
   </div>
  
    </div>
  )
}

export default Footer