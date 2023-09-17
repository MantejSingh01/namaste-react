import { useState } from "react";
import RestroCards from "./RestoCards";
import {DATA} from "../utils/fakeData";

const Container = () => {
  const [response, setResponse] = useState(DATA);

  // Normal JS variable
  // let response = DATA;

  const topRated = () => {
    let filteredResults = response.filter(
      (itm) => parseFloat(itm.info.rating.aggregate_rating) >= 4.0
    );
    setResponse(filteredResults);
  };

  return (
    <div className="body">
      <div className="search"></div>
      <div className="top-rated-resto">
        <button className="top-rated-btn" onClick={() => topRated()}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {response.map((values, index) => (
          <RestroCards
            ind={values.info.resId}
            img={values.info.image}
            name={values.info.name}
            rating={values.info.rating.aggregate_rating}
            cft={values.info.cft}
          />
        ))}
      </div>
    </div>
  );
};
  export default Container;