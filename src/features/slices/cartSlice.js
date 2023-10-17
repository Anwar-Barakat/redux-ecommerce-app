import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: null,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      try {
        const exists = state.cart.find(
          (cartProd) =>
            cartProd.id === product.id &&
            cartProd.size === product.size &&
            cartProd.color === product.color
        );
        if (exists) {
          exists.amount++;
          exists.totalPrice += product.price;
          state.totalAmount++;
          state.totalPrice += product.price;
        } else {
          state.cart.push({
            id: product.id,
            name: product.name,
            color: product.color,
            price: product.price,
            size: product.size,
            amount: 1,
            totalPrice: product.price,
          });
          state.totalAmount++;
          state.totalPrice += product.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
