import "./header.css";

const Header = () => {
  return (
    <div className="p-3 flex items-center">
      <div>
        <img
          className="w-24 m-3"
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png"/>
      </div>
      <div className="font-bold text-6xl p-3">
        <h1>Forecast<span className="text-white">engine</span></h1>
      </div>
    </div>
  );
};

export default Header;
