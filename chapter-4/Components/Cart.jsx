import React, { useDeferredValue, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Redux/cartSlice";
import RestroItems from "./RestroItems";
import CartItems from "./CArtItems";

const Cart = () => {
  // const reducer = useDispatch();
  // const item = useSelector((store) => store.cart.items);
  // console.log(item);
  return (
    <div>
      Cart
      <div>
        <input placeholder="name" ></input>
        <input placeholder="password" ></input>
        <button
          // onClick={() => {
          //   reducer(clearItems());
          // }}
        >
          clear all
        </button>
      </div>
      {/* <CartItems items={item} /> */}
    </div>
  );
};

export default Cart;
