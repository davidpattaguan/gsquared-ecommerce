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
  product: Product | null; // Fixed type
  pagination: PaginationInfo;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  product: null, // Fixed syntax (removed semicolon)
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

export const fetchProductById = createAsyncThunk<Product, number>(
  "products/fetchProductById",
  async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data.result;
  }
);

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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.product = action.payload; // ✅ Directly assign the fetched product
        }
      )
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product";
      });
  },
});

export default productsSlice.reducer;
