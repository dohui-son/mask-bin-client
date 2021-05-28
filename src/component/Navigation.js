import React from "react";
import { Link } from "react-router-dom";
import Addpoint3 from "../material/addpoint3.png";

const Navigation = () => {
  return (
    <div>
      <Link to="/addpoint">
        <img className="ADDPOINT" src={Addpoint3} alt="button" />
      </Link>
    </div>
  );
};

export default Navigation;
