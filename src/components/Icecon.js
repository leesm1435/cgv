import React from 'react'
import { Link } from "react-router-dom";
import '../style/Icecon.css'

function Icecon() {

  return (
    <>
      <section className='M_MC_Icecon'>
        <div className='M_MC_Icecon_inner'>
          <div className='M_MC_IceconLeft'>
            <h2>ICE CON</h2>
            <figure>
              <Link to='/'>
                <span>S</span>
                <img src={`/images/Icecon01.png`} />
              </Link>
            </figure>
          </div>

          <div className='M_MC_IceconRight'>
            <p className='p01'># SPORTS</p>
            <h3>2026 KBO 한국시리즈 4차전 - KT 위즈 vs 삼성 라이온즈</h3>
            <p>2026 신한 SOL KBO 포스트시즌<br />CGV 극장 단독 생중계!</p><br />
            <p>가을야구의 피날레! &lt;한국시리즈&gt;</p><br />
            <p>트로피를 향한 최후의 승부,<br />마지막까지 뜨겁게 CGV에서 함께 응원하자!</p>

            <ul>
              <li>
                <Link to='/'>
                  <span className='s01'>C</span>
                  <img src={`/images/Icecon02.png`} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <span className='s01'>C</span>
                  <img src={`/images/Icecon03.png`} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <span className='s02'>M</span>
                  <img src={`/images/Icecon04.png`} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <span className='s02'>M</span>
                  <img src={`/images/Icecon05.png`} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Icecon