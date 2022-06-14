import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
import users from "./userSlice";

const store = configureStore({
  reducer: {
    user: users,
    products: products,
  },
});

export default store;
