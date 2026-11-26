
import React from 'react';
import { Link } from "react-router-dom";
import '../style/MainContent.css'

export default function MainContent() {

  // 영화 이미지 및 설명 목록
  const movieList = [
    {
      id: 1,
      image: '/images/MainPic01.jpg',
      description: `“듄을 지배하는 자가 우주를 지배한다!” 10191년, 아트레이데스 가문의 후계자인 폴(티모시 샬라메)은 시공을 초월한 존재이자 전 우주를 구원할 예지된 자의 운명을 타고났다. 그리고 어떤 계시처럼 매일 꿈에서 아라키스 행성에 있는 한 여인을 만나는데...`
    },
    {
      id: 2,
      image: '/images/MainPic02.jpg',
      description: '어느 날, 광장에서 쉬고 있던 치이카와와 가르마 앞에 얼굴에 전단지를 붙인 토끼가 나타난다. 그곳엔 “특별한 섬으로의 초대”라는 글귀가 적혀 있는데... “섬에서 간단한 토벌만 해도 보수 100배!”'
    },
    {
      id: 3,
      image: '/images/MainPic03.jpg',
      description: '5000:1의 경쟁률, 제한시간 2시간, 단 1명의 합격자치열한 경쟁률을 뚫고 최종면접에 오른 6명의 지원자. 한 달간 팀 토론을 준비하며 전원 합격을 꿈꾸던 이들에게 제한시간 2시간 동안 단 1명의 합격자를 직접 뽑으라는 과제가 주어지는데...'
    },
    {
      id: 4,
      image: '/images/MainPic04.jpg',
      description: '이제껏 본 적 없는 ‘씽’나는 ‘냥’리법석이 펼쳐진다! 기상천외한 마법으로 소동을 일으키는 ‘모자 쓴 고양이’에게 주어진 특급 임무! 잃어버린 ‘돌림시계’를 되찾기 위해 떠나는 새로운 모험!'
    }
  ];

  return (
    <>
      <section className='MainContent'>

        <div className='M_MC_blind'></div>

        <h2>메인콘텐츠 영역</h2>

        {/* 콘텐츠1번 영화 목록 */}
        <ul className='M_MC_MovieList'>
          {movieList.map((movie) => (
            <li key={movie.id}>

              <div className='movieImg'>
                <img src={movie.image} alt={`영화 포스터 ${movie.id}`} />

                {/* 이미지 호버 시 설명 */}
                <div className='movieOverlay'>
                  <p>{movie.description}</p>
                </div>

              </div>

              <button>예매하기</button>

            </li>
          ))}
        </ul>

        {/* 영화 더보기, 빠른 예매 */}
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
