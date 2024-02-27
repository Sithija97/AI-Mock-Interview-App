import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthLoading: false,
  authError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {},
});

// export const {  } = authSlice.actions;

export default authSlice.reducer;
