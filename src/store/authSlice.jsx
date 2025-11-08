import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
