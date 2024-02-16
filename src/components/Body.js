import "./body.css";
import { useState } from "react";
import MockData from "./MockData";
import Temperature from "./Temperature";

const Body = () => {
  // const [Data, setMockData] = useState([MockData]);
  //  console.log(Data);
  return (
    <div className="body">
      <div className="welcome-text">
        <h1>Welcome To DpkWeatherApp</h1>
      </div>
      <p>Get the latest Temperature Info of your City</p>
      <input type="text"></input>
      <button className="search-btn">Search</button>
      {MockData.map((city) => (
        <Temperature key={city.id} cityData={city} />
      ))}
    </div>
  );
};

export default Body;
