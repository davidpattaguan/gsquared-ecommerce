import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/modules/authentication/features/slices/auth-slice";
import productsSlice from "@/modules/products/features/slices/products-slice";

const store = configureStore({
  reducer: {
    auth: authSlice, // Add the store reducer
    products: productsSlice,
  },
});

export default store;
