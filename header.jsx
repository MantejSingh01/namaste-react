import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <img  className="logo" src="https://namastedev.com/namaste-react/assets/img/small-logo.png" alt="Namaste Recat 🚀" />
      <input
      className="input-box"
        type="search"
        name="search"
        value=""
        placeholder="search here"
      ></input>
      <img src="https://yt3.ggpht.com/yti/AOXPAcWeJWIMnGxkFrNzOOEVpHpcAepEtVK1z1rlqSQq=s88-c-k-c0x00ffffff-no-rj-mo" alt="MS" className="user-icon" />
    </div>
  );
};

export default Header;
