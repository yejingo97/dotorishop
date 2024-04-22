import React from 'react'
import Style from './css/HomeRandom.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import '.././css/Swiper.css';

export default function HomeRandom() {
  return (
    <div className={Style.random_wrap}>
        <div className={Style.random}>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <img src='../images/randombox_img01.jpg' alt='랜덤박스이미지'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='../images/randombox_img02.jpg' alt='랜덤박스이미지'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='../images/randombox_img03.jpg' alt='랜덤박스이미지'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='../images/randombox_img04.jpg' alt='랜덤박스이미지'/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
