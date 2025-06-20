import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSilce";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
