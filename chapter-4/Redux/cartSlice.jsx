import { createSlice,current, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:{
            reducer:(state,action)=>{
                console.log(current(state))
            console.log(action.payload)
            state.items.push(action.payload)
        }
        
    },
        removeItem:(state,action)=>{
            console.log(current(state.items), action )
            state.items =  state.items.filter((itm,ind)=>{ return action.payload.item.id != itm.item.id});

            
        },
        clearItems:(state)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearItems} = cartSlice.actions;
export default cartSlice.reducer;
