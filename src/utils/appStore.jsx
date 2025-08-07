import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "./cartSlice"; 

const appStore = configureStore({
    // Add your slices here
    // Example: cart: cartReducer
  reducer: {
    cart: cartReducer,
  }
});

export default appStore;