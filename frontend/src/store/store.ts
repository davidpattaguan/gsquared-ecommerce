import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/modules/authentication/features/slices/auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice, // Add the store reducer
  },
});

export default store;
