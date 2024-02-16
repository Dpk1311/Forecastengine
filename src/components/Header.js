import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://i.pinimg.com/736x/4d/2c/73/4d2c73d8d33f2a7b4fa9ae44668e66e9.jpg"
        />
      </div>
      <div className="name">
        <h1>DpkWeatherApp</h1>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
