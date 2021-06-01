import React from "react";
import { withRouter } from "react-router-dom";
import QR from "../material/qr.png";
import "../stylesheet/getmaskqr.scss";

const GetMaskQR = ({ history }) => {
  setTimeout(() => {
    history.push("/");
  }, 10000);
  return (
    <div className="mask-qr-layout">
      <p />
      <h2>AI MASK BIN 자판기에</h2>
      <h2>QR CODE를 인식해주세요</h2>
      <img src={QR} alt="fakeQR" />
      <h3>새로운 마스크를 드립니다.</h3>
      <div className="b">00회사 기부 마스크</div>
      <div className="b">10초후 QR 만료</div>
    </div>
  );
};

export default GetMaskQR;
