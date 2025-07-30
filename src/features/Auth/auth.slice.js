import {createSlice} from "@reduxjs/toolkit";
import { Modal } from "antd";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { loginUser } from "./auth.thunks";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!Cookies.get('access_token'),
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Modal.destroyAll();
      Cookies.remove('access_token');
      localStorage.removeItem('user');

      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { accessToken, refreshToken, ...restValues } = action.payload.data;
        const decoded = jwtDecode(accessToken);
        const exp = decoded.exp * 1000;
        Cookies.set('access_token', accessToken, {
          expires: new Date(exp),
          sameSite: 'Strict',
        })
        localStorage.setItem('user', JSON.stringify({
          ...restValues,
        }));
        state.loading = false;
        state.isAuthenticated = true;
        state.user = {
          ...restValues
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  }
})

export const {
  logout: logoutAction,
  clearError: clearErrorAction,
} = authSlice.actions
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
