import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

  name: "cart",
  initialState: {
    // Initial state of the cart
    items: [],
  },
  reducers:{
    // Action to add item to cart
    addItem: (state, action)=>{
      // Logic to add item to cart
      //mutable state
      // Reducx toolkit uses immer BTS
      state.items.push(action.payload);
    },

    // Action to remove item from cart
    removeItem: (state, action)=>{
      // Logic to remove item from cart
      state.items.pop(action.payload);
      // const index = state.item.findIndex(item => item.id === action.payload.id);
    },

    // original State = ["pizza"]
    clearCart: (state)=>{
      // Logic to clear the cart


      //RTK => Either mutate the state or return the new state
      //state.items.length = 0 ; //originalState = []


      // state.items = [];


      return { items:[] }; //this new [] will be replaced inside the original State = []
    }
  }

});

// Exporting the actions to be used in components
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Selector to get the cart items
export default cartSlice.reducer;