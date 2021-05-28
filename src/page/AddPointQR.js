import React from "react";
import QR from "../material/qr.png";
import "../stylesheet/addpointqr.scss";

const AddPointQR = () => {
  return (
    <div className="point-qr-layout">
      <p/>
      <h2>AI MASK BIN 기계에</h2>
      <h2>QR CODE를 인식해주세요</h2>
      <img src={QR} alt="fakeQR" />
      <h3>AI MASK BIN입구가 열려요.</h3>
      <div className="b">폐마스크 외 쓰레기 폐기 금지</div>
      
    </div>
  );
};

export default AddPointQR;
