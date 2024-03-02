
const Header = () => {
  return (
    <div className="p-3 flex items-center">
      <div className="w-20 mt-2 md:m-3 md:w-24">
        <img
          className="w-full"
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png"/>
      </div>
      <div className="font-bold md:mt-0 mt-2 text-4xl md:text-6xl p-3">
        <h1>Forecast<span className="text-white">engine</span></h1>
      </div>
    </div>
  );
};

export default Header;
