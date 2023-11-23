import React, { useContext, useState } from "react";
import UserContext from "../utils/userContext";

function Search(props) {
  const [textSearched, setTextSearched] = useState("");
  const { filterResto } = props;
  const {loggedInUser,setUserName} = useContext(UserContext)

  const inputFunc = (e) => {
    setTextSearched(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        data-testid = "searchbox"
        type="search"
        placeholder="Search here ..."
        value={textSearched}
        onChange={(e) => {
          inputFunc(e);
        }}
      ></input>
        <input
        className="search-input"
        type="search"
        placeholder="Search here ..."
        value={loggedInUser}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          filterResto(textSearched);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
