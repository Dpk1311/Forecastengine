import { useRef, useState } from "react";
import Temperature from "./Temperature";
import { API_KEY } from "../utils/constants";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1709450047163.json";
import notFoundAnimation from "../assets/not-found1.json"

const Body = () => {
  const [Temp, setTemp] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const name = useRef(null);
  const handleClick = () => {
    setErrMsg(false)
    setLoading(true);
    setCityName(null);
    const city = name.current.value;
    cityApi(city);
  };
  const cityApi = async (city) => {
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
      setLoading(false);
    } else {
      setLoading(false);
      setErrMsg(true);
    }
  };
  const weatherApi = async (cordinates) => {
    if (cordinates === null) return;
    const lat = cordinates[0].lat;
    const lon = cordinates[0].lon;
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const json = await data.json();
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

      {loading ? (
        <div className="flex items-center justify-center">
          <Lottie className="w-32" animationData={animationData} />
        </div>
      ) : (
        <Temperature cityName={cityName} cityData={Temp} />
      )}
       <div className="flex justify-center">
       {errMsg ? <Lottie className="w-48 m-5" animationData={notFoundAnimation}/> : ''}
        </div>
    </div>
  );
};

export default Body;
