import "./body.css";
import { useEffect, useRef, useState } from "react";
import MockData from "./MockData";
import Temperature from "./Temperature";
import { API_KEY } from "../utils/constants";

const Body = () => {
  const [Temp, setTemp] = useState(null);
  const [cityName,setCityName] = useState(null)
  //  console.log(Data);
  const name = useRef(null);
  const handleClick = () => {
    // console.log(name.current.value);
    const city = name.current.value;
    cityApi(city);
  };
  const cityApi = async (city) => {
    // console.log("cityApi",city);
    const data = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=5&appid=" +
        API_KEY
    );
    const json = await data.json();
    console.log("cityname",json);
    setCityName(json[0].name)
    weatherApi(json);
  };
  const weatherApi = async (cordinates) => {
    if (cordinates === null) return;
    // console.log("WeatherAPI",cordinates[0]);
    const lat = cordinates[0].lat;
    const lon = cordinates[0].lon;

    // console.log("lat and lon",lat,lon);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const json = await data.json();
    // console.log("city data",json);
    setTemp(json);
  };

  return (
    <div className="body">
      <div className="welcome-text">
        <h1>Welcome To DpkWeatherApp</h1>
      </div>
      <p>Get the latest Temperature Info of your City</p>
      <input ref={name} type="text"></input>
      <button className="search-btn" onClick={handleClick}>
        Search
      </button>

      <Temperature cityName={cityName}  cityData={Temp} />
    </div>
  );
};

export default Body;
