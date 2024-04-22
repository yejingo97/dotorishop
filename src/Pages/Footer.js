import React from 'react'
import Style from './css/Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={Style.footer_wrap}>
        <div className={Style.footer_top_wrap}>
            <div className={Style.footer_top}>
              <ul className={Style.footer_top_list}>
                <li>
                  <Link to={'/company'}>
                    회사소개
                  </Link>
                  </li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>매장안내</li>
                <li>고객센터</li>
                <li>입점/제휴/광고안내</li>
                <li>불법 라이센스 신고 및 제보</li>
              </ul>
              <div className={Style.footer_top_logo}>
                <img src='../images/logo_img.png' alt='로고이미지'/>
              </div>
            </div>
        </div>
        <div className={Style.footer_bottom_wrap}>
            <div className={Style.footer_bottom}>
              <p>대원미디어(주)</p>
              <p>서울특별시 용산구 한강대로23길 55 (용산역) 아이파크몰 6층 테마파크1-1 대원미디어(주)</p>
              <p>통신판매신고번호 : 2007-서울용산-04838</p>
              <p>대표자 : 정동훈</p>
              <p>사업자등록번호 : 1068103487</p>
              <p>개인정보 보호책임자 : 김기남 cs@daewonmedia.com</p>
            </div>
        </div>
    </footer>
  )
}