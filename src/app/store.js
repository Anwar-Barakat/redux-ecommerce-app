import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../features/slices/sliderSlice";
import productSlice from "../features/slices/productSlice";
export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    products: productSlice,
  },
});
