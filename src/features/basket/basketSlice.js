import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    itemValue: 2,
    unitPrice: 11.9,
    subtotal: 35.7,
    shipping: 23.8,
    basketVisible: true,
  },
  reducers: {
    increseValue: (state, action) => {
      state.itemValue = state.itemValue + action.payload;
    },
    decreseValue: (state, action) => {
      if (state.itemValue < 1) {
        return;
      }
      state.itemValue = state.itemValue - action.payload;
    },
    setItemValue: (state, action) => {
      state.itemValue = action.payload;
    },
    setSubTotal: (state, action) => {
      state.subtotal = action.payload;
    },
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },
    setBasketVisible: (state) => {
      state.basketVisible = false;
    },
  },
});

export const {
  increseValue,
  decreseValue,
  setItemValue,
  setSubTotal,
  setShipping,
  setBasketVisible,
} = basketSlice.actions;

export const selectBasketItemValue = (state) => state.basket.itemValue;
export const selectBasketUnitPrice = (state) => state.basket.unitPrice;
export const selectBasketSubtotal = (state) => state.basket.subtotal;
export const selectBasketShipping = (state) => state.basket.shipping;
export const selectBasketVisible = (state) => state.basket.basketVisible;

export default basketSlice.reducer;
