// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';

function Slider () {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="img/img1.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="img/img2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="img/img3.png" alt="" /></SwiperSlide>
      
    </Swiper>
  );
};
 export default Slider;