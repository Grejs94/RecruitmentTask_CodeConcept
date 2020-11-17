import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

import { initialState } from "./data";

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setSubtotal: (state, action) => {
      state.subtotal = action.payload;
    },
    setGrandTotal: (state, action) => {
      state.grandTotal = action.payload;
    },
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },
    setValue: (state, action) => {
      if (action.payload.value < 1) {
        return;
      }

      state.items = state.items.map((item) => ({
        ...item,
        value:
          item.id === action.payload.id
            ? parseInt(action.payload.value)
            : item.value,
      }));
    },
    incrementValue: (state, action) => {
      state.items = state.items.map((item) => ({
        ...item,
        value: item.id === action.payload ? item.value + 1 : item.value,
      }));
    },
    decrementValue: (state, action) => {
      state.items = state.items.map((item) => ({
        ...item,
        value: item.id === action.payload ? item.value - 1 : item.value,
      }));
    },
  },
});

export const {
  deleteItem,
  setSubtotal,
  setGrandTotal,
  setShipping,
  setValue,
  incrementValue,
  decrementValue,
} = basketSlice.actions;

export const selectBasket = (state) => state.basket;
export const selectBasketShippingValue = (state) =>
  state.basket.shipping.toFixed(2);

// Reselect selectors

export const selectBasketSubtotal = createSelector(
  selectBasket,
  (basketItems) =>
    basketItems.items.reduce((acc, item) => acc + item.price * item.value, 0)
);

export const selectBasketShipping = createSelector(
  selectBasketSubtotal,
  (subtotal) => {
    if (subtotal === 0) {
      return 0;
    }

    if (subtotal <= 100) {
      return 23.8;
    }

    return 0;
  }
);

export default basketSlice.reducer;
