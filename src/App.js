import logo from "./logo.svg";
import { Route } from "react-router-dom";
import Home from "./page/Home";
import AddPoint from "./page/AddPoint";
import Layout from "./component/Layout";

import "./stylesheet/global.scss";

const App = () => {
  return (
    <div className="global">
      <Layout>
        <Route path="/" component={Home} exact={true} />
        <Route path="/addpoint" component={AddPoint} />
      </Layout>
    </div>
  );
};

export default App;
