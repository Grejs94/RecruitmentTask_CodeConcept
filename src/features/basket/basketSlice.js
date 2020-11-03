import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  reducers: {},
});

export const {} = basketSlice.actions;

export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
