import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ZOMATO_RES } from "../utils/constant";
import Shimmer from "./Shimmer";
import RestroCategory from "./RestroCategory";

function RestoMenu(props) {
  const { resId, order, location } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetchRestoDetails();
  }, []);

  const fetchRestoDetails = async () => {
    const data = await fetch(
      ZOMATO_RES + "/" + location + "/" + resId + "/" + order
    );
    const res = await data.json();
    let finalRes =
      res?.page_data?.order?.menuList?.menus;
    console.log(finalRes);
    finalRes.pageTitle = res?.page_info?.pageTitle;
    finalRes.description = res?.page_info?.pageDescription;
    console.log(finalRes);
    setDetail(finalRes);
  };
  if (detail.length == 0) return <Shimmer />;
  return (
    <div>
      <div>{detail.pageTitle}</div>
      <div>{detail.description}</div>
      {detail.map((val, ind) => (
        
         <RestroCategory key={val.menu.id} categories={val.menu}/>
      ))}
    </div>
  );
}

export default RestoMenu;
