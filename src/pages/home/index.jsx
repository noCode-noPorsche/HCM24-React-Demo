import { Link } from "react-router-dom";
import "./index.scss";
function HomePage() {
  return (
    <div className="home">
      <button>
        <Link to="/dev">Dev</Link>
      </button>

      <Link to="/ba">
        <button>BA</button>
      </Link>

      <button>
        <Link to="/manager">Manager</Link>
      </button>

      <button>
        <Link to="/tester">Tester</Link>
      </button>
    </div>
  );
}

export default HomePage;
