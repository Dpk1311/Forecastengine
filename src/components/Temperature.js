import "./temperature.css";
import { sunIcon , iceFlakes ,cloudIcon} from "../utils/constants";

const Temperature = ({ cityData, cityName }) => {
  if (!cityData || !cityName) return;
  const temp = cityData.main.temp;
  
  return (
    <div className="flex justify-center m-5">
      <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col items-center">
            {temp <= 0 ? iceFlakes : temp > 30 ? sunIcon : cloudIcon}
            <h1 className="text-xl font-semibold">{cityName}</h1>
          </div>
          <span className="font-bold text-8xl">{cityData.main.temp}°</span>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
