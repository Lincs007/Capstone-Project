import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: [],
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    saveUserDetails: (state, action) => {
      const userData = action.payload;
      state.userDetails.push({ ...userData, id: state.userDetails.length + 1 });
    },
  },
});

export const { saveUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
