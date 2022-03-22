function Footer() {
  return (
    <footer>
      <footer className="footerSection">
        <section className="bodySection">
          <section className="navWrapper">
            <nav className="leftNav">
              <span>제휴문의</span>
              <span>이용약관</span>
              <span>개인정보처리방침</span>
            </nav>
            <nav className="rightNav">
              <span>이용안내</span>
              <span>공지사항</span>
            </nav>
          </section>
          <section className="mainBanner">MIGONG && INTERIOR DESIGIN</section>
          <section className="companyInfo">
            <section className="firstInfoSection">
              <span className="infoKey">상호</span>
              <span className="infoValue">(주)미공의장</span>
              <span className="infoKey">대표자명</span>
              <span className="infoValue">원상철</span>
              <span className="infoKey">주소</span>
              <span className="infoValue">
                부산광역시 해운대구 마린시티 3로 1, 선플라자 818호
              </span>
              <span className="infoKey">대표번호</span>
              <span className="infoValue">010-8794-6767 / 051-731-0273 </span>
            </section>
            <section className="secondInfoSection">
              <span className="infoKey">사업자등록번호</span>
              <span className="infoValue"> - </span>
              <span className="infoKey">Email</span>
              <span className="infoValue">migong2121@naver.com</span>
            </section>
            <section className="lastInfoSection">
              <span className="infoKey">호스팅서비스 제공자</span>
              <span className="infoValue">Lee Jun Hyeok</span>
              <span className="infoKey">구매안전서비스</span>
              <span className="infoValue">이용확인</span>
            </section>
          </section>
        </section>
      </footer>
    </footer>
  );
}

export default Footer;
