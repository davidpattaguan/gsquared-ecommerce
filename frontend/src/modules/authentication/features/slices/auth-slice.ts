import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        credentials
      );

      const sessionData = {
        user: response.data.user,
        accessToken: response.data.accessToken,
        expiry: new Date().getTime() + 3600000, // Expires in 1 hour
      };

      sessionStorage.setItem("session", JSON.stringify(sessionData));

      return sessionData;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

const initialState = (() => {
  const storedSession = sessionStorage.getItem("session");
  if (storedSession) {
    const parsedSession = JSON.parse(storedSession);
    if (parsedSession.expiry > new Date().getTime()) {
      return { session: parsedSession, loading: false, error: null };
    }
  }
  sessionStorage.removeItem("session");
  return { session: null, loading: false, error: null };
})();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.session = null;
      sessionStorage.removeItem("session");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.session = action.payload; // Store user and accessToken in Redux state
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
