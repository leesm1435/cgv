import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <>
    <footer>
    <div className="f_inner">

      <div className="f_left">
      {/* 푸터 내비게이션 */}
        <nav>
          <ul className="f_lnb">
            <li><Link to="/" >이용약관</Link></li>
            <li><Link to="/" >개인정보처리방침</Link></li>
            <li><Link to="/" >청소년보호정책</Link></li>
            <li><Link to="/" >위치기반서비스이용약관</Link></li>
            <li><Link to="/" >채용</Link></li>
            <li><Link to="/" >제휴/광고문의</Link></li>
          </ul>
        </nav>
      
      <div className="f_info_wrap">
      {/* 로고 이미지 */}
        <Link to="index.html"  className="logo">
          <img src={`/images/Logo.png`} alt='' />
        </Link>
      {/* 주소 */}
      <address>
        <p>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동) | 대표이사 : 000</p>
        <p>사업자등록번호 : 000-00-00000 | 대표이메일 : cjcgvmaster@cj.net</p>
        <p className="copyright">Copyright© by CGV, All rights reserved.</p>
      </address>
      </div>
      </div>

      <div className="f_right">
      {/* SNS 아이콘 */}
      <div className="sns">
      <Link to="/"><FontAwesomeIcon icon={faFacebookF} aria-hidden="true" /></Link>
      <Link to="/"><FontAwesomeIcon icon={faInstagram} aria-hidden="true" /></Link>
      <Link to="/"><FontAwesomeIcon icon={faThreads} aria-hidden="true" /></Link>
      </div>
      {/* 패밀리사이트 */}
      <div className="family_site">
        <ul className="family_group_list"  id="familyList">
          <li className="family_group">
            <strong className="group-title">CJ그룹</strong>
            <ul>
              <li><Link to="/">CJ주식회사</Link></li>
            </ul>
          </li>

          <li className="family_group">
            <strong className="group-title">식품 &amp; 식품서비스</strong>
            <ul>
              <li><Link to="/">CJ제일제당</Link></li>
              <li><Link to="/">CJ푸드빌</Link></li>
              <li><Link to="/">CJ프레시웨이</Link></li>
            </ul>
          </li>

          <li className="family_group">
            <strong className="group-title">생명공학</strong>
            <ul>
              <li><Link to="/">CJ제일제당 BIO사업부문</Link></li>
            </ul>
          </li>

          <li className="family_group">
            <strong className="group-title">물류 &amp; 신유통</strong>
            <ul>
              <li><Link to="/">CJ대한통운</Link></li>
              <li><Link to="/">CJ대한통운 건설부문</Link></li>
              <li><Link to="/">CJ올리브영</Link></li>
              <li><Link to="/">CJ올리브네트웍스</Link></li>
              <li><Link to="/">CJ ENM 커머스부문</Link></li>
            </ul>
          </li>

          <li className="family_group">
            <strong className="group-title">엔터테인먼트 &amp; 미디어</strong>
            <ul>
              <li><Link to="/">CJ ENM 엔터테인먼트부문</Link></li>
              <li><Link to="/">CJ CGV</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      <button type="button" className="btn_family">
        <span>family site</span>
        <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" />
      </button>
    </div>
    </div>
    </footer>
    </>
  )
}
