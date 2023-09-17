

const Header = () => {
    return (
      <div className="header-container">
        <div className="logo-conatiner">
          <img
            className="logo"
            src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
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
            src="https://yt3.ggpht.com/yti/AOXPAcWeJWIMnGxkFrNzOOEVpHpcAepEtVK1z1rlqSQq=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="MS"
          />
        </div>
      </div>
    );
  };

  export default Header;