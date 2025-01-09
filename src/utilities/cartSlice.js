import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items = []
        },
        removeItem:(state,action)=>{
            console.log(action.payload);
            
            const newArr = state.items.filter(elm=>elm.idMeal!==action.payload)
            state.items = newArr;
            console.log(state.items);
            // state.items.pop()   
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer
