import React, { useReducer, useState } from "react";
import { addItem } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const RestroItems = ({ items }) => {
  //   const [item, setItem] = useState([]);
  console.log(items);
  const reducer = useDispatch()

  return (
    <div>
      {items.map((values, index) => {
        return values?.category?.items.map((item, ind) => (
          <div key={item.item.id}>
            <div>
                <img src={item.item.item_image_thumb_url} alt="x"/>
                <img src={item.item.item_tag_image} alt="" />
            </div>
            <div>
            <div >{item.item.name}</div>
        
            <div>{item.item.rating?.total_rating_text}</div>
            <div>{item.item.price}</div>
            <div>{item.item.desc}</div>
            </div>
            <button onClick={()=>{reducer(addItem(item))}} >ADD</button>
          </div>
        ));
      })}
    </div>
  );
};

export default RestroItems;
