import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "features";

export default configureStore({
  reducer: {
    basket: basketSlice,
  },
});
