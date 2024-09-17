import Sider from "../../pages/sider";
import { Outlet } from "react-router-dom";
import "./index.scss";

function LayOut() {
  return (
    <div className="lay-out">
      <Sider />
      <Outlet />
    </div>
  );
}

export default LayOut;
