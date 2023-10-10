import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";

const About = (props) => {
  const contextValue = useContext(UserContext); // Access the entire context object
  console.log(contextValue.loggerInUser); 
  return (
    <div>
      About
     {contextValue.loggerInUser}
        <Outlet></Outlet>
   
    </div>
  );
};

export default About;
