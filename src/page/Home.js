import React, { useState } from "react";
import "../stylesheet/home.scss";
import Promotion from "../component/Promotion";

import Clock from "../material/clock.png";
import moment from "moment";
import baby from "../material/baby.png";

const Home = () => {
  const nowTime = moment().format("YY-MM-DD HH:mm:ss");

  return (
    <div className="home-layout">
      <Promotion />
      <div className="time">
        <img src={Clock} alt="clock" />
        {nowTime} 기준
      </div>
      <div className="title">
        나의 마스크 <div className="green">포인트 현황</div>
      </div>
      <div className="words">
        <div className="contents">
          수령가능 마스크<div className="bolded">0 개</div>
        </div>
        <div className="line" />
        <div className="contents">
          나의 포인트<div className="bolded">8 point</div>
        </div>
        <div className="line" />
        <div className="contents">
          부족 포인트<div className="bolded">2 point</div>
        </div>
        <div className="line" />
        <div className="contents">
          누적수령 마스크<div className="bolded">5 개</div>
        </div>
        <div className="line" />
        <div className="contents">
          재활용한 마스크<div className="bolded">총29개</div>
        </div>
        <div className="line" />

        <div className="contents">
          재활용level<div className="bolded">어린이</div>
          <img src={baby} alt="babylogo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
