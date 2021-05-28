import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "../stylesheet/promotionSlide.scss";
import img_for_intro from "../material/banner2.png";

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
            
          <h2>마스크를 기부한 분들</h2>
          <div className="title1">폐마스크 재활용 선두기업</div>
          <div className="title2">000사 마스크 1억장 기부</div>
          <img src={img_for_intro} alt="link_img" />
          <p></p>
        </div>
        <div className="promotion2">
          <p>마스크를 기부한 분들</p>
          <div className="title1">폐마스크 새활용 선두기업</div>
          <div className="title2">000사 마스크 1억장 기부 </div>
          <img src={img_for_intro} alt="link_img" />
        </div>
        <div className="promotion3">
          <p>광고1</p>
          <div className="title1">대학생들의</div>
          <div className="title2">가능성을 </div>
          <img src={img_for_intro} alt="link_img" />
        </div>
        <div className="promotion4">
          <p>광고2</p>
          <div className="title1">광고2광고2</div>
          <div className="title2">광고2광고2 </div>
          <img src={img_for_intro} alt="link_img" />
        </div>
      </Slider>
    </div>
  );
};

export default Promotion;
