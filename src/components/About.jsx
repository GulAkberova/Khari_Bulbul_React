import React from "react";
import bitkiler from "./muhafize.module.css";

function About() {
  return (
    <div>
      <div className={bitkiler.overlayAbout}>
        <div className={bitkiler.overlayWrite}>
          <div className={bitkiler.name}>
            <p>Haqqimizda</p>
            <span></span>
          </div>
        </div>
      </div>
      <div className={bitkiler.about}>
        <h2>Hər kəs bir az daha yaşıllıqla yaşamalıdır</h2>
        <p>
          Bloomscape bitkilərlə əlaqənizi gücləndirmək üçün buradadır. Sağlam,
          getməyə hazır bitkiləri qapınıza çatdırmaqla və bitkilərinizin
          çiçəklənməsinə kömək etmək üçün sizə lazım olan məsləhətlər və fəndlər
          ilə bitki almağı asanlaşdırırıq. Bitkilər həyatı yaxşılaşdırır.
          Bitkiləri asanlaşdırırıq.
        </p>
      </div>
      <div className={bitkiler.aboutImg}>
        <div className={bitkiler.aboutImg1}>
          <img src="https://bloomscape.com/wp-content/uploads/2020/05/about-we-go-way-back-opt.jpg?ver=204998" />
        </div>
        <div className={bitkiler.aboutImg2}>
          <h2>Geri qayıdırıq</h2>
          <p>
            Biz beş nəsil istixana yetişdiricilərindən və çiçəkçilik sənayesinin
            yenilikçilərindən gəlirik və köklərimiz Hollandiyanın bağçılıq
            sənayesində qabaqcıl olan əcdadlara qədər gedib çıxır.
          </p>
          <p>
            Təsisçimiz Justin Mast, valideynləri ABŞ-da istixanaları gənc
            bitkilərlə təmin edən bizneslərini qurarkən onların istixana
            təhsilində böyüdü. Bu müddət ərzində onlar bağçılıq tədarük
            zəncirini dərindən başa düşərək, daşınma zamanı bitkiləri necə
            sağlam saxlamağı təkmilləşdirdilər.
          </p>
          <p>
            Justin ailə biznesindən əldə etdiyi bilik və təcrübəni götürdü və
            bunu bitkilərə olan ehtirası ilə birləşdirərək hazır bitkiləri
            istixanadan birbaşa qapınıza çatdırdı.
          </p>
        </div>
      </div>



      <div className={`${bitkiler.aboutImg} ${bitkiler.background}`}>
       
        <div className={bitkiler.aboutImg2}>
          <h2>
Birbaşa istixanadan</h2>
          <p>
          Bir qutu mağazasından və ya uşaq bağçasından bir otaq bitkisi satın aldığınız zaman, ehtimal ki, isti və ya soyuq yük maşını ilə istixanadan qaralama anbarına səyahət etmək üçün orta hesabla dörd həftə sərf edir. Sonra o, çox güman ki, çiçəklənməsi üçün lazım olan suyu, işığı və ya qayğını ala bilməyən bir mağazaya göndərilir. Bloomscape ilə bitkilərimizə bitki mütəxəssisləri tərəfindən qulluq edilir və onlar birbaşa sizə göndərildiyi istixanamızda optimal şəraitdə saxlanılır. Beləliklə, zavodunuz nəzarətsiz bir mühitdə 4 həftə qalmaq əvəzinə, istixanamızdan qapınıza qədər 3-4 gün sərf edir. Bu o deməkdir ki, bitkilər sağlam və artıq inkişaf edir.
          </p>
         
        </div>
        <div className={bitkiler.aboutImg1}>
          <img src="https://bloomscape.com/wp-content/uploads/2020/05/about-from-greenhouse.png?ver=205033" />
        </div>
      </div>



      <div className={bitkiler.aboutImg}>
        <div className={bitkiler.aboutImg1}>
          <img src="https://bloomscape.com/wp-content/uploads/2020/05/about-to-your-door-opt.jpg?ver=204995" />
        </div>
        <div className={bitkiler.aboutImg2}>
          <h2>
Qapınıza Çatdırılır</h2>
          <p>
          Bitkilərimiz qayğı və təcrübə ilə göndərilir. Bitkiləri düzgün temperaturda saxlamağı, köklərini qorumağı və istixanamızdan evinizə səyahət edərkən onları sağlam saxlamağı öyrəndik. Bizim innovativ qablaşdırmamız bitkiləri etibarlı şəkildə yerində saxlayır, zədələnmənin qarşısını alır və torpağın səpilməsini azaldır. Göndərmələrin çoxu bir həftədən az müddətə çatacaq və bütün bitkilər sağlam, zədələnməmiş və zövq almağınız üçün hazır olacaq.
          </p>
         
         
        </div>
      </div>

      <div className={`${bitkiler.aboutImg} ${bitkiler.background}`}>
     
        <div className={bitkiler.aboutImg2}>
          <h2>
          Bütün Rəhbərlik</h2>
          <p>
          Bitkiniz istixanamızı tərk etdikdən sonra təcrübəmiz dayanmır. Bitki baxımı ilə bağlı bütün suallarınızda sizə kömək etmək üçün buradayıq. Zavodunuza daxil olan sadə, fərdi qulluq təlimatlarından real vaxt rejimində mütəxəssis dəstəyinə qədər biz bitki baxımını asanlaşdırmaq istəyirik. İstənilən sualınızla bizə e-poçt yazın, söhbət edin və ya tvit yazın – Grow-How® Komandası hazırdır və kömək etməyə hazırdır!
                    </p>
         
         
        </div>
        <div className={bitkiler.aboutImg1}>
          <img src="https://bloomscape.com/wp-content/uploads/2020/05/about-guidance-opt.png?ver=205032" />
        </div>
      </div>
    </div>
  );
}

export default About;
