import {createSlice} from "@reduxjs/toolkit";
import { Modal } from "antd";
import { jwtDecode } from "jwt-decode";
import { loginUserAction } from "./auth.action";
import { getItemCookie, removeItemCookie, setItemCookie } from "@/utils/helper/cookie";
import { getLocalstorageData, removeLocalstorageData, setLocalstorageData } from "@/utils/helper/localstorage";

const initialState = {
  user: getLocalstorageData('user') || null,
  isAuthenticated: !!getItemCookie('access_token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Modal.destroyAll();
      removeItemCookie('access_token');
      removeLocalstorageData('user');

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
        setItemCookie({name: 'access_token', timer: new Date(exp), data: accessToken})
        setLocalstorageData({key: 'user', data: {
          ...restValues,
        }});
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