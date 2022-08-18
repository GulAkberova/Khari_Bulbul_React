import React, { useEffect, useState, useRef } from 'react'
import qulluq from './bitkiyequlluq.module.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Qulluq() {
  const qulluqData = useSelector(state => state.qulluqReducer)

  const [currentData, setCurrentData] = useState([])
  const param = useParams();
  useEffect(() => {
    let y = qulluqData.find(index => index.id == param.id)
    console.log(y);
    setCurrentData(y);
    
  }, [qulluqData]);
  console.log(currentData)

  return (
    <div>
      <div className={qulluq.bigdiv1}>
        </div>
        {/* <div className={qulluq.paramQulluq}>
          <img src={currentData?.img}/>
        </div> */}
        <div className={qulluq.name}>
        <p>{currentData.name}</p>
        <span></span>
      </div>
      <div className={qulluq.yasilYasayisDiv}>
        <div className={qulluq.yasilYasayisDiv1}>
        
               <img src={currentData?.img}/>
          
           <p><b>Çox güman ki, daha yüksək işıq, daha uzun günlər və yazın daha isti temperaturları sayəsində ev bitkilərində bəzi böyük yeni böyümələr görmüsünüz. İndi yay rəsmi olaraq gəldi, bitkilərin tezliklə yavaşlamasını gözləməyin! Bütün bu yeni böyüməni inkişaf etdirməyə kömək etmək üçün ən yaxşı yay ev bitkilərinə qulluq məsləhətlərimizi paylaşırıq.</b></p>
           <img className={qulluq.yasilImg} src={currentData?.img1}/>
           <div className={qulluq.yasilYasayisName}><p>Yayda qapalı bitkilərə qulluq üçün göstərişlər</p>
           </div>
      
             <h2>İpucu 1: Rutininizi iki dəfə yoxlayın</h2>
           <img src={currentData?.img2}/>
           <p>Yəqin ki, son bir neçə ay ərzində qayğı rutininizdə böyük bir dəyişiklik görmüsünüz! Bitkilər təbii olaraq ətraf mühitə reaksiya verirlər. Yay bərabərliyi yaxınlaşdıqca günlər ilin istənilən vaxtından daha uzun olur. Daha çox işıq, daha yüksək temperatur və artan rütubət bitkiniz üçün əsas böyümə mühitinə bərabərdir.</p>
           <h2>İpucu 2: Bitkiləri kəsin</h2>
           <img src={currentData?.img3}/>
           <p>
Əgər əvvəllər əhliləşdirdiyiniz bitki bir yaz böyüməsi ilə vəhşiləşdisə, o bitki körpəsini yenidən kəsməyin vaxtı gəldi! Bitkilərin kəsilməsi (həmçinin budama kimi tanınır) bir çox üstünlüklərə malikdir:</p>
<p><b>Ölçüyə nəzarət:</b> Gözlənilməz böyümə sıçrayışları, bitkinizin tez bir zamanda yerindən çıxması anlamına gələ bilər! Nəzarətdən kənar budaqları bir cüt iti çubuqla kəsin, yarpaqların 25%-dən çoxunu çıxarmayın.</p>
<p>
<b>Formalaşdırma:</b> Böyümə sıçrayışı da əvvəllər manikür edilmiş bitkinin tüklü və qeyri-müəyyən olmasına səbəb ola bilər. Kəskin bir cüt budama qayçı ilə kəsərək formanı dəqiqləşdirmək asandır.</p>
<p><b>Cavanlaşma:</b> Bitkiniz cırıq və yorğun, ayaqlı və ya seyrək böyümə ilə mi? Gənclik gavalı üçün vaxt ola bilər! Bu, təzə, yeni böyüməyə yol açmaq üçün yarpaqların çoxunun və ya hamısının çıxarılmasını ehtiva edən daha ekstremal bir yanaşmadır. Əgər kəskin tədbirlər görməkdən narahatsınızsa, məsləhət üçün Grow-How Team® ilə əlaqə saxlayın!</p>
<p><b>Yenidən çiçəkləmə:</b> Çiçək açan otaq bitkiləri üçün köhnə çiçəkləri solmağa başlayan kimi çıxarmaq faydalı ola bilər. Bu, bitkiyə toxum əvəzinə yeni çiçəklər istehsal etməyə enerji sərf etməyə imkan verir.</p>
<h2>İpucu 3: Gübrələyin!</h2>
<img src={currentData?.img4}/>
<p>Bitkilərin böyüməsinə kömək etmək üçün gübrələmə lazımdır. Bu, aktiv böyümə dövründə xüsusilə vacibdir, çünki dibçək qarışığı əsas qida maddələrinin tükənməsinə səbəb ola bilər. Bilməli olduğunuz hər şeyi gübrələmə 101 bələdçimizdə tapa bilərsiniz, lakin burada bəzi əsas məqamlar var</p>
<h2>
İpucu 4: Problemləri araşdırın</h2>
<img src={currentData?.img5}/>
<p>İstəsəniz də, istəməsəniz də, zərərvericilər və xəstəliklər ev bitkisinin yetişdirilməsi ilə birlikdə gedir. Bir az əlavə diqqət yetirsəniz, problemləri erkən tuta bilərsiniz. Bu, nəticədə problemin daha sürətli və daha effektiv müalicəsini təmin edəcək.</p>
     
         
        </div>

      </div>

    </div>
  )
}

export default Qulluq