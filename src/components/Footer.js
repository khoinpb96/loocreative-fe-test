import "../styles/Footer.scss";
import Wrapper from "../components/Wrapper";
import icon11 from "../assets/image 22.jpg";
import icon12 from "../assets/image 23.jpg";
import icon13 from "../assets/image 24.jpg";
export default function Footer() {
  return (
    <footer>
      <Wrapper>
        <div>
          <ul>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>고객센터</li>
          </ul>
          <p className="contact">
            (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
            356-00-00000 이메일 : test0101@guardsignature.co.kr｜ FAX :
            070-0000-0000 서울특별시 강남구 도산대로 8길 17 3층
          </p>
          <p>Copyright© GUARDSIGNATURE All rights reserved.</p>
        </div>
        <div className="social">
          <img src={icon13} />
          <img src={icon12} />
          <img src={icon11} />
        </div>
      </Wrapper>
    </footer>
  );
}
