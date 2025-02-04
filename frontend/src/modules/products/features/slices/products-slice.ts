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
  products: Product[];
  pagination: PaginationInfo;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
  },
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  ProductsResponse,
  string | undefined
>("products/fetchProducts", async (queryString = "") => {
  const response = await fetch(
    `http://localhost:3000/api/v1/products${queryString}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductsResponse>) => {
          state.loading = false;
          state.products = action.payload.result;
          state.pagination = action.payload.pagination;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default productsSlice.reducer;
