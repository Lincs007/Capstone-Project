import { createSlice } from "@reduxjs/toolkit";

// Initial state with an empty array to store user details
const initialState = {
  userDetails: [],
};

// Create the slice
const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    // Action to save user details
    saveUserDetails: (state, action) => {
      const userData = action.payload; // Get user data from action payload
      // Add the new user to the userDetails array with a unique id
      state.userDetails.push({ ...userData, id: state.userDetails.length + 1 });
    },
  },
});

// Export the action creator
export const { saveUserDetails } = userDetailsSlice.actions;

// Export the reducer for the store
export default userDetailsSlice.reducer;
