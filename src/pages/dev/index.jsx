import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../components/profile-user";
import "./index.scss";

function Developer() {
  const [devList, setDevList] = useState([]);
  const fetchDevelopersList = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=20&seed=dev"
      );
      const results = response.data.results;
      const info = response.data.info;
      const combinedData = results.map((user) => ({ ...user, ...info }));
      setDevList(combinedData);
      console.log(devList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDevelopersList();
  }, []);
  return (
    <div className="developer">{devList.map((user) => Profile(user))}</div>
  );
}

export default Developer;
