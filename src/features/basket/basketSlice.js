import { createSlice } from "@reduxjs/toolkit";
import * as image from "images";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    status: "iddle",
    items: [
      {
        picture: image.headphones,
        name: "Headphones",
        price: 11.9,
        id: 0,
        value: 2,
      },
      {
        picture: image.mobilePhone,
        name: "Mobile phone",
        price: 20.99,
        id: 1,
        value: 1,
      },
    ],
    shipping: 23.8,
    subtotal: 0,
    grandTotal: 0,
  },
  reducers: {
    deleteItem: (state, action) => {
      state.items = [...state.items].filter(
        (item) => item.id !== action.payload
      );
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

      state.items = [...state.items].map((item) => ({
        ...item,
        value:
          item.id === action.payload.id
            ? parseInt(action.payload.value)
            : item.value,
      }));
    },
    incrementValue: (state, action) => {
      state.items = [...state.items].map((item) => ({
        ...item,
        value: item.id === action.payload ? item.value + 1 : item.value,
      }));
    },
    decrementValue: (state, action) => {
      state.items = [...state.items].map((item) => ({
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

export default basketSlice.reducer;
