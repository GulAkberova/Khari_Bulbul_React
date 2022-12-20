import React from "react";
import { useForm } from "react-hook-form";
import regis from "./regis.module.css";
import axios from "axios";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { NavLink } from "react-router-dom";
import video4 from "./video/videoregis.mp4";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const gonder = (data) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos/", data)
      .then((res) => res.data)
      .then((res) => {
        if (res) {
          setSuccess(true);
        }
      });
  };
  return (
    <div>
      <div className={regis.bigDiv}>
        <div className={regis.middleDiv}>
          <div className={`${regis.littleDiv1} ${regis.littleDiv2}`}>
            <div className={regis.regisInpDiv1}>
              {/* <video  autoPlay loop muted >
             <source src={video4} type='video/mp4'/>
         </video> */}
            </div>
            {/* <div className={regis.regisInpDiv2}> */}
            <form onSubmit={handleSubmit(gonder)}>
              <h3 data-aos="zoom-in" data-aos-duration="1200">
                Login
              </h3>

              <label>
                <br />
                <i
                  data-aos="fade-right"
                  data-aos-duration="1300"
                  data-aos-delay="50"
                  class="fa-solid fa-circle-user"
                ></i>
                <input
                  type={"text"}
                  {...register("email", { required: true })}
                  placeholder={"Ad "}
                  data-aos="fade-left"
                  data-aos-duration="1300"
                  data-aos-delay="50"
                />

                <br />
                {/* {errors.email?.type=="required" && <span style={{color:"red",fontSize:"10px"}}>Zehmet olmasa xanani doldurun</span>} */}
              </label>
              <label>
                <br />
                <i
                  data-aos-delay="250"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  class="fa-solid fa-lock"
                ></i>
                <input
                  type={"password"}
                  {...register("sifre", { required: true, maxLength: 8 })}
                  placeholder={"Sifre"}
                  data-aos-delay="250"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                />
                <br />
                {errors.sifre?.type == "required" && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "10px",
                      padding: "0px 25px",
                    }}
                  >
                    Zehmet olmasa xanani doldurun
                  </span>
                )}
                {errors.sifre?.type == "maxLength" && (
                  <span style={{ color: "red", fontSize: "10px" }}>
                    Sifre 8simvoldan yuxari olmalidir
                  </span>
                )}
              </label>
              <label>
                <ul className={regis.ul}>
                  {/* <li><input type={"checkbox"}/></li> */}
                  <li>Sifreni unutdun?</li>
                </ul>
              </label>
              <div>
                <button className={regis.button1}>Gonder</button>
                {/* <p > <NavLink to={"register"}>Register</NavLink></p> */}
                <button className={regis.button2}>
                  <NavLink to={"/register"}>Register</NavLink>
                </button>
              </div>
              <p className={regis.or}>Or</p>

              <div className={regis.qulluqK2}>
                <span>
                  <i class="fa-brands fa-gofore"></i>
                </span>
                <span>
                  <i class="fa-brands fa-facebook-f"></i>
                </span>

                <span>
                  <i class="fa-brands fa-linkedin-in"></i>
                </span>
              </div>
            </form>
          </div>

          {success && alert("Qeydiyyat ugurla basa catdi")}
        </div>
      </div>
    </div>

    // </div>
  );
}
//ELADIR YUSIF NABI BAXDI <3

export default Login;
