import React, { useEffect, useState } from 'react'
import Style from './css/SubProductDetail.module.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../api/firebase';
//import { getProducts } from '../api/firebase';


export default function SubProductDetail() {

    const {productId} = useParams('')
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(()=>{
        getProductDetail(productId).then((res)=>{
            setSelectedProduct(res)
        })
        window.scrollTo(0,0)
    },[productId])

  return (
    <div className={Style.product_detail_wrap}>
        <div className={Style.product_detail}>
            <div className={Style.product_img}>
                <img src={selectedProduct?.image} alt=''/>
            </div>
            <div className={Style.product_txt}>
                <div className={Style.product_txt_top}>
                    <p className={Style.product_best}>
                        Best
                    </p>
                    <p className={Style.product_good}>
                        <IoMdHeartEmpty/>
                    </p>
                    <p className={Style.product_share}>
                        <IoShareSocial/>
                    </p>
                </div>
                <div className={Style.product_title}>
                    <p className={Style.product_name}>
                        {selectedProduct?.name}
                    </p>
                    <p className={Style.product_price}>
                        {selectedProduct?.price}원
                    </p>
                </div>
                <div className={Style.product_bottom}>
                    <p className={Style.product_icon}>
                        <FaUser/>
                    </p>
                    <p className={Style.product_bottom_txt}>
                        회원가입하고 다양한 혜택을 누리세요!
                    </p>
                </div>
                <div className={Style.product_bottom}>
                    <p className={Style.product_icon}>
                        <BiSolidCoinStack/>
                    </p>
                    <p className={Style.product_bottom_txt}>
                        포인트 최대 5% 적립
                    </p>
                </div>
                <div className={Style.product_bottom}>
                    <p className={Style.product_icon}>
                        <FaTruck/>
                    </p>
                    <p className={Style.product_bottom_txt}>
                        배송비 2,500원(20,000원 이상시 무료배송)
                    </p>
                </div>
                <div className={Style.product_all_price_wrap}>
                    <p className={Style.product_all_price_title}>
                        총 금액
                    </p>
                    <p className={Style.product_all_price}>
                        {selectedProduct?.price}원
                    </p>
                </div>
            <div className={Style.product_btn_wrap}>
                <div className={Style.product_btn}>선물하기</div>
                <div className={Style.product_btn}>장바구니</div>
                <div className={Style.product_btn}>구입하기</div>
            </div>
            </div>
        </div>
    </div>
  )
}
