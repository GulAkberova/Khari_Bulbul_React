import React, { useState, useEffect } from 'react'

import qulluq from './bitkiyequlluq.module.css'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"



function BitkiyeQulluq() {
  const qulluqData = useSelector(state => state.qulluqReducer)
  console.log(qulluqData)


  const [data, setData] = useState(qulluqData)

  useEffect(() => {
    setData(qulluqData);

    console.log(qulluqData);
  }, qulluqData)

  const filterResult = (index) => {
    const result = qulluqData.filter((qulluqData) => {
      return qulluqData.category === index;
    });

    setData(result);
    console.log(result)
  }

  return (
    <div>
      <div className={qulluq.bigdiv}>
        <div className={qulluq.bigdivYazi}>
          <p>Bitkiye Qulluq</p>
          <span>Bitki baxımını tamamilə asanlaşdırmaq üçün məsləhətlər, fəndlər və bitki təlimatları.</span>
        </div>
      </div>
      <div className={qulluq.qulluqDiv}>
      
      <div className={qulluq.qulluqImg}>
        {data.map((index, key) => (
          <div key={key} className={qulluq.divImg}>
          
            <img className={qulluq.divImg1} src={index.img} />
          
            <p>Bitkiye qulluq</p>
            <span>
            <b> {index.name}</b>
             </span><br/>
             <p>{index.name1}</p>
             <button> <Link to={`/qulluq/${index.id}`} >Etrafli  </Link></button>
          </div>

        ))}

      </div>
      <div className={qulluq.category}>
        <div className={qulluq.qulluqCategory}>
        <div className={qulluq.qulluqK}><p><b>Kateqoriyalar</b></p></div>
        <div className={qulluq.qulluqK1}><p onClick={() => setData(qulluqData)}>Butun melumatlar</p></div>
        {/* <div className={qulluq.qulluqK1}><p onClick={() => filterResult('dekor')}>Dekor</p></div> */}
        <div className={qulluq.qulluqK1}><p onClick={() => filterResult('qaygi')}>Bitkilere qaygi</p></div>
        <div className={qulluq.qulluqK1}><p onClick={() => filterResult('meslehet')}>Bitkiler ucun meslehetler</p></div>
          
        </div>
        <div className={qulluq.qulluqCategories}>
        <div className={qulluq.qulluqK}><p><b>Son postlar</b></p></div>
        <div className={qulluq.qulluqK2}>
          <p>Sağlam qapalı sukkulentlər üçün bitki baxım məsləhətləri</p>
          <img src='https://bloomscape.com/wp-content/uploads/2019/09/succulents-2-1500x1500.jpg?ver=68874'/>
        </div>
        <div className={qulluq.qulluqK2}>
          <p>Bu Olmaz Ev Bitkiləri ilə Baharı Məkanınıza Dəvət Edin</p>
          <img src='https://bloomscape.com/wp-content/uploads/2020/04/indoor-cactus-care_-1-324x270.png?ver=184863'/>
        </div>
        <div className={qulluq.qulluqK2}>
        <p>Sağlam qapalı sukkulentlər üçün bitki baxım məsləhətləri</p>

          <img src='https://bloomscape.com/wp-content/uploads/2022/01/20211020_Bloomscape_Winter-Holiday-Lifestyle_0838-324x243.jpg?ver=663032'/>
        </div>
        <div className={qulluq.qulluqK2}>
          <span><i class="fa-brands fa-facebook-f"></i></span>
          <span><i class="fa-brands fa-twitter"></i></span>

          <span><i class="fa-brands fa-instagram"></i></span>
          <span><i class="fa-brands fa-youtube"></i></span>
        </div>
          
        </div>
        <div className={qulluq.qulluqCategory}>
        <div className={qulluq.qulluqK}><p><b>Bizim komanda</b></p></div>
        <img className={qulluq.qulluqKImg} src='https://www.plants.com/greenhouse/wp-content/uploads/2022/06/plantsteamphoto.jpg'/>
         <p className={qulluq.p}><b>Biz Xari Bulbul komandasıyıq!</b></p>
        </div>

</div>
      </div>
    </div>
  )
}

export default BitkiyeQulluq