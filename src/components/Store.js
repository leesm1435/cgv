import React from 'react'
import { Link } from "react-router-dom";
import '../style/Store.css'

function Store() {
  return (
    <>
      <section className='M_MC_Store'>
        <div className='M_MC_Store_inner'>
          <h2>STORE</h2>
          <ul>
            <li>
              <Link to='/'>
                <img src={`/images/Store01.png`} />
                <span>BEST</span>
              </Link>
              <p>스몰세트</p>
              <p>팝콘M1 + 음료M1</p>
              <p>9,000원</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store02.png`} />
                <span>BEST</span>
              </Link>
              <p>CGV콤보</p>
              <p>팝콘L1 + 음료M2</p>
              <p>10,500원</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store03.png`} />
              </Link>
              <p>더블콤보</p>
              <p>팝콘M2 + 음료M2</p>
              <p>13,000원</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store04.png`} />
              </Link>
              <p>라지세트</p>
              <p>팝콘L2 + 음료L2</p>
              <p>15,000원</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store05.png`} />
              </Link>
              <p>시그니처 팝콘콤보</p>
              <p>시그니처팝콘M2 + 음료M2</p>
              <p>16,000원</p>
            </li>
          </ul>
          <button type='button'>더보기</button>

          <Link to='/' className='Store_banner'>
            <img src={`/images/StoreBanner.png`} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Store