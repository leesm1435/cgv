import React from "react";
import { Link } from "react-router";
import "../style/Login.css";

function Login() {
  return (
    <>
      <main>
        <section className="LP_wrap">
          <h1 className="LP_h1">로그인페이지</h1>

          <form>
            <h2 className="LP_h2">로그인</h2>

            <p>아이디</p>
            <input
              type="text"
              name="userId"
              placeholder="아이디를 입력해주세요"
              required
            />

            <p>비밀번호</p>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              required
            />

            <div className="save_idWrap">
              <input type="checkbox" id="save_id" />
              <label htmlFor="save_id">아이디 저장</label>
            </div>

            <button type="submit">로그인</button>

            <ul className="LP_accountLink">
              <li><Link to="/signup">회원가입</Link></li>
              <li><Link to="/findid">아이디 찾기</Link></li>
              <li><Link to="/findpassword">비밀번호 찾기</Link></li>
            </ul>

            <Link to="/nonemembers">비회원으로 예매조회</Link>

            {/* 간편 로그인 */}
            <div className="LP_easyTitle">
              <span></span>
              <p>간편 로그인</p>
              <span></span>
            </div>

            <ul className="LP_easyList">
              <li>
                <button type="button" className="LP_naver">naver</button>
              </li>

              <li>
                <button type="button" className="LP_kakao">kakao</button>
              </li>

              <li>
                <button type="button" className="LP_google">google</button>
              </li>
            </ul>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
