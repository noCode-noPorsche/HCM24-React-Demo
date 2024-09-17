import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../components/profile-user";
import "./index.scss";

function Manager() {
  const [managerList, setManagerList] = useState([]);
  const fetchManagerListData = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=20&seed=manager"
      );
      const results = response.data.results;
      const info = response.data.info;
      const combinedData = results.map((user) => ({ ...user, ...info }));
      setManagerList(combinedData);
      console.log(managerList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchManagerListData();
  }, []);
  return (
    <div className="manager">{managerList.map((user) => Profile(user))}</div>
  );
}

export default Manager;
