import { useEffect, useState } from "react";
import RestroCards from "./RestoCards";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";
import useRestoData from "../utils/useRestoData";
import withPromotedLabel from "../utils/withPromotedLabel";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useGetZomatoDataQuery } from "../Redux/zomatoSlice";
import { useSelector } from "react-redux";

// import { DATA } from "../utils/fakeData";

const Container = () => {
  // Normal JS variable
  // let response = DATA;
  const [response, setResponse] = useRestoData();
  // const {data, error, isLoading} = useGetZomatoDataQuery();
  const value = useSelector((state)=> state.ZomatoApi)

  // console.log(data,error,isLoading,"=================")
  // console.log(value,"-===--")

  // getting data from userContext Api

  const {loggedInUser,setUserName,val} = useContext(UserContext);

  // passing value to HOF
  const NewPromotedRestroComp = withPromotedLabel(RestroCards);

  const filterResto = (text) => {
    if (text == "") return;

    let val = response.filter((item, index) => {
      return item?.info?.name.toLowerCase().includes(text.toLowerCase());
    });
    if (val.length) setResponse(val);
    // else will show toast
  };

  const topRated = () => {
    let filteredResults = response.filter(
      (itm) => parseFloat(itm.info.rating.aggregate_rating) >= 4.0
    );
    setResponse(filteredResults);
  };

  if (response.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search"></div>
      <div className="top-rated-resto">
        <button className="top-rated-btn" onClick={() => topRated()}>
          Top Rated Restaurants
        </button>
        <Search filterResto={filterResto} />
      </div>

      <div className="res-container">
        {response.map((values, index) => (
          <Link
            to={"/restoDetail" + values.cardAction.clickUrl}
            key={values.info.resId}
            className="link-custom-style"
          >
            {values.isPromoted == true ? (
              <NewPromotedRestroComp
                ind={values.info.resId}
                img={values.info.image}
                name={values.info.name}
                rating={values.info.rating.aggregate_rating}
                cft={values.info.cft}
              />
            ) : (
              <RestroCards
              
                ind={values.info.resId}
                img={values.info.image}
                name={values.info.name}
                rating={values.info.rating.aggregate_rating}
                cft={values.info.cft}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Container;
