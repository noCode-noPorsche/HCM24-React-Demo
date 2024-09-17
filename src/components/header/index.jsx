import { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  // const [gender, setGender] = useState("");
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSelectGender = (e) => {
    navigate(`/dev/${e}`);
  };

  const handleSearch = () => {
    console.log(input);
  };

  return (
    <div className="header">
      <div className="search">
        <input
          type="text"
          placeholder="name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <div className="option">
        <button onClick={() => handleSelectGender("male")}>Male</button>
        <button onClick={() => handleSelectGender("female")}>Female</button>
      </div>
    </div>
  );
}

export default Header;
