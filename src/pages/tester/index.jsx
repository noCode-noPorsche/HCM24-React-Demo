import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../components/profile-user";
import "./index.scss";

function Tester() {
  const [testerList, setTesterList] = useState([]);
  const fetchTesterListData = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=20&seed=tester"
      );
      const results = response.data.results;
      const info = response.data.info;
      const combinedData = results.map((user) => ({ ...user, ...info }));
      setTesterList(combinedData);
      console.log(testerList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTesterListData();
  }, []);
  return (
    <div className="tester">{testerList.map((user) => Profile(user))}</div>
  );
}

export default Tester;
