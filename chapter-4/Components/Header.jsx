import { LOGO_URL, USER_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header-container">
        <div className="logo-conatiner">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Namaste React 🚀"
          />
        </div>
  
        {/* <input
          className="input-box"
          type="search"
          name="search" 
          value=""
          placeholder="search here"
        ></input> */}
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="user-icon-container">
          <img
            className="user-icon"
            src={USER_URL}
            alt="MS"
          />
        </div>
      </div>
    );
  };

  export default Header;