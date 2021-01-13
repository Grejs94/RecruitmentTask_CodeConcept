import { configureStore } from "@reduxjs/toolkit";
import { shoppingPage } from "features";

export default configureStore({
  reducer: {
    shoppingPage,
  },
});
