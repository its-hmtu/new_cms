import {createSlice} from "@reduxjs/toolkit";
import { Modal } from "antd";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { loginUserAction } from "./auth.action";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!Cookies.get('access_token'),
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.fulfilled, (state, action) => {
        const { accessToken, refreshToken, ...restValues } = action.payload.data || action.payload;
        const decoded = jwtDecode(accessToken);
        const exp = decoded.exp * 1000;
        Cookies.set('access_token', accessToken, {
          expires: new Date(exp),
          sameSite: 'Strict',
        })
        localStorage.setItem('user', JSON.stringify({
          ...restValues,
        }));
        state.isAuthenticated = true;
        state.user = {
          ...restValues
        };
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isAuthenticated = false;
      });
  }
})

export const {
  logout: logoutAction,
} = authSlice.actions
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;