import React from 'react'
import Style from './css/HomeRandom.module.css'

export default function HomeRandom() {
  return (
    <div className={Style.random_wrap}>
        <div className={Style.random}>
            <ul className={Style.random_list}>
            <li>
                <img src='../images/randombox_img01.jpg' alt='랜덤박스이미지'/>
            </li>
            <li>
                <img src='../images/randombox_img02.jpg' alt='랜덤박스이미지'/>
            </li>
            <li>
                <img src='../images/randombox_img03.jpg' alt='랜덤박스이미지'/>
            </li>
            <li>
                <img src='../images/randombox_img04.jpg' alt='랜덤박스이미지'/>
            </li>
            </ul>
            <div className={Style.visual_num}>
                    1 / 4
            </div>
        </div>
    </div>
  )
}
