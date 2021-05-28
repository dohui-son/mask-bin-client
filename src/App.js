import logo from "./logo.svg";
import { Route } from "react-router-dom";
import Home from "./page/Home";
import AddPointQR from "./page/AddPointQR";
import Layout from "./component/Layout";
import GetmaskQR from "./page/GetMaskQR";

import "./stylesheet/global.scss";

const App = () => {
  return (
    <div className="global">
      <Layout>
        <Route path="/" component={Home} exact={true} />
        <Route path="/addpointqr" component={AddPointQR} />
        <Route path="/getmaskqr" component={GetmaskQR} />
      </Layout>
    </div>
  );
};

export default App;
