import React from 'react'
import Style from './css/Visual.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './css/Swiper.css';

import { Navigation } from 'swiper/modules';

export default function Visual() {
  return (
    <div className={Style.visual_wrap}>
        <div className={Style.visual}>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/visual01_img.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        그대들은 어떻게 살 것인가<br/>
                        NEW ITEM
                    </p>
                    <p className={Style.visual_txt}>
                        귀여운 와라와라 키홀더부터 작품 속 캐릭터 피규어까지 지금 바로 확인해보세요!
                    </p>
                    <p className={Style.visual_more}>
                        <button className={Style.visual_more_btn}>
                            자세히보기
                            <span className={Style.more_icon}>
                                <IoIosArrowForward/>
                            </span>
                        </button>
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/visual02_img.jpg' alt='비주얼이미지02'/>
                    </p>
                    <p className={Style.visual_title}>
                        지브리<br/>
                        토미카 모음ZIP.
                    </p>
                    <p className={Style.visual_txt}>
                        하울의 움직이는 성의 하울 성, 캘시퍼 토미카 신상품 2종 출시!
                    </p>
                    <p className={Style.visual_more}>
                        <button className={Style.visual_more_btn}>
                            자세히보기
                            <span className={Style.more_icon}>
                                <IoIosArrowForward/>
                            </span>
                        </button>
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/visual03_img.jpg' alt='비주얼이미지03'/>
                    </p>
                    <p className={Style.visual_title}>
                        월간 지브리<br/>
                        신상품 & 재입고
                    </p>
                    <p className={Style.visual_txt}>
                        우나바라시리즈부터 카라비너까지!<br/>
                        신상품과 재입고 상품을 확인해보세요
                    </p>
                    <p className={Style.visual_more}>
                        <button className={Style.visual_more_btn}>
                            자세히보기
                            <span className={Style.more_icon}>
                                <IoIosArrowForward/>
                            </span>
                        </button>
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/visual04_img.jpg' alt='비주얼이미지04'/>
                    </p>
                    <p className={Style.visual_title}>
                        3월, GHIBLI<br/>
                        HOME STYLING
                    </p>
                    <p className={Style.visual_txt}>
                        지브리 아이템으로 집 꾸미기 대작전<br/>
                        해시태그 이벤트도 참여해보세요!
                    </p>
                    <p className={Style.visual_more}>
                        <button className={Style.visual_more_btn}>
                            자세히보기
                            <span className={Style.more_icon}>
                                <IoIosArrowForward/>
                            </span>
                        </button>
                    </p>
                </SwiperSlide>
            </Swiper>
            <div className={Style.visual_num}>
                1 / 4
            </div>
            <div className={Style.visual_btn}>
                <p className={Style.visual_left_btn}>
                    <IoIosArrowBack/>
                </p>
                <p className={Style.visual_right_btn}>
                    <IoIosArrowForward/>
                </p>
            </div>
        </div>
    </div>
  )
}
