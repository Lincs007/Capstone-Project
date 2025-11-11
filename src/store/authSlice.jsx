import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
  currentUser: null, // No user is logged in initially
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState, // Attach initial state
  reducers: {
    // Action to log in a user successfully
    loginSuccess: (state, action) => {
      state.currentUser = action.payload; // Save user info in state
    },
    // Action to log out a user
    logout: (state) => {
      state.currentUser = null; // Clear the current user
    },
  },
});

// Export actions to dispatch in components
export const { loginSuccess, logout } = authSlice.actions;

// Export reducer to include in the store
export default authSlice.reducer;
