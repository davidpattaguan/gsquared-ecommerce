import { RootState } from "@/store/store";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  manufacturer: string;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

interface ProductsResponse {
  statusCode: number;
  message: string;
  result: Product[];
  pagination: PaginationInfo;
}

interface ProductsState {
  orders: any;
  pagination: PaginationInfo;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  orders: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
  },
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk<
  ProductsResponse,
  string | undefined,
  { state: RootState }
>("products/fetchProducts", async (queryString = "", { getState }) => {
  const state = getState();
  const accessToken = state.auth.session?.accessToken; // Adjust this based on your auth state structure

  if (!accessToken) {
    throw new Error("No access token available");
  }

  const response = await fetch(`http://localhost:3000/api/v1/orders/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data;
});

const ordersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOrders.fulfilled,
        (state, action: PayloadAction<ProductsResponse>) => {
          state.loading = false;
          state.orders = action.payload.result;
          state.pagination = action.payload.pagination;
        }
      )
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default ordersSlice.reducer;
