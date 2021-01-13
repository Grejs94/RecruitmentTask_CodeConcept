import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./data";
import initialProducts from "data/products";
import initialCardProducts from "data/cart_products";

export const basketSlice = createSlice({
  name: "shoppingPage",
  initialState: initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.products = action.payload;
    },
    setCardProductsData: (state, action) => {
      state.cart_products = action.payload;
    },
    setBasketProducts: (state, action) => {
      state.basketProducts = action.payload;
    },
    incrementValue: (state, action) => {
      state.basketProducts = state.basketProducts.map((item) => ({
        ...item,
        quantity:
          item.id === action.payload ? item.quantity + 1 : item.quantity,
      }));
    },
    decrementValue: (state, action) => {
      state.basketProducts = state.basketProducts.map((item) => ({
        ...item,
        quantity:
          item.id === action.payload ? item.quantity - 1 : item.quantity,
      }));
    },
    deleteItem: (state, action) => {
      state.basketProducts = state.basketProducts.filter(
        (item) => item.id !== action.payload
      );
    },
    setValue: (state, action) => {
      if (action.payload.value < 1) {
        return;
      }

      state.basketProducts = state.basketProducts.map((item) => ({
        ...item,
        quantity:
          item.id === action.payload.id
            ? parseInt(action.payload.value)
            : item.quantity,
      }));
    },
    sumTheOrder: (state, action) => {
      const subtotal = state.basketProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const shipping = subtotal > 100 ? 0 : 23.8;

      const grandTotal = subtotal + shipping;

      state.subtotal = subtotal;
      state.shipping = shipping;
      state.grandTotal = grandTotal;
    },
    setOrderCompleted: (state, action) => {
      state.orderCompleted = action.payload;
    },
  },
});

export const {
  setProductsData,
  setCardProductsData,
  setBasketProducts,
  incrementValue,
  decrementValue,
  deleteItem,
  setValue,
  sumTheOrder,
  setOrderCompleted,
} = basketSlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(setProductsData(initialProducts));
  dispatch(setCardProductsData(initialCardProducts));
};

export const shoppingPage = (state) => state.shoppingPage;
export const products = (state) => state.shoppingPage.products;
export const cartProducts = (state) => state.shoppingPage.cart_products;
export const basketProducts = (state) => state.shoppingPage.basketProducts;
export const shipping = (state) => state.shoppingPage.shipping;
export const selectBasketSubtotal = (state) => state.shoppingPage.subtotal;
export const selectBasketShipping = (state) => state.shoppingPage.shipping;
export const selectOrderCompleted = (state) =>
  state.shoppingPage.orderCompleted;

export default basketSlice.reducer;
