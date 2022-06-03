import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import api from 'services/Api';
import {useState,useEffect} from 'react';
// import foto1 from '../../img/img1.png';
// import foto2 from '../../img/img2.png';
// import foto3 from '../../img/img3.png';




// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function SlideShow() {

  const [slide, setSlide] =  useState([]);

     useEffect(() => {   
         const getSearch = async () => {
           try {
             const slide = await api.get('/banner') 
             setSlide(slide.data);
            } catch (error){
              console.log(error);
            }}
            getSearch();

     }, [])
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide><img src={foto1} alt="Imagem 1" /></SwiperSlide>
        <SwiperSlide><img src={foto2} alt="Imagem 2" /></SwiperSlide>
        <SwiperSlide><img src={foto3} alt="Imagem 3" /></SwiperSlide> */}
        {slide.map((slide) =>(<SwiperSlide><img  src={slide.urlBanner}/></SwiperSlide>) )}  
        
      </Swiper>
    </>
  );
}
export default SlideShow;