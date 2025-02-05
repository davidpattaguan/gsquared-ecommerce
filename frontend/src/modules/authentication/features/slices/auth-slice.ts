import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        let errorMessage = "Failed to login";
        try {
          const errorData = await response.json();
          console.log(errorData.message);
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {}
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const sessionData = {
        user: data.user,
        accessToken: data.accessToken,
        expiry: new Date().getTime() + 3600000,
      };

      sessionStorage.setItem("session", JSON.stringify(sessionData));

      return sessionData;
    } catch (error: any) {
      return rejectWithValue(error instanceof Error ? error : "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        let errorMessage = "Failed to register";
        try {
          const errorData = await response.json();
          console.log(errorData.message);
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {}
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error instanceof Error ? error : "Registration failed"
      );
    }
  }
);

const initialState: { session: any; loading: boolean; error: string | null } =
  (() => {
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
        state.session = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
