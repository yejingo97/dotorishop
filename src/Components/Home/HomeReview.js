import React from 'react'
import Style from './css/HomeReview.module.css'

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
                        <p className={Style.review_products_img}>

                        </p>
                        <p className={Style.review_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <div className={Style.review_intro}>
                            <p className={Style.review_img}>

                            </p>
                            <p className={Style.review_star}>

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
