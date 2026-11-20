import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li><a href='#' title='이용약관'>이용약관</a></li>
          <li><a href='#' title='개인정보처리방침'>개인정보처리방침</a></li>
          <li><a href='#' title='청소년보호정책'>청소년보호정책</a></li>
          <li><a href='#' title='위치기반서비스이용약관'>위치기반서비스이용약관</a></li>
          <li><a href='#' title='채용'>채용</a></li>
          <li><a href='#' title='제휴/광고문의'>제휴/광고문의</a></li>
          <li></li>
        </ul>
        <address>
          <img src={'/images/Logo.png'}/>
          <p>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동) | 대표이사 : 0000 사업자등록번호 : 000-00-00000 | 대표이메일 : cjcgvmaster&#64;cj.net</p>
        </address>
      </footer>
    </>
  )
}
