import { Link } from "react-router-dom";
import "./index.scss";
function Sider() {
  return (
    <div className="sider">
      <Link to="/dev">
        <button>Dev</button>
      </Link>

      <Link to="/ba">
        <button>BA</button>
      </Link>

      <Link to="/manager">
        <button>Manager</button>
      </Link>

      <Link to="/tester">
        <button>Tester</button>
      </Link>
    </div>
  );
}

export default Sider;
