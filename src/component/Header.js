import React from "react";
import { Link } from "react-router-dom";
import Logo4M from "../material/LOGO4_mob.png";
import "../stylesheet/header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/mask-bin-client">
        <img className="header-logo" src={Logo4M} alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
