import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "../stylesheet/promotionSlide.scss";
import img_for_intro from "../material/mountain.png";
import img_for_intro1 from "../material/forest.png";
import img_for_intro2 from "../material/kids.png";
import img_for_intro3 from "../material/world.png";

const Promotion = () => {
  // export default className CustomSlider extends Component {

  const settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
  };
  return (
    <div className="slider">
      <span></span>
      <Slider {...settings}>
        <div className="promotion1">
          <p></p>
          <p>마스크를 기부한 분들</p>
          <div className="title0">폐마스크 재활용 선두기업</div>

          <div className="title1">(주) 000사 마스크 1억장 기부</div>
          <div className="title1">(주) 000사 마스크 0.5억장 기부</div>
          <div className="title1">(주) 000사 마스크 200장 기부</div>
          <div className="title1">과학기술정보통신부 마스크 1억장 기부</div>
          <div className="title2"></div>
          <img src={img_for_intro1} alt="link_img" />
        </div>
        <div className="promotion2">
          <p></p>
          <p>폐마스크 재활용 협력 지자체</p>
          <div className="title0">폐마스크 재활용, 그린뉴딜</div>

          <div className="title1">00 특별시 000구 AI MASK BIN 설치</div>
          <div className="title1">00도 000시 00동 AI MASK BIN 설치</div>
          <div className="title1">00도 000시 00동 AI MASK BIN 설치</div>
          <div className="title1">00시 AI MASK BIN 50대 설치</div>
          <div className="title2"></div>
          <img src={img_for_intro3} alt="link_img" />
        </div>
        <div className="promotion3">
          <p></p>
          <p>광고1 광고1</p>
          <div className="title0">녹색소비 전용 광고</div>

          <div className="title1">녹색소비 연관 회사 광고를 게시 예정 </div>
          <div className="title1">녹색소비 연관 회사 광고를 게시 예정</div>
          <div className="title1">녹색소비 연관 회사 광고를 게시 예정</div>
          <div className="title1">녹색소비 연관 회사 광고를 게시 예정</div>
          <div className="title2"></div>
          <img src={img_for_intro} alt="link_img" />
        </div>
        <div className="promotion4">
          <p></p>
          <p>광고2 광고2</p>
          <div className="title0">친환경 용기 생산 기업</div>

          <div className="title1">친환경 제품 생산 업체 광고 예정</div>
          <div className="title1">친환경 제품 생산 업체 광고 예정</div>
          <div className="title1">친환경 제품 생산 업체 광고 예정</div>
          <div className="title1">친환경 제품 생산 업체 광고 예정</div>
          <div className="title2"></div>
          <img src={img_for_intro2} alt="link_img" />
        </div>
      </Slider>
    </div>
  );
};

export default Promotion;
