import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const customFetchFn = async (url, options) => {
    // Implement your custom fetch logic here, compatible with your SSR environment
    // For example, you might use Node.js 'http' or 'node-fetch' module in SSR environments
  
    // Example using 'node-fetch':
    const fetch = require('node-fetch');
    return fetch(url, options);
  };
  
export const ZomatoApi = createApi({
    reducerPath:"RestroApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000' ,fetchFn: customFetchFn }),
    endpoints:(builder)=>({
        getZomatoData:builder.query({
            query:()=>'/Zomato',

        })

    })
})

export const ZomatoThunk = createAsyncThunk('zomato/restaurant', async ()=>{
    const data = await fetch("http://localhost:3000/zomato");
    const res = await data.json();

console.log(res)
});



const ZomatoSlice = createSlice({
    name:"ZomatoApi",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(ZomatoThunk.pending,(state,action)=>{
            console.log(state,'pending')

        }).addCase(ZomatoThunk.fulfilled,(state,action)=>{
            console.log(state,"fulFilled")
        }).addCase(ZomatoThunk.rejected,(state,action)=>{
            console.log(state,"rejected")
        })
    }
})


export const {} = ZomatoSlice.actions;
export const  { useGetZomatoDataQuery } = ZomatoApi
export default ZomatoSlice.reducer;
