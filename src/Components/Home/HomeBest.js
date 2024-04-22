import React from 'react'
import Style from './css/HomeBest.module.css'

export default function HomeBest() {
  return (
    <div className={Style.best_wrap}>
        <div className={Style.best}>
            <p className={Style.contents_title}>BEST ITEM</p>
            <div className={Style.best_products}>
                <ul className={Style.best_products_list}>
                    <li>
                        <p className={Style.best_products_img}>
                            <img src='../images/best_img01.jpg' alt='베스트이미지01'/>
                        </p>
                        <p className={Style.best_products_movie}>
                            하울의 움직이는 성
                        </p>
                        <p className={Style.best_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <p className={Style.best_products_price}>
                            13,500원
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_products_img}>
                            <img src='../images/best_img02.jpg' alt='베스트이미지02'/>
                        </p>
                        <p className={Style.best_products_movie}>
                            하울의 움직이는 성
                        </p>
                        <p className={Style.best_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <p className={Style.best_products_price}>
                            13,500원
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_products_img}>
                            <img src='../images/best_img03.jpg' alt='베스트이미지03'/>
                        </p>
                        <p className={Style.best_products_movie}>
                            하울의 움직이는 성
                        </p>
                        <p className={Style.best_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <p className={Style.best_products_price}>
                            13,500원
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_products_img}>
                            <img src='../images/best_img04.jpg' alt='베스트이미지04'/>
                        </p>
                        <p className={Style.best_products_movie}>
                            하울의 움직이는 성
                        </p>
                        <p className={Style.best_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <p className={Style.best_products_price}>
                            13,500원
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_products_img}>
                            <img src='../images/best_img05.jpg' alt='베스트이미지05'/>
                        </p>
                        <p className={Style.best_products_movie}>
                            하울의 움직이는 성
                        </p>
                        <p className={Style.best_products_name}>
                            [토미카]드림토키마 지브리 09...
                        </p>
                        <p className={Style.best_products_price}>
                            13,500원
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
