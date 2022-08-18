import React, { useState } from 'react'
import admin from './adminpanel.module.css'
import axios from 'axios';
import { useEffect } from 'react';


function AdminPanel() {
    const [adminpanel, setAdminPanel] = useState({
        name: "",
        price: "",
        img: "",
        quantity: ""
    })

    const handleChange = (e) => {
        let name = e.target.name
        let val = e.target.value
        setAdminPanel({
            ...adminpanel,
            [name]: val
        })
        console.log(adminpanel);
    }
    const sendGonder = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/musteri",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminpanel),
            })
    }
    //    useEffect(()=>{
    //         fetch("http://localhost:3001/plants",
    //         {
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json",
    //             },
    //             body: JSON.stringify(adminpanel),
    //         })
    //    },[adminpanel])
    // const handleSubmit=(e)=>{

    // }

    //  const handleGonder=(e)=>{
    //     e.preventdefault();
    //     fetch("http://localhost:3001/plants",
    //             {
    //                 method:"POST",
    //                 headers:{
    //                     "Content-Type":"application/json",
    //                 },
    //                 body: JSON.stringify(adminpanel),
    //             })
    //  }



    return (
        <div>
            <div className={admin.bigdiv}>

            </div>
            <div className={admin.name}>
        <p>Musteri Mehsulu</p>
        <span></span>
      </div>
            <div className={admin.adminPanel}>
                <div className={admin.adminImg}>
                    <img width={"90%"} height={"250px"} src={adminpanel.img} />
                    <h2>{adminpanel.name}</h2>
                    <p>{adminpanel.price}</p>
                    <p>{adminpanel.quantity}</p>

                </div>
                <div className={admin.adminInput}>
                    <form
                    // onSubmit={()=>handleSubmit(e)}
                    >
                        <label>
                            Mehsulun adi    <br />
                            <input onChange={(e) => handleChange(e)} name="name" type={'text'} />
                        </label>
                        <br />
                        <label>
                            Mehsulun qiymet
                            <br />
                            <input onChange={(e) => handleChange(e)} name="price" type={'text'} />
                        </label>
                        <br />
                        <label>
                            Mehsulun sekli
                            <br />
                            <input onChange={(e) => handleChange(e)} name="img" type={'text'} />
                        </label>
                        <br />
                        <label>
                            Mehsulun sayi
                            <br />
                            <input onChange={(e) => handleChange(e)} name="quantity" type={'number'} />
                        </label>
                        <br />
                        
                        <br />

                        <button
                            onClick={sendGonder}
                        >Gonder</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default AdminPanel