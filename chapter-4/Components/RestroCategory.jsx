import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ZOMATO_RES } from "../utils/constant";
import RestroItems from "./RestroItems";

const RestroCategory = ({ categories }) => {
 

  return (
    <div >
      <div>
        {categories.name}

      </div>
      <span>⬇️</span>
      <RestroItems items={categories.categories}/>
    </div>
  );
};

export default RestroCategory;
