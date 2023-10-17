import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../features/slices/sliderSlice";
import productSlice from "../features/slices/productSlice";
import cartSlice from "../features/slices/cartSlice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    products: productSlice,
    cart: cartSlice,
  },
});
