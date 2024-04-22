import React from 'react'
import Style from './css/HomeReview.module.css'
import { FaStar } from "react-icons/fa";

export default function HomeReview() {
  return (
    <div className={Style.review_wrap}>
        <div className={Style.review}>
            <p className={Style.contents_title}>
                BEST REVIEW
            </p>
            <div className={Style.review_list_wrap}>
                <ul className={Style.review_list}>
                    <li>
                        <div className={Style.products_img}>
                            <img src='../images/review_product_img01.jpg' alt='리뷰상품이미지01'/>
                        </div>
                        <p className={Style.review_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <div className={Style.review_products_img}>
                            <img src='../images/review_img01.jpg' alt='리뷰이미지01'/>
                        </div>
                        <div className={Style.review_intro}>
                            <p className={Style.review_star}>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                5
                            </p>
                            <p className={Style.review_txt}>
                                너무너무 귀엽고 보들보들 좋습니다ㅠㅠㅠㅠㅠ
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={Style.products_img}>
                            <img src='../images/review_product_img02.jpg' alt='리뷰상품이미지02'/>
                        </div>
                        <p className={Style.review_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <div className={Style.review_products_img}>
                            <img src='../images/review_img02.jpg' alt='리뷰이미지02'/>
                        </div>
                        <div className={Style.review_intro}>
                            <p className={Style.review_star}>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                5
                            </p>
                            <p className={Style.review_txt}>
                                너무너무 귀엽고 보들보들 좋습니다ㅠㅠㅠㅠㅠ
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={Style.products_img}>
                            <img src='../images/review_product_img03.jpg' alt='리뷰상품이미지03'/>
                        </div>
                        <p className={Style.review_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <div className={Style.review_products_img}>
                            <img src='../images/review_img03.jpg' alt='리뷰이미지03'/>
                        </div>
                        <div className={Style.review_intro}>
                            <p className={Style.review_star}>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                5
                            </p>
                            <p className={Style.review_txt}>
                                너무너무 귀엽고 보들보들 좋습니다ㅠㅠㅠㅠㅠ
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
