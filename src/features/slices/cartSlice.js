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
            cartProd.id === product.selected.id &&
            cartProd.size === product.size &&
            cartProd.color === product.color
        );
        if (exists) {
          exists.amount++;
          exists.totalPrice += product.selected.price;
          state.totalAmount++;
          state.totalPrice += product.selected.price;
        } else {
          state.cart.push({
            id: product.selected.id,
            name: product.selected.name,
            text: product.selected.text,
            color: action.payload.color,
            price: product.selected.price,
            img: product.selected.img,
            size: product.size,
            amount: 1,
            totalPrice: product.selected.price,
          });
          state.totalAmount++;
          state.totalPrice += product.selected.price;
        }
      } catch (err) {
        return err;
      }
    },

    removeFromCart: (state, action) => {
      const product = action.payload;

      try {
        const exists = state.cart.find(
          (cartProd) =>
            cartProd.id === product.id &&
            cartProd.size === product.size &&
            cartProd.color === product.color
        );

        if (exists.amount === 1) {
          state.cart = state.cart.filter(
            (item) =>
              item.id !== product.id ||
              item.size !== product.size ||
              item.color !== product.color
          );
          state.totalAmount--;
          state.totalPrice -= product.price;
        } else {
          exists.amount--;
          exists.totalPrice -= product.price;
          state.totalAmount--;
          state.totalPrice -= product.price;
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
