import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: JSON.parse(sessionStorage.getItem("session")) || {
    session: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.session = action.payload.session;
      const saveState = JSON.stringify({
        user: state.user,
        accessToken: state.token,
      });
      sessionStorage.setItem("session", saveState);
    },
    logout: (state) => {
      state.session = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
