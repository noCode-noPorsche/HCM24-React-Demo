import Sider from "../../pages/sider";
import { Outlet } from "react-router-dom";
import "./index.scss";
import Header from "../header";

function LayOut() {
  return (
    <div className="lay-out">
      <Header />

      <div className="content">
        <Sider />
        <Outlet />
      </div>
    </div>
  );
}

export default LayOut;
