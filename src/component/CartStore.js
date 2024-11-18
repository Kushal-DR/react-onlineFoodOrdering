import { createSlice} from "@reduxjs/toolkit"

const cartslice = createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        removeItem:(state)=>{
            state.item.pop();
        },
        clearCart:(state)=>{
            state.item.length=0;
        },
        
    },
    
});

export const {addItem,removeItem,clearCart}=cartslice.actions;
export default cartslice.reducer;