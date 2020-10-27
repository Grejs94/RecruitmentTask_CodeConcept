import { configureStore } from "@reduxjs/toolkit";
import { basketSlice as basketReducer } from "features";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
