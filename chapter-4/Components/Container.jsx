import { useEffect, useState } from "react";
import RestroCards from "./RestoCards";
import Shimmer from "./Shimmer";
// import { DATA } from "../utils/fakeData";


const Container = () => {
  const [response, setResponse] = useState([]);

  // Normal JS variable
  // let response = DATA;

 
  useEffect(() => {
    getRestoData();
  }, []);

  const getRestoData = async () => {
    const data = await fetch("http://localhost:3000/zomato");
    const res = await data.json();

    setResponse(res);
  };

  const topRated = () => {
    let filteredResults = response.filter(
      (itm) => parseFloat(itm.info.rating.aggregate_rating) >= 4.0
    );
    setResponse(filteredResults);
  };

  if (response.length === 0) {
    return <Shimmer/>
  }

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
            key={values.info.resId}
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
