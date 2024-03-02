import { useRef, useState } from "react";
import Temperature from "./Temperature";
import { API_KEY } from "../utils/constants";

const Body = () => {
  const [Temp, setTemp] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [errMsg, setErrMsg] = useState();
  //  console.log(Data);
  const name = useRef(null);
  const handleClick = () => {
    // console.log(name.current.value);
    setCityName(null);
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
    if (json.length) {
      console.log("cityname", json);
      setCityName(json[0].name);
      weatherApi(json);
      setErrMsg("");
    } else {
      setErrMsg("No Data Found");
    }
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
      <div className="welcome-text flex justify-center md:m-5 m-7">
        <h1 className="md:w-8/12 md:font-medium font-semibold text-2xl  md:text-4xl">
          Welcome to Forecastengine, your ultimate destination for up-to-date
          weather information.
        </h1>
      </div>
      <input
        className=" border-style:solid w-64 rounded-lg m-3 h-9 px-3"
        placeholder="Enter your city"
        ref={name}
        type="text"
      ></input>
      <button
        className="bg-black text-gray-400 rounded-lg w-16 md:h-8 h-9"
        onClick={handleClick}
      >
        Search
      </button>

      <Temperature cityName={cityName} cityData={Temp} />
      <p className="font-medium text-xl m-6">{errMsg}</p>
    </div>
  );
};

export default Body;
