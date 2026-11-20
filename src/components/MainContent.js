import React from 'react'

export default function MainContent() {
  return (
    <>
      <section>
        <h2>메인콘텐츠 영역</h2>
        {/* 콘텐츠1번 영화 목록 */}
        <ul class='MainContentPosterList'> 
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
        <ul>
          <li>
            <a href='movies.html' title='영화 더보기'>영화 더보기</a>
          </li>
          <li>
            <a href='tickets.html' title='빠른예매'>빠른예매</a>
          </li>
        </ul>

      </section>
    </>
  )
}
