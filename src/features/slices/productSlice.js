import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    filterState: JSON.parse(sessionStorage.getItem("filterData")) || storeData,
  },
  reducers: {
    filterHandling: (state, action) => {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterState = filter;

        console.log("filter", filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filterData", saveState);
      } catch (error) {
        return error;
      }
    },
  },
});

export default productSlice.reducer;
export const { filterHandling } = productSlice.actions;