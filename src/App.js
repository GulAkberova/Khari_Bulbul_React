import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Aos from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Bitkiler from "./components/Bitkiler";
import Qablar from "./components/Qablar";
import Muhafize from "./components/Muhafize";
import Card from "./components/Card";
import Item from "./components/Item";
import Info from "./components/Info";
import Qulluq from "./components/Qulluq";
import Login from "./components/Login";
import BitkileriOyren from "./components/BitkileriOyren";
import Register from "./components/Register";
import CareInfo from "./components/CareInfo";
import Ofis from "./components/Ofis";
import BitkiyeQulluq from "./components/BitkiyeQulluq";
import AdminPanel from "./components/AdminPanel";
import { useDispatch } from "react-redux";
import Contact from "./components/Contact";
import MusteriPage from "./components/MusteriPage";
import YayBitkisi from "./components/YayBitkisi";
import YasilYasayis from "./components/YasilYasayis";
import About from "./components/About";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/musteri")
      .then((res) => res.data)
      .then((res) => dispatch({ type: "All_Data_Musteri", payload: res }));
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/plants")
      .then((res) => res.data)
      .then((res) => dispatch({ type: "All_DATA", payload: res }));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/care")
      .then((res) => res.data)
      .then((res) => dispatch({ type: "All_Indoor_Data", payload: res }));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/pots")
      .then((res) => res.data)
      .then((res) => dispatch({ type: "All_Pots_Data", payload: res }));
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/qulluq")
      .then((res) => res.data)
      .then((res) => dispatch({ type: "All_Data_Qulluq", payload: res }));
  });

  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Menu />
      <Routes>
        {/*  */}
        <Route path="/xarii-bulbul" element={<Home />} />
        <Route path="/bitkiler" element={<Bitkiler />} />
        <Route path="/qablar" element={<Qablar />} />
        <Route path="/muhafize" element={<Muhafize />} />
        <Route path="/card" element={<Card />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/qulluq/:id" element={<Qulluq />} />
        <Route path="/careInfo/:id" element={<CareInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bitkilerioyren" element={<BitkileriOyren />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ofis" element={<Ofis />} />
        <Route path="/bitkiyequlluq" element={<BitkiyeQulluq />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/musteri" element={<MusteriPage />} />
        <Route path="/yaybitkisi" element={<YayBitkisi />} />
        <Route path="/yasilyasayis" element={<YasilYasayis />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
