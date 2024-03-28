import React, { useRef, useState } from 'react'
import Style from './css/Header.module.css'
import { FiSearch } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Header() {
    const initMenu=[
        {index:0, text:"전체상품", path:'./productslist', subMenuList:[]},
        {index:1, text:"MOVIE", path:'./productslist', subMenuList:[
            {index:0, text:"이웃집 토토로", path:''},
            {index:1, text:"마녀배달부 키키", path:''},
            {index:2, text:"센과 치히로의 행방불명", path:''},
            {index:3, text:"하울의 움직이는 성", path:''},
            {index:4, text:"천공의 성 라퓨타", path:''},
            {index:5, text:"붉은돼지", path:''},
            {index:6, text:"원령공주", path:''},
            {index:7, text:"벼랑위의 포뇨", path:''},
            {index:8, text:"귀를 기울이면", path:''},
            {index:9, text:"바람계곡의 나우시카", path:''},
            {index:10, text:"마루 밑 아리에티", path:''},
            {index:11, text:"고양이의 보은", path:''},
            {index:12, text:"아야와 마녀", path:''},
            {index:13, text:"그대들은 어떻게 살 것인가", path:''}
        ]},
        {index:2, text:"CATEGORY", path:'', subMenuList:[
            {index:0, text:"인테리어", path:''},
            {index:1, text:"Toy & Hobby", path:''},
            {index:2, text:"소품", path:''},
            {index:3, text:"문구", path:''},
            {index:4, text:"패션", path:''},
            {index:5, text:"퍼즐", path:''},
            {index:6, text:"리빙", path:''},
            {index:7, text:"키친", path:''},
            {index:8, text:"시즌상품", path:''}
        ]},
        {index:3, text:"NEW", path:'./productlist', subMenuList:[
            {index:0, text:"전체", path:''},
            {index:1, text:"신상품", path:''}
        ]},
        {index:4, text:"GIFT", path:'./productlist', subMenuList:[
            {index:0, text:"전체", path:''},
            {index:1, text:"GIFT BAG", path:''}
        ]}
    ]

    const [selectedMenu, setSelectedMenu] = useState('')
    const changeMenu=(menu)=>{
        setSelectedMenu(menu)
    }
    const subMenu=useRef([])
    const headerWrap=useRef([])

    // const openSubMenu=()=>{
    //     gsap.killTweensOf(subMenu.current)
    //     gsap.to(subMenu.current, {display:'block', opacity:1})
    //     gsap.killTweensOf(headerWrap.current)
    //     gsap.to(headerWrap.current, {height:450})
    // }
    // const closeSubMenu=()=>{
    //     gsap.killTweensOf(subMenu.current)
    //     gsap.to(subMenu.current, {display:'none', opacity:0})
    //     gsap.killTweensOf(headerWrap.current)
    //     gsap.to(headerWrap.current, {height:40})
    // }
    return (
        <div className={Style.header_wrap} ref={headerWrap} onMouseLeave={(()=>{
            setSelectedMenu(null)
        })}>
            <header>
                <div className={Style.top_header}>
                    <ul className={Style.top_header_list}>
                        <li>
                            <Link to={'./'}>
                                <img src='../images/logo_img.png' alt='로고이미지'/>
                            </Link>
                        </li>
                        <li>
                            <input type="text" placeholder="검색어를 입력하세요."/>
                            <span className={Style.search_icon}>
                                <FiSearch />
                            </span>
                        </li>
                        <li>
                            <Link to={''}>
                                스튜디오 지브리 홈페이지
                                <span className={Style.link_icon}>
                                    <FiExternalLink/>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={Style.bottom_header} ref={headerWrap} >
                    <div className={Style.mainmenu}>
                        <p className={Style.menu_icon}><FiMenu/></p>
                        <nav>
                            <ul className={Style.mainmenu_list}>
                                {
                                    initMenu.map((item)=>{
                                        return (
                                            <li className={item.text===selectedMenu && Style.selected} onMouseEnter={()=>{
                                                changeMenu(item.text)
                                            }} onClick={()=>{
                                                changeMenu(item.text)
                                            }}>
                                                <Link to={item.path}>
                                                    {
                                                        item.subMenuList.length < 1 ?
                                                        <>
                                                            {item.text}
                                                        </>
                                                        :
                                                        <>
                                                            {item.text}
                                                            <ul className={Style.submenu_list} ref={(el)=>{subMenu.current[item.index]=el}}>
                                                                {
                                                                    item.subMenuList.map((item)=>{
                                                                        return (
                                                                            <li>{item.text}</li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </>
                                                    }
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                {/* <li>
                                    <Link to={'/productslist'}>전체상품</Link>
                                </li>
                                <li>MOVIE
                                    <ul className={Style.submenu_list}>
                                        <li>전체</li>
                                        <li>이웃집 토토로</li>
                                        <li>마녀배달부 키키</li>
                                        <li>센과 치히로의 행방불명</li>
                                        <li>하울의 움직이는 성</li>
                                        <li>천공의 성 라퓨타</li>
                                        <li>붉은돼지</li>
                                        <li>원령공주</li>
                                        <li>벼랑 위의 포뇨</li>
                                        <li>귀를 기울이면</li>
                                        <li>바람계곡의 나우시카</li>
                                        <li>마루 밑 아리에티</li>
                                        <li>고양이의 보은</li>
                                        <li>아야와 마녀</li>
                                        <li>그대들은 어떻게 살 것인가</li>
                                    </ul>
                                </li>
                                <li>CATEGORY
                                    <ul className={Style.submenu_list}>
                                        <li>전체</li>
                                        <li>인테리어</li>
                                        <li>Toy & Hobby</li>
                                        <li>소품</li>
                                        <li>문구</li>
                                        <li>패션</li>
                                        <li>퍼즐</li>
                                        <li>리빙</li>
                                        <li>키친</li>
                                        <li>시즌상품</li>
                                    </ul>
                                </li>
                                <li>NEW
                                    <ul className={Style.submenu_list}>
                                        <li>전체</li>
                                        <li>신상품</li>
                                    </ul>
                                </li>
                                <li>GIFT
                                    <ul className={Style.submenu_list}>
                                        <li>전체</li>
                                        <li>GIFT BAG</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className={Style.loginmenu}>
                        <nav>
                            <ul className={Style.loginmenu_list}>
                                <li>로그인</li>
                                <li>회원가입</li>
                                <li>장바구니
                                    <span className={Style.basket_circle}>1</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}
