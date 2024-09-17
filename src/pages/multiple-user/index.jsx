import axios from "axios";
import { useEffect, useState } from "react";
import "./index.scss";
import Profile from "../../components/profile-user";

function Multiple() {
  const [multipleList, setMultipleList] = useState([]);

  const fetchMultipleUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=20");
      const results = response.data.results;
      const info = response.data.info;
      const combinedData = results.map((user) => ({ ...user, ...info }));
      console.log(combinedData);
      setMultipleList(combinedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMultipleUsers();
  }, []);

  return (
    <>
      <div className="multiple">
        {multipleList.map((user) => Profile(user))}
      </div>
    </>
  );
}

export default Multiple;
