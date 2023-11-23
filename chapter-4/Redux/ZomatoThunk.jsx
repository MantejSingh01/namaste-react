import { createAsyncThunk } from "@reduxjs/toolkit";

export const ZomatoThunk = createAsyncThunk('zomato/restaurant', async ()=>{
    const data = await fetch("http://localhost:3000/zomato");
    const res = await data.json();

console.log(res)
});