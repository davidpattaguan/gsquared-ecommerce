import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/modules/authentication/features/slices/auth-slice";
import productsSlice from "@/modules/products/features/slices/products-slice";
import modalSlice from "@/features/modalSlice";
const store = configureStore({
  reducer: {
    auth: authSlice, // Add the store reducer
    products: productsSlice,
    modal: modalSlice,
  },
});

// TypeScript types for useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
