import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../components/profile-user";
import "./index.scss";
import { useParams } from "react-router-dom";
import FilterGender from "../../components/filter-gender";

function Developer() {
  const [devList, setDevList] = useState([]);
  const { gender } = useParams(); // Lấy gender từ URL

  const fetchDevelopersList = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=20&seed=dev"
      );
      const results = response.data.results;
      const info = response.data.info;
      const combinedData = results.map((user) => ({ ...user, ...info }));
      setDevList(combinedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDevelopersList();
  }, []);

  const filterList = FilterGender(devList, gender);
  console.log(filterList);

  return (
    <div className="developer">{filterList.map((user) => Profile(user))}</div>
  );
}

export default Developer;
