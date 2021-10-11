import React from "react";
import Wrapper from "./Wrapper";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import menuClose from "../assets/menu-close.svg";

export default function Navbar() {
  const $ = document.querySelector.bind(document);

  return (
    <nav className="navbar">
      <Wrapper>
        <a href="/" className="logo">
          Guard Signature
        </a>
        <ul className="navbar__list">
          <li>
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
        <div className="navbar__login">
          <span>로그인</span>
          <span>회원가입</span>
        </div>
        <img
          src={menu}
          alt="navbar mobile menu"
          className="navbar__menu--mobile"
          onClick={() => {
            $(".navbar--mobile").classList.add("active");
          }}
        />
      </Wrapper>
      <div className="navbar--mobile">
        <img
          src={menuClose}
          alt=""
          className="menu-close"
          onClick={() => {
            $(".navbar--mobile").classList.remove("active");
          }}
        />
        <ul className="navbar--mobile__list">
          <li>
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
        <div className="navbar--mobile__login">
          <span>로그인</span>
          <span>회원가입</span>
        </div>
      </div>
    </nav>
  );
}
