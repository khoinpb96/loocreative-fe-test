import Wrapper from "../components/Wrapper";
import icon1 from "../assets/upload-icon-1.svg";
import icon2 from "../assets/upload-icon-2.svg";
import icon3 from "../assets/upload-icon-3.svg";
import icon4 from "../assets/upload-icon-4.svg";
import arrowIcon from "../assets/arrow-icon-1.svg";
import feature1 from "../assets/image 8.jpg";
import feature2 from "../assets/image 9.jpg";
import feature3 from "../assets/image 10.jpg";
import feature4 from "../assets/image 11.jpg";
import feature5 from "../assets/image 12.jpg";
import feature6 from "../assets/image 13.jpg";
import feature7 from "../assets/image 14.jpg";
import feature8 from "../assets/image 15.jpg";
import icon5 from "../assets/image 16.jpg";
import icon6 from "../assets/image 17.jpg";
import icon7 from "../assets/image 18.jpg";
import icon8 from "../assets/image 19.jpg";
import icon9 from "../assets/image 20.jpg";
import icon10 from "../assets/image 21.jpg";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Wrapper>
          <div style={{ maxWidth: 600 }}>
            <h2>모든 계약을 쉽고 간단하게, 빠르게 처리하세요.</h2>
            <p>
              가드 시그니처를 이용하면 어떤 계약이든 복잡한 과정없이 간편하고
              손쉽게 처리할 수 있고, 문서 처리 및 관리까지 편리하게 이용할 수
              있습니다.
            </p>
            <div className="button-wrapper">
              <p>지금 확인하기</p>
              <button />
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="intro ">
        <Wrapper>
          <div className="div1">간단하게 끝내는 계약과정</div>
          <div className="div2">
            계약서 파일을 업로드하여 서명을 요청해 보세요. 상대방은 회원가입
            없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다. 언제 어디서든
            5분만에 계약을 체결해 보세요.
          </div>
          <div className="intro__grid">
            <div>
              <img src={icon1} />
              <h5>업로드하기</h5>
              <p>필요한 계약서 파일을 업로드합니다.</p>
            </div>
            <div>
              <img src={icon2} />
              <h5>서명 요청하기</h5>
              <p>업로드한 계약서 파일에 서명 요청을 하세요.</p>
            </div>
            <div>
              <img src={icon3} />
              <h5>서명 입력하기</h5>
              <p>상대방이 간단한 절차를 통해 서명할 수 있습니다.</p>
            </div>
            <div>
              <img src={icon4} />
              <h5>계약 완료</h5>
              <p>언제 어디서든 5분 만에 계약 완료!</p>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="cta-section gray-bg">
        <Wrapper>
          <p>지금 바로 시작하세요!</p>
          <h3>설명이 필요 없는 간단한 계약 과정, 직접 경험해보세요!</h3>
          <span>
            더 살펴보기
            <img src={arrowIcon} />
          </span>
        </Wrapper>
      </section>

      <section className="features">
        <div className="row">
          <Wrapper>
            <img src={feature1} />
            <div className="col">
              <span>First</span>
              <h3>한 눈에 확인하는 계약 상태</h3>
              <p>
                계약이 진행되는 모든 과정을 실시간으로 추적해보세요. 진행 상태에
                따라 내 서명 필요, 서명 대기중, 서명 완료, 취소, 거절 등이
                조회됩니다. 상태 필터 기능을 통해 상태별로 문서를 나열하고
                관리할 수도 있습니다.
              </p>
            </div>
          </Wrapper>
        </div>
        <div className="row gray-bg">
          <Wrapper>
            <div className="col even-col">
              <span>Second</span>
              <h3>사용하던 서명 그대로</h3>
              <p>
                사용하던 사인과 도장을 PC와 모바일에서도 사용할 수 있습니다.
                사인을 직접 그리거나, 다양한 서체의 디지털 도장을 만들 수
                있습니다. 실제 도장을 카메라로 찍어서 업로드 하면 깔끔하게
                보정되며, 가드 시그니처에서 만든 사인과 도장을 계약서에 바로
                사용할 수 있습니다
              </p>
            </div>
            <img src={feature2} />
          </Wrapper>
        </div>
        <div className="row">
          <Wrapper>
            <img src={feature3} />
            <div className="col">
              <span>Third</span>
              <h3>간편한 본인인증</h3>
              <p>
                공인인증서와 OTP, Active X 등을 요구하지 않습니다. 간단하고 빠른
                휴대폰 인증과 접근 암호 설정으로 본인인증을 요청할 수 있습니다.
                본인인증 요청은 법적효력과 상관없이 선택적으로 이용 가능합니다.
              </p>
            </div>
          </Wrapper>
        </div>
        <div className="row gray-bg">
          <Wrapper>
            <div className="col even-col">
              <span>Fourth</span>
              <h3>텍스트 및 체크박스 입력</h3>
              <p>
                문서에 텍스트 박스와 체크박스를 입력해 보세요. 입력 위치, 크기,
                글자체를 자유롭게 지정하고 필수입력 여부를 설정할 수 있습니다.
                상대방에게 텍스트 입력을 요청할 수도 있습니다.
              </p>
            </div>
            <img src={feature4} />
          </Wrapper>
        </div>
      </section>
      <section className="features-2">
        <Wrapper>
          <h2>Easy and quick</h2>
          <div>
            <p>
              가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을
              진행할 수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고, 서명을
              요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증 과정없이
              서명이 가능합니다. 계약이 진행되는 모든 과정을 효과적으로 체크할
              수 있고, 언제 어디서든 5분이면 계약이 완료됩니다.
            </p>
            <p>
              가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을 체결하고
              관리하세요.
            </p>
          </div>
        </Wrapper>
      </section>
      <section className="features-3">
        <div className="row">
          <Wrapper>
            <div className="col">
              <h4>모두 시그니처만의 효과적인 기능</h4>
              <h3>템플릿 저장 및 불러오기</h3>
              <p>
                자주 사용하는 문서를 저장하고 필요할 때 마다 템플릿을 불러와
                빠르게 작업할 수 있습니다.
              </p>
              <h3>폴더 설정</h3>
              <p>
                별도로 관리가 필요한 문서들은 폴더 설정을 통해 보다 체계적으로
                관리할 수 있습니다.
              </p>
              <h3>텍스트 및 체크박스 입력</h3>
              <p>
                텍스트, 체크박스를 설정하여 문서에 텍스트를 자유롭게 입력하고
                상대방의 동의 여부를 확인할 수 있습니다.
              </p>
              <h3>다양한 파일형식 지원</h3>
              <p>
                한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG, GIF,
                BMP와 같은 이미지 파일까지 변환없이 업로드하고 사용할 수
                있습니다.
              </p>
            </div>
            <img src={feature5} />
          </Wrapper>
        </div>
        <div className="row">
          <Wrapper>
            <img src={feature6} />
            <div className="col">
              <h4>계약을 쉽고 빠르게 체결하는 방법!</h4>
              <h3>공인인증서 없는 본인인증</h3>
              <p>
                공인인증서와 ActiveX가 필요 없습니다. 이메일 인증, 휴대폰 인증,
                암호인증 설정으로 간편하게 본인인증 해 보세요.
              </p>
              <h3>카카오톡으로 서명 요청하기</h3>
              <p>
                카카오톡으로 상대방에게 서명을 요청해보세요. 상대방은 PC, 모바일
                언제 어디에서나 계약서에 서명할 수 있습니다.
              </p>
              <h3>계약 체결과 보안</h3>
              <p>
                누구나 이용하기 쉬운 직관적인 흐름으로 빠르고 신속하게 계약을
                체결하고, 이후에도 지속적으로 관리할 수 있습니다.
              </p>
              <h3>가입 없이 즉시 서명</h3>
              <p>
                계약 상대방은 번거로운 회원가입 절차 없이 간편인증 후 즉시
                서명할 수 있습니다.
              </p>
            </div>
          </Wrapper>
        </div>
        <div className="row">
          <Wrapper>
            <div className="col">
              <h4>수월하게 계약을 완료하세요</h4>
              <h3>감사추적인증서를 통한 증명</h3>
              <p>
                계약완료시 원본과 함께 발급되는 ‘감사추적인증서’로 계약 당사자의
                행위를 쉽게 증명할 수 있습니다.
              </p>
              <h3>혼자 서명하기</h3>
              <p>
                동의서, 영수증 같이 본인만 서명하는 문서에도 빠르게 서명할 수
                있습니다.
              </p>
              <h3>다양한 드라이브 업로드 지원</h3>
              <p>
                Google Drive, Dropbox, Box, One Drive에 저장되어 있 문서를 변환
                없이 바로 업로드하여 이용하세요.
              </p>
              <h3>계약 문서 관리</h3>
              <p>
                내문서함에서 계약 문서별로 내용 확인하기, 계약서 다운로드,
                공유하기, 삭제하기가 가능합니다.
              </p>
            </div>
            <img src={feature7} />
          </Wrapper>
        </div>
      </section>
      <section className="why-us gray-bg">
        <Wrapper>
          <h3>가드 시그니처를 선택하는 이유</h3>
          <p>
            많은 기업들이 가드 시그니처를 선택하는 이유, 아래 버튼을 눌러 상세한
            정보를 알아보세요.
          </p>
          <div className="row">
            <div className="col left">
              <div className="item">
                <img src={icon5} />
                <h3>쉽고 편리하게</h3>
                <p>
                  번거로운 절차 없이 누구나 빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className="item">
                <img src={icon6} />
                <h3>안전한 보안</h3>
                <p>데이터는 암호화되어 전송되고 안전한 곳에 저장됩니다.</p>
              </div>
              <div className="item">
                <img src={icon7} />
                <h3>다양한 파일형식</h3>
                <p>
                  한글, 오피스부터 PDF, JPG와 같은 이미지 파일도 변환없이 지원
                </p>
              </div>
            </div>
            <img src={feature8} />
            <div className="col right">
              <div className="item">
                <img src={icon8} />
                <h3>간단한 본인인증</h3>
                <p>공인인증서와 ActiveX없이도 본인인증을 할 수 있습니다.</p>
              </div>
              <div className="item">
                <img src={icon9} />
                <h3>효율적인 작업</h3>
                <p>
                  자주 사용하는 문서들을 저장하고 불러와 작업할 수 있습니다.
                </p>
              </div>
              <div className="item">
                <img src={icon10} />
                <h3>계약서 관리</h3>
                <p>
                  관리가 필요한 문서를 한 눈에 보고 체계적으로 관리할 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          <span className="download-btn">
            가이드 다운로드 <img src={arrowIcon} />
          </span>
        </Wrapper>
      </section>
    </main>
  );
}
