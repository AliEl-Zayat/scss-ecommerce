import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return {};
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: fetchFromLocalStorage,
    totalItems: 0,
    totalAmount: 0,
    deliveryCharge: 1000,
  },
  reducers: {
    addToCart(state, action) {
      const productItem = action.payload;
      // const tempItem = state.data.find((item) => item.id === action.payload.id);
      const tempCart = state.data;
      // state.data.push(action.payload);
      storeInLocalStorage(...tempCart, productItem);
    },
    removeFromCart(state, action) {
      const tempCart = state.data.filter((item) => item.id !== action.payload);
      state.data = tempCart;
      storeInLocalStorage(state.data);
    },
    clearCart(state, action) {
      state.data = [];
      storeInLocalStorage(state.data);
    },
    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const { getCartTotal, clearCart, removeFromCart, addToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
