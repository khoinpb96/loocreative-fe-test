import React from "react";
import Wrapper from "./Wrapper";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Wrapper>
        <a href="/" className="logo">
          Guard Signature
        </a>
        <ul>
          <li className="test">
            <Link to="/services"> 서비스 소개</Link>
            <div className="line" />
          </li>
          <li>
            <Link to="/">법적효력·보안</Link>
            <div className="line" />
          </li>
          <li>
            <Link to="/">활용 분야</Link>
            <div className="line" />
          </li>
          <li>
            <Link to="/">이용 혜택</Link>
            <div className="line" />
          </li>
          <li>
            <Link to="/">요금 안내</Link>
            <div className="line" />
          </li>
          <li>
            <Link to="/">고객센터</Link>
            <div className="line" />
          </li>
        </ul>
        <div>
          <span>로그인</span>
          <span>회원가입</span>
        </div>
      </Wrapper>
    </nav>
  );
}
