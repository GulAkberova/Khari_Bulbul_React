import React from 'react'
import { useForm } from "react-hook-form";
import regis from './regis.module.css'
import axios from 'axios';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { NavLink } from 'react-router-dom'


function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[success,setSuccess]=useState(false)
   const gonder =(data)=>{
      axios.post("https://jsonplaceholder.typicode.com/todos/",data)
      .then(res=>res.data)
      .then(res=>{
        if(res){
            setSuccess(true)
        }
      })
   }
 
    return (
    <div>
        <div className={regis.bigDiv}>
            <div  className={regis.middleDiv1}>
                <div  className={`${regis.littleDiv1} `}>
                   <div className={regis.regisInpDiv1}>
          {/* <video  autoPlay loop muted >
             <source src={video4} type='video/mp4'/>
         </video> */}
          </div>
                <form onSubmit={handleSubmit(gonder)}>
                    <h3 data-aos="zoom-in"   data-aos-duration='1300'>Register</h3>
                <label>
                 {/* <p>   Ad</p> */}
               
                    <br/>
                    <i data-aos="fade-right"   data-aos-duration='1300' data-aos-delay='50' class="fa-solid fa-circle-user"></i>
                    <input   type={"text"} {...register("ad",{required:true,maxLength:14,minLength:3,pattern:/[a-z]/gi})} placeholder={"Ad"} data-aos="fade-left"   data-aos-duration='1300' data-aos-delay='50'/>
                    <br/>
                    {/* {errors.ad?.type=="required" &&<span style={{color:"red",fontSize:"10px"}}>Zehmet olmasa xanani doldurun</span>}
        
                    {errors.ad?.type=="maxLength"&& <span style={{color:"red",fontSize:"10px"}}>14 herifden cox ola bilmez</span>}
               
                    {errors.ad?.type=="minLength"&& <span style={{color:"red",fontSize:"10px"}}>3 herifden az ola bilmez</span>}
                
                    {errors.ad?.type=="pattern"&& <span style={{color:"red",fontSize:"10px"}}>Reqem yazmaq olmaz</span>} */}
                </label>
                {/* <label>
                 
                    <br/>
                  
                    <input   type={"text"} {...register("soyad",{required:true,maxLength:14,minLength:3,pattern:/[a-z]/gi})} placeholder={"Soyad"} data-aos="fade-right"   data-aos-duration='2300' data-aos-delay='150'/>
                    <br/>
                    {errors.soyad?.type=="required" &&<span style={{color:"red",fontSize:"10px"}}>Zehmet olmasa xanani doldurun</span>}
            
                    {errors.soyad?.type=="maxLength"&& <span style={{color:"red",fontSize:"10px"}}>14 herifden cox ola bilmez</span>}
                    {errors.soyad?.type=="minLength"&& <span style={{color:"red",fontSize:"10px"}}>3 herifden az ola bilmez</span>}
              
                    {errors.soyad?.type=="pattern"&& <span style={{color:"red",fontSize:"10px"}}>Reqem yazmaq olmaz</span>}

                </label> */}
                <label>
                
                    <br/>
                    <i data-aos="fade-right"   data-aos-duration='1300' data-aos-delay='350' class="fa-solid fa-envelope"></i>
                    <input   type={"email"} {...register("email",{required:true})} placeholder={"Email"} data-aos="fade-left"   data-aos-duration='1300' data-aos-delay='350'/>
                    <br/>
                    {/* {errors.email?.type=="required" && <span style={{color:"red",fontSize:"10px"}}>Zehmet olmasa xanani doldurun</span>} */}
                </label>
                <label>
                  
                    <br/>
                    <i data-aos="fade-right"   data-aos-duration='1300' data-aos-delay='550' class="fa-solid fa-lock"></i>
                    <input  type={"password"} {...register("sifre",{required:true,maxLength:8})} placeholder={"Sifre"} data-aos="fade-left"   data-aos-duration='1300' data-aos-delay='550'/>
                    <br/>
                    {/* {errors.sifre?.type=="required" && <span style={{color:"red",fontSize:"10px"}}>Zehmet olmasa xanani doldurun</span>}
                    {errors.sifre?.type=="maxLength" && <span style={{color:"red",fontSize:"10px"}}>Sifre 8simvoldan yuxari olmalidir</span>} */}
                </label>
             
                <div>
                <button  className={regis.button1}>
                    Gonder
                </button>
                <button  className={`${regis.button2} ${regis.b2}`}><NavLink to={"/login"}>Login</NavLink></button>
                </div>
                <p className={regis.or}>Or</p>
             
             <div className={regis.qulluqK2}>
       <span><i class="fa-brands fa-gofore"></i></span>
       <span><i class="fa-brands fa-facebook-f"></i></span>

       <span><i class="fa-brands fa-linkedin-in"></i></span>
     </div>
            </form>
            {success && alert("Qeydiyyat ugurla basa catdi")}

                </div>
              

            </div>
         
        </div>

    </div>
  )
}

export default Register