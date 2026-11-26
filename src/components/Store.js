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
              </Link>
              <p>스몰세트</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store02.png`} />
              </Link>
              <p>CGV콤보</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store03.png`} />
              </Link>
              <p>더블콤보</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store04.png`} />
              </Link>
              <p>라지세트</p>
            </li>
            <li>
              <Link to='/'>
                <img src={`/images/Store05.png`} />
              </Link>
              <p>시그니처 팝콘콤보</p>
            </li>
          </ul>
          <button type='button'>더보기</button>
        </div>
      </section>
    </>
  )
}

export default Store