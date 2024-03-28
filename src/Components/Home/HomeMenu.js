import React from 'react'
import Style from './css/HomeMenu.module.css'

export default function HomeMenu() {
  return (
    <div className={Style.menu_wrap}>
        <div className={Style.menu}>
            <nav>
                <ul className={Style.menu_list}>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            전체상품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            베스트상품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            신제품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            세일상품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            세일상품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            세일상품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            세일상품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                        </p>
                        <p className={Style.menu_txt}>
                            세일상품
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
