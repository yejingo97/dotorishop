import React from 'react'
import Style from './css/HomeMenu.module.css'
import { BiSolidCategory } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import { HiMiniSparkles } from "react-icons/hi2";
import { HiMiniBolt } from "react-icons/hi2";
import { MdTimer } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function HomeMenu() {
  return (
    <div className={Style.menu_wrap}>
        <div className={Style.menu}>
            <nav>
                <ul className={Style.menu_list}>
                    <li>
                        <Link to={'./productslist'}>
                            <p className={Style.menu_icon}>
                                <BiSolidCategory/>
                            </p>
                            <p className={Style.menu_txt}>
                                전체상품
                            </p>
                        </Link>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                            <FaMedal/>
                        </p>
                        <p className={Style.menu_txt}>
                            베스트상품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                            <HiMiniSparkles/>
                        </p>
                        <p className={Style.menu_txt}>
                            신제품
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                            <HiMiniBolt/>
                        </p>
                        <p className={Style.menu_txt}>
                            품절임박
                        </p>
                    </li>
                    <li>
                        <p className={Style.menu_icon}>
                            <MdTimer/>
                        </p>
                        <p className={Style.menu_txt}>
                            타임세일
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
