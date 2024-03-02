import { sunIcon , iceFlakes ,cloudIcon} from "../utils/constants";

const Temperature = ({ cityData, cityName }) => {
  if (!cityData || !cityName) return;
  const temp = cityData.main.temp;
  
  return (
    <div className="flex justify-center m-5">
      <div className="max-w-md p-8 mx-auto">
        <div className="flex justify-between items-center md:space-x-8 space-x-4">
          <div className="flex flex-col items-center">
            {temp <= 0 ? iceFlakes : temp > 30 ? sunIcon : cloudIcon}
            <h1 className=" text-2xl md:text-3xl font-semibold">{cityName}</h1>
          </div>
          <span className="font-bold md:text-8xl text-7xl">{cityData.main.temp}°</span>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
