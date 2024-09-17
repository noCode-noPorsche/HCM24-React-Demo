import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../components/profile-user";
import "./index.scss";

function BusinessAnalyst() {
  const [BAList, setBAList] = useState([]);
  const fetchBAListData = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=20&seed=ba"
      );
      const results = response.data.results;
      const info = response.data.info;
      const combinedData = results.map((user) => ({ ...user, ...info }));
      setBAList(combinedData);
      console.log(BAList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBAListData();
  }, []);
  return (
    <div className="business-analyst">
      {BAList.map((user) => Profile(user))}
    </div>
  );
}

export default BusinessAnalyst;
