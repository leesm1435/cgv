import React from 'react';
import { Link } from "react-router-dom";
import '../style/MainContent.css'

export default function MainContent() {
  return (
    <>
      <section classNameName='MainContent'>
        <h2>메인콘텐츠 영역</h2>
        {/* 콘텐츠1번 영화 목록 */}
        <ul className='M_MC_MovieList'> 
          <li>
            <img src={'/images/MainPic01.jpg'} />
            <button>예매하기</button>
          </li>
          <li>
            <img src={'/images/MainPic02.jpg'} />
            <button>예매하기</button>
          </li>
          <li>
            <img src={'/images/MainPic03.jpg'} />
            <button>예매하기</button>
          </li>
          <li>
            <img src={'/images/MainPic04.jpg'} />
            <button>예매하기</button>
          </li>
        </ul>
        
        {/* 콘텐츠1번 영화 더보기, 빠른예매 */}
        <ul className='M_MC_QuickBtn'>
          <li>
            <Link to='/'>영화 더보기</Link>
          </li>
          <li>
            <Link to='/'>빠른 예매</Link>
          </li>
        </ul>

      </section>
    </>
  )
}
