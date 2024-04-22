import React from 'react'
import Style from './css/HomeAcc.module.css'

export default function HomeAcc() {
  return (
    <div className={Style.acc_wrap}>
        <div className={Style.acc}>
            <p className={Style.contents_title}>
                귀여움 한도초과! 지브리 악세사리/소품
            </p>
            <div className={Style.acc_products}>
                <div className={Style.acc_products_left}>
                    <img src='../images/acc_left_img.jpg' alt='악세사리대표이미지'/>
                </div>
                <div className={Style.acc_products_right}>
                    <ul className={Style.acc_products_list}>
                        <li>
                            <p className={Style.acc_products_img}>
                                <img src='../images/acc_img01.jpg' alt='악세사리이미지01'/>
                            </p>
                            <p className={Style.acc_products_movie}>
                                하울의 움직이는 성
                            </p>
                            <p className={Style.acc_products_name}>
                                키링(데롱데롱 캘시퍼)
                            </p>
                            <p className={Style.acc_products_price}>
                                14,000원
                            </p>
                        </li>
                        <li>
                            <p className={Style.acc_products_img}>
                                <img src='../images/acc_img02.jpg' alt='악세사리이미지02'/>
                            </p>
                            <p className={Style.acc_products_movie}>
                                천공의 성 라퓨타
                            </p>
                            <p className={Style.acc_products_name}>
                                키링(정원의 로봇병)
                            </p>
                            <p className={Style.acc_products_price}>
                                14,000원
                            </p>
                        </li>
                        <li>
                            <p className={Style.acc_products_img}>
                                <img src='../images/acc_img03.jpg' alt='악세사리이미지03'/>
                            </p>
                            <p className={Style.acc_products_movie}>
                                천공의 성 라퓨타
                            </p>
                            <p className={Style.acc_products_name}>
                                랜턴모양키홀더(라퓨타)
                            </p>
                            <p className={Style.acc_products_price}>
                                31,000원
                            </p>
                        </li>
                        <li>
                            <p className={Style.acc_products_img}>
                                <img src='../images/acc_img04.jpg' alt='악세사리이미지04'/>
                            </p>
                            <p className={Style.acc_products_movie}>
                                센과 치히로의 행방불명
                            </p>
                            <p className={Style.acc_products_name}>
                                키링(보우네즈미와 하에도리)
                            </p>
                            <p className={Style.acc_products_price}>
                                14,000원
                            </p>
                        </li>
                        <li>
                            <p className={Style.acc_products_img}>
                                <img src='../images/acc_img05.jpg' alt='악세사리이미지05'/>
                            </p>
                            <p className={Style.acc_products_movie}>
                                하울의 움직이는 성
                            </p>
                            <p className={Style.acc_products_name}>
                                랜턴모양키홀더(캘시퍼)
                            </p>
                            <p className={Style.acc_products_price}>
                                31,000원
                            </p>
                        </li>
                        <li>
                            <p className={Style.acc_products_img}>
                                <img src='../images/acc_img06.jpg' alt='악세사리이미지06'/>
                            </p>
                            <p className={Style.acc_products_movie}>
                                하울의 움직이는 성
                            </p>
                            <p className={Style.acc_products_name}>
                                카라비너(캘시퍼)
                            </p>
                            <p className={Style.acc_products_price}>
                                25,000원
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
