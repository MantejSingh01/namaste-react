import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../Redux/cartSlice";

function CartItems(props) {
  const { items } = props;
  console.log(items);
  const dispatch = useDispatch();
  return (
    <div>
      {items.map((val, index) => (
        <div key={val.item.id+index}>
          <div>{val.item.name}</div>
          <div>{val.item.price}</div>
          <div>{val.item.desc}</div>
          <img src={val.item.item_image_thumb_url} alt="x"></img>
          <button onClick={()=>{dispatch(removeItem(val))}}>X</button>
        </div>
      ))}
    </div>
  );
}

export default CartItems;