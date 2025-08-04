import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_LOGIN } from "@/configs/paths/API_PATH";
import { postDataApi } from "@/api";

export const loginUserAction = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await postDataApi(API_LOGIN, credentials);
      return fulfillWithValue(response, {
        showSuccessToast: true,
        successMessage: "Login successful",
        skipErrorToast: false,
      });
    } catch (error) {
      const message = error.response?.data?.errorMessage || "Login failed";
      return rejectWithValue(message);
    }
  }
);
