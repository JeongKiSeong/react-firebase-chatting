// src/App.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Mousewheel,Autoplay,Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import json from '../slidesrc.json';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Board() {
  return (
    <Swiper
      modules={[Pagination, Mousewheel]}
      mousewheel
      keyboard
      pagination={{clickable:true}}
      className="notify_swiper"
      threshold={20}  
      speed={700}
      loop={true}
      autoplay={{ delay: 1300 }}
    >
      {json.src.map((banner, index)=>(
         <SwiperSlide className='slide-content' key={index}><a href={banner.link}  target="_blank" rel="noreferrer"><img src ={banner.img} width='100%' height='100%' alt=''/></a></SwiperSlide>
      ))}
      </Swiper>
  );
}

export default Board;