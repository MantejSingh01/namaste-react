import { USER_URL, LOGO_URL } from "./utils/constant";

const Header = () => {
  return (
    <div className="header-container">
      <img  className="logo" src={LOGO_URL} alt="Namaste Recat 🚀" />
      <input
      className="input-box"
        type="search"
        name="search"
        value=""
        placeholder="search here"
      ></input>
      <img src={USER_URL} alt="MS" className="user-icon" />
    </div>
  );
};

export default Header;
