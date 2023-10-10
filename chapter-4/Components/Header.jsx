import { Link } from "react-router-dom";
import { LOGO_URL, USER_URL } from "../utils/constant";
import { useContext, useState } from "react";
import UserContext from "../utils/userContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use a boolean for login state

  const {loggedInUser,setUserName,val} = useContext(UserContext);
  console.log(loggedInUser,setUserName,val);

  

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Namaste React 🚀" />
      </div>
      <div className="nav-bar-container">
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link> {/* Updated Link */}
            </li>
          </ul>
        </div>
        <div className="login-btn">
          <button
            onClick={() => {
              setIsLoggedIn((prev) => !prev); // Toggle the login state
            }}
          >
            {isLoggedIn ? loggedInUser : loggedInUser} {/* Use a conditional rendering */}
          </button>
       
        </div>
      </div>
      {/* <div className="user-icon-container">
        <img className="user-icon" src={USER_URL} alt="MS" />
      </div> */}

    </div>
  );
};

export default Header;
