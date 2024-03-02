/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialAuthState } from "../../../models";
import { AuthService } from "../../../services/auth";

const initialState: InitialAuthState = {
  user: {
    displayName: "",
    email: "",
    phoneNumber: null,
    photoURL: "",
    providerId: "",
    uid: "",
  },
  isAuthLoading: false,
  isAuthSucess: false,
  isAuthError: false,
  message: "",
};

export const signInWithGoogle = createAsyncThunk(
  "AUTH/SignInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.signInWithGoogle();
      return response;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
      state.isAuthLoading = initialState.isAuthLoading;
      state.isAuthSucess = initialState.isAuthSucess;
      state.isAuthError = initialState.isAuthError;
      state.message = initialState.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state, { payload }) => {
        state.isAuthLoading = false;
        state.isAuthSucess = true;
        if (payload) {
          state.user = payload;
        }
      })
      .addCase(signInWithGoogle.rejected, (state, { payload }) => {
        state.isAuthLoading = false;
        state.isAuthError = true;
        state.message = payload as string;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
