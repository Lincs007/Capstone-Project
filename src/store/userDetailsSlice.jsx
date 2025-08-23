import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    firstName: "",
    surname: "",
    userName: "",
    email: "",
    password: "",
  },
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    saveFirstName: (state, action) => {
      state.userDetails.firstName = action.payload;
    },
    saveSurname: (state, action) => {
      state.userDetails.surname = action.payload;
    },
    saveUsername: (state, action) => {
      state.userDetails.userName = action.payload;
    },
    saveEmail: (state, action) => {
      state.userDetails.email = action.payload;
    },
    savePassword: (state, action) => {
      state.userDetails.password = action.payload;
    },
  },
});

export const {
  saveFirstName,
  saveSurname,
  saveUsername,
  saveEmail,
  savePassword,
} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
