import React from 'react'
import '../style/Reset.css'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
    <h1>
      <Link to="#" title="상단로고">
        <img src="/images/CGV.png" />
      </Link>
    </h1>
      {/* //////////////////////////////// */}
    <nav className="gnb">
      <ul>
        <li>
          <Link to="상영정보">상영정보</Link>
          <ul className="sub">
            <li>
              <Link to="submenu">서브메뉴</Link>
            </li>
            <li><Link to="submenu">서브메뉴</Link></li>
            <li><Link to="submenu">서브메뉴</Link></li>
          </ul>
      </li>
      <li>
        <Link to="예매">예매</Link>
        <ul className="sub">
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
        </ul>
      </li>
      <li>
        <Link to="극장">극장</Link>
        <ul className="sub">
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
        </ul>
      </li>
      <li>
        <Link to="스토어">스토어</Link>
        <ul className="sub">
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
        </ul>
      </li>
      <li>
        <Link to="이벤트">이벤트</Link>
        <ul className="sub">
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
          <li><Link to="submenu">서브메뉴</Link></li>
        </ul>
      </li>
    </ul>
  </nav>
      {/* //////////////////////////////// */}

  <ul className="lnb">
    <li><Link to="로그인">로그인</Link></li>
    <li><Link to="회원가입">회원가입</Link></li>
    <li><Link to="고객센터">고객센터</Link></li>
  </ul>
      {/* //////////////////////////////// */}
    <div className='iconBox'>

    <div className="searchbox">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" id="search" />

    </div>
    <FontAwesomeIcon icon={faUser} />
    </div>
    </header>
    </>
  )
}
      